import { useContext, useState } from 'react';
import { UserContext } from '../context/user';
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

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
        <>
            <h1 className='signin-title'>Sign In Here!</h1>
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
                            <label>Password: </label>
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
        </>
    )
}

export default SignUp