import { useContext, useState } from 'react';
import { UserContext } from '../context/user';
import { useHistory } from "react-router-dom";
import { useFormik} from "formik";
import * as yup from "yup";


function AllVisits({visit}) {
    const { user } = useContext(UserContext) 
    const [ showForm, setShowForm ] = useState(false)
    const history = useHistory();

    const formSchema = yup.object().shape({
        visit_rating: yup
            .mixed()
            .oneOf(['1', '2', '3', '4', '5'], 'Please select a valid option')
            .required("Rating is required to create a visit."),
        tent_id: yup
            .mixed()
            .oneOf(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'], 'Please select a valid option.')
            .required("Tent is required to create a visit.")
    });

    const handleShowForm = () => {
        setShowForm(!showForm)
    }

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
            fetch(`/oktoberfest_visits/${visit.id}`, {
                method: 'PATCH',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(values)
            })
                history.go(0)
        }
    })
    
    function handleDelete() {
        fetch(`/oktoberfest_visits/${visit.id}`, {
            method: "DELETE",
        })
        history.go(0)
    }

    return(
        <div className="visit-card">
            { user ? 
                <div>
                    <h2 className='visit-card-info'>Visit Info</h2>
                    <h3 className='visit-card-text'>
                        Tentname: 
                        {'\n'}
                        {visit.tent.name}
                    </h3>
                    <h4 className='visit-card-text'>Rating: {visit.visit_rating}/5</h4>
                    <h4 className='visit-card-text'>Date: {visit.date}</h4>
                    <h5 className='visit-card-text'>User: {visit.user.username}</h5>
                    <div className='edit-visit'>
                        { user.id === visit.user_id ?
                        <button onClick={handleShowForm}>Edit Visit 🍺</button>
                        : null}
                        { showForm ? (
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
                                    value="Edit Visit!"
                                    className="btn btn-primary"
                                />
                                {formik.submitCount > 0 && formik.errors.visit_rating ? (
                                    <p className='yup-error-edit'>{formik.errors.visit_rating}</p>
                                ) : null}
                                {formik.submitCount > 0 && formik.errors.tent_id ? (
                                    <p className='yup-error-edit'>{formik.errors.tent_id}</p>
                                ): null }
                            </form>
                            ) : null }
                    </div>
                    <div className="delete-visit">
                    { user.id === visit.user_id ? (
                            <button onClick = {handleDelete}>Delete Visit 🍺</button>
                    ) : null }
                    </div>
                </div>
        :
            <div>
                <h2 className='visit-card-info'>Visit Info</h2>
                <h3 className='visit-card-text'>
                    Tentname: 
                    {'\n'}
                    {visit.tent.name}
                </h3>
                <h4 className='visit-card-text'>Rating: {visit.visit_rating}/5</h4>
                <h4 className='visit-card-text'>Date: {visit.date}</h4>
                <h5 className='visit-card-text'>User: {visit.user.username}</h5>
            </div>
        }
        </div>
    
    )
}

export default AllVisits