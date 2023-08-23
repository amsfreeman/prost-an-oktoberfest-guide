import { useContext, useState } from 'react';
import { UserContext } from '../context/user';
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

function SignUp() {
    const history = useHistory();
    const { setUser } = useContext(UserContext);
    const [errors, setErrors] = useState([]);

    const formSchema = yup.object().shape({
        username: yup.string().required("Username is required to sign up"),
        password: yup.string().required("Password is required to sign up"),
        email: yup.string().email()
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
        <div>
            <h1 className='signup-title'>Sign Up Here!</h1>
            <div className='signin-form-container'>
                <form onSubmit={formik.handleSubmit}>
                    <div className='form-group'>
                        <label>Username: </label>
                        <input 
                            type="text"
                            name="username"
                            value={formik.values.username}
                            onChange={formik.handleChange}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Email: </label>
                        <input 
                            type="text"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Password: </label>
                        <input 
                            type="password"
                            name="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Age: </label>
                        <input 
                            type="text"
                            name="age"
                            value={formik.values.age}
                            onChange={formik.handleChange}
                        />
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
    )

}
export default SignUp