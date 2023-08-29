import { useContext, useState } from 'react';
import { UserContext } from '../context/user';
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import oktoberfest4 from "../assets/oktoberfest4.jpeg"
import oktoberfest5 from '../assets/oktoberfest5.jpeg'

function SignUp() {
    const history = useHistory();
    const { setUser } = useContext(UserContext);
    const [errors, setErrors] = useState([]);

    const formSchema = yup.object().shape({
        username: yup.string().required("Username is required to sign up"),
        email: yup.string().email("Email with email format is Required to sign up"),
        password: yup.string().required("Password is required to sign up"),
        age: yup.string().required("Age is required to sign up."),
    });

    const formik = useFormik({
        initialValues : {
            username: "",
            email: "",
            password: "",
            age: "",
        },
        validationSchema: formSchema,
        onSubmit: (values) => {
            console.log(values)
            fetch('/users', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(values)
            }) 
                .then((r) => {
                    if (r.ok) {
                        r.json()
                        .then((user) => {setUser(user);
                        history.push('/');
                        })
                    } else {
                        r.json().then((errorMessage) => setErrors(errorMessage.errors));
                    }
                })
        }
    })


    return (
        <div className='layout-container'>
            <div className='left-section'>
                <img src={oktoberfest4} 
                alt="Oktoberfest" 
                className='left-image'
                />
                <h6 className='left-image-text'>View of Oktoberfest from the Riesenrad (similar to a Ferris Wheel) on a rainy day</h6>
            </div>
            <div className='center-section'>
                <h1 className='signup-title'>Sign Up Here!</h1>
                <div className='d-flex justify-content-center'>
                    <form onSubmit={formik.handleSubmit}>
                        <div className='form-group'>
                            <label>Username: </label>
                            <input 
                                type="text"
                                name="username"
                                className='form-control'
                                value={formik.values.username}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                            />
                            {formik.touched.username && formik.errors.username && (
                                <div>{formik.errors.username}</div>
                            )}
                        </div>
                        <div className='form-group'>
                            <label>Email: </label>
                            <input 
                                type="text"
                                name="email"
                                className='form-control'
                                value={formik.values.email}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                            />
                            {formik.touched.email && formik.errors.email && (
                                <div>{formik.errors.email}</div>
                            )}
                        </div>
                        <div className='form-group'>
                            <label>Password: </label>
                            <input 
                                type="password"
                                name="password"
                                className='form-control'
                                value={formik.values.password}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                            />
                            {formik.touched.password && formik.errors.password && (
                                <div>{formik.errors.password}</div>
                            )}
                        </div>
                        <div className='form-group'>
                            <label>Age: </label>
                            <input 
                                type="text"
                                name="age"
                                className='form-control'
                                value={formik.values.age}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                            />
                            {formik.touched.age && formik.errors.age && (
                                <div>{formik.errors.age}</div>
                            )}
                        </div>
                        <input 
                            type="submit"
                            value="Sign Up"
                            className="btn btn-primary"
                        />
                        {errors.length > 0
                        ? errors.map((errorMessage) => (
                        <h5 key={errorMessage} className='error-message'>
                        {errorMessage}
                        </h5>
                        ))
                        : null}
                    </form>
                </div>
            </div>
            <div className='right-section'>
                <img src={oktoberfest5} 
                alt="Oktoberfest" 
                className='right-image'
                />
                <h6 className='right-image-text'>View of Oktoberfest from the Riesenrad (similar to a Ferris Wheel) on a nice weekday afternoon</h6>
            </div>
        </div>
    )

}
export default SignUp