import { useContext, useState } from 'react';
import { UserContext } from '../context/user';
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import oktoberfest2 from "../assets/oktoberfest2.jpeg"
import oktoberfest3 from '../assets/oktoberfest3.JPG'

function SignUp() {
    const history = useHistory();
    const [errors, setErrors] = useState([])
    const { setUser } = useContext(UserContext);

    const formSchema = yup.object().shape({
        username: yup.string().required("Username needed to login."),
        password: yup.string().required("Password required to login."),
    });

    const formik = useFormik ({
        initialValues: {
            username: "",
            password: "",
        },
        validationSchema: formSchema,
        onSubmit: (values) => {console.log(values)
            fetch('/login', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(values),
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
                <img src={oktoberfest2} 
                alt="Oktoberfest" 
                className='left-image'
                />
                <h6 className='left-image-text'>Paulaner Brewery Horses Walk Through Oktoberfest</h6>
            </div>
            <div className='center-section'>
                <h1 className='signin-title'>Sign In Here!</h1>
                <form onSubmit={formik.handleSubmit}>
                    <div className='form-group'>
                        <label>Username:</label>
                        <input 
                            type="text"
                            name="username"
                            value={formik.values.username}
                            onChange={formik.handleChange}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Password:</label>
                        <input 
                            type="password"
                            name="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                        />
                    </div>
                    <div>
                        <input 
                            type="submit"
                            value="Sign In"
                            className="btn btn-primary"
                        />
                    </div>
                    {errors.length > 0
                    ? errors.map((errorMessage) => (
                    <h5 key={errorMessage} className='error-message'>
                    {errorMessage}
                    </h5>
                    ))
                    : null}
                </form>
            </div>
            <div className='right-section'>
                <img src={oktoberfest3} 
                alt="Oktoberfest" 
                className='right-image'
                />
                <h6 className='right-image-text'>View of Munich from Flying Swings</h6>
            </div>
        </div>
    )
}

export default SignUp