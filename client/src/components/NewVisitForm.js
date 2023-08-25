import { useContext } from 'react';
import { UserContext } from '../context/user';
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

function NewVisitForm({addNewVisit}){
    const history = useHistory();
    const { user } = useContext(UserContext);

    const formSchema = yup.object().shape({
        visit_rating: yup
            .mixed()
            .oneOf(['1', '2', '3', '4', '5'], 'Please select a valid option')
            .required("Rating is required to create a visit."),
        tent_id: yup
            .mixed()
            .oneOf(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'], 'Please select a valid option.')
            .required("Tent is required to create a visit.")
    })

    const formik = useFormik({
        initialValues : {
            date: "",
            visit_rating: '',
            tent_id: '',
            user_id: {user}.id,
        },
        validationSchema: formSchema,
        onSubmit: (values) => {
            values.user_id = user.id
            values.visit_rating = parseInt(values.visit_rating)
            values.tent_id = parseInt(values.tent_id)
            console.log(values)
            fetch('/oktoberfest_visits', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(values)
            }) 
                .then(r => r.json())
                .then(values => addNewVisit(values))
                history.push('/oktoberfest_visits')
        }
    })

    return(
        <div>
        <h1>Add Visit Here!</h1>
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label>Date</label>
                <input 
                    type="date"
                    name="date"
                    value={formik.values.date}
                    onChange={formik.handleChange}
            />
            </div>
            <div>
                <label>Visit Rating</label>
                <select
                    type="select"
                    name="visit_rating"
                    onBlur={formik.handleBlur}
                    value={formik.values.visit_rating}
                    onChange={formik.handleChange}
                >
                    <option value='' disabled>Select an Option:</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                </select>
            </div>
            <div>
                <label>Tent Visited</label>
                <select
                    type="select"
                    name="tent_id"
                    value={formik.values.tent_id}
                    onChange={formik.handleChange}
                >
                    <option value='' disabled>Select an Option:</option>
                    <option value='1'>Armbrustschützenzelt</option>
                    <option value='2'>Augustiner-Festhalle</option>
                    <option value='3'>Bräurosl</option>
                    <option value='4'>Fischer-Vroni</option>
                    <option value='5'>Käfer Wiesnschänke</option>
                    <option value='6'>Hacker-Festzelt</option>
                    <option value='7'>Hofbräu-Festzelt</option>
                    <option value='8'>Löwenbräu-Festzelt</option>
                    <option value='9'>Marstall-Festzelt</option>
                    <option value='10'>Ochsenbraterei</option>
                    <option value='11'>Schottenhamel-Festhalle</option>
                    <option value='12'>Schützenfestzelt</option>
                    <option value='13'>Weinzelt</option>
                    <option value='14'>Winzerer Fähndl (Paulaner Festzelt)</option>
                </select>
            </div>
            <input 
                type="submit"
                value="ADD VISIT!"
                className="btn btn-primary"
            />
            {formik.submitCount > 0 && formik.errors.visit_rating ? (
                <h5 className='yup-error'>{formik.errors.visit_rating}</h5>
            ) : null}
            {formik.submitCount > 0 && formik.errors.tent_id ? (
                <h5 className='yup-error'>{formik.errors.tent_id}</h5>
            ): null }
        </form>
    </div>
    )
}

export default NewVisitForm