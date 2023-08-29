import { useContext } from 'react';
import { UserContext } from '../context/user';
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import oktoberfest10 from '../assets/oktoberfest10.JPG';
import oktoberfest11 from '../assets/oktoberfest11.JPG';

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
        <div className='layout-container'>
            <div className='left-section'>
                <img src={oktoberfest10} 
                alt="Oktoberfest" 
                className='left-image'
                />
                <h6 className='left-image-text'>View of the Bavarian Statue and Hall of Fame (Ruhmeshalle) from the Riesenrad (similar to a Ferris Wheel)</h6>
            </div>
            <div className="center-section">
                <h1 className='new-visit-title'>Add Visit Here!</h1>
                <div className='d-flex justify-content-center'>
                    <form onSubmit={formik.handleSubmit}>
                        <div className='form-group'>
                            <label>Date</label>
                            <input 
                                type="date"
                                name="date"
                                className='form-control'
                                value={formik.values.date}
                                onChange={formik.handleChange}
                        />
                        </div>
                        <div className="form-group">
                            <label>Visit Rating</label>
                            <select
                                type="select"
                                name="visit_rating"
                                className='form-control'
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
                        <div className="form-group">
                            <label>Tent Visited</label>
                            <select
                                type="select"
                                name="tent_id"
                                className="form-control"
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
            </div>
            <div className='right-section'>
                <img src={oktoberfest11} 
                alt="Oktoberfest" 
                className='right-image'
                />
                <h6 className='right-image-text'>View of the Riesenrad (similar to a Ferris Wheel) as the sun sets</h6>
            </div>
        </div>
    )
}

export default NewVisitForm