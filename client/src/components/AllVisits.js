import { useContext, useState } from 'react';
import { UserContext } from '../context/user';
import { useFormik} from "formik";
import * as yup from "yup";


function AllVisits({visit, onDelete, onEdit}) {
    const { user } = useContext(UserContext) 
    const [ showForm, setShowForm ] = useState(false)

    const formSchema = yup.object().shape({
        tent_id: yup
            .mixed()
            .oneOf(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'], 'Please select a valid tent name.')
            .required("Tent is required to create a visit."),
        visit_rating: yup
            .mixed()
            .oneOf(['1', '2', '3', '4', '5'], 'Please select a valid rating.')
            .required("Rating is required to create a visit.")
    });

    const handleShowForm = () => {
        setShowForm(!showForm)
    }

    const formik = useFormik({
        initialValues : {
            date: visit.date,
            visit_rating: visit.visit_rating,
            tent_id: visit.tent_id,
            user_id: {user}.id,
        },
        validationSchema: formSchema,
        onSubmit: (values) => {
            values.visit_rating = parseInt(values.visit_rating)
            values.tent_id = parseInt(values.tent_id)
            setShowForm(!showForm)
                fetch(`/oktoberfest_visits/${visit.id}`, {
                method: 'PATCH',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(values)
                })
                    .then(r => r.json())
                    .then((updatedVisit) => {
                        onEdit(visit.id, updatedVisit)
                    })
                }
            }
        )
    
    function handleDelete() {
        fetch(`/oktoberfest_visits/${visit.id}`, {
            method: "DELETE",
        })
        onDelete(visit.id)
    }

    return(
        <div className={`visit-card ${showForm ? 'expanded' : ''}`}>
            <div className="visit-card-header">
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
                                <div className='d-flex justify-content-center'>
                                    <form onSubmit={formik.handleSubmit}>
                                        <div className='form-group'>
                                            <label>Tent Visited:</label>
                                            <select
                                                type="select"
                                                name="tent_id"
                                                className='form-control'
                                                value={formik.values.tent_id}
                                                onChange={formik.handleChange}
                                            >
                                                <option value='' disabled>Select an Option:</option>
                                                <option value='1'>Armbrustschützenzelt</option>
                                                <option value='2'>Augustiner-Festhalle</option>
                                                <option value='3'>Bräurosl</option>
                                                <option value='4'>Fischer-Vroni</option>
                                                <option value='5'>Hacker-Festzelt</option>
                                                <option value='6'>Hofbräu-Festzelt</option>
                                                <option value='7'>Käfer Wiesnschänke</option>
                                                <option value='8'>Löwenbräu-Festzelt</option>
                                                <option value='9'>Marstall-Festzelt</option>
                                                <option value='10'>Ochsenbraterei</option>
                                                <option value='11'>Schottenhamel-Festhalle</option>
                                                <option value='12'>Schützenfestzelt</option>
                                                <option value='13'>Weinzelt</option>
                                                <option value='14'>Winzerer Fähndl (Paulaner Festzelt)</option>
                                            </select>
                                        </div>
                                        <div className='form-group'>
                                            <label>Visit Rating:</label>
                                            <select
                                                type="select"
                                                name="visit_rating"
                                                className='form-control'
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
                                        <div className='form-group'>
                                            <label>Date:</label>
                                            <input 
                                                type="date"
                                                name="date"
                                                className='form-control'
                                                value={formik.values.date}
                                                onChange={formik.handleChange}
                                            />
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
                                </div>
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
        </div>
    
    )
}

export default AllVisits