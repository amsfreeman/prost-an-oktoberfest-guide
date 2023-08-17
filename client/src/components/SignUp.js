import { useContext } from 'react';
import { UserContext } from '../context/user';
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

function SignUp() {
    const history = useHistory();
    const { setUser } = useContext(UserContext);

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
                        console.log('Whiskey Tango Foxtrot');
                    }
                })
        }
    })


    return (
        <div>
            <h1>SignUp Here!</h1>
            <form onSubmit={formik.handleSubmit}>
                <label>Username</label>
                <input 
                    type="text"
                    name="username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                />
                <label>Email</label>
                <input 
                    type="text"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                />
                <label>Password</label>
                <input 
                    type="password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                />
                <label>Age</label>
                <input 
                    type="text"
                    name="age"
                    value={formik.values.age}
                    onChange={formik.handleChange}
                />
                <input 
                    type="submit"
                    value="Sign Up"
                />
            </form>
        </div>
    )

}
export default SignUp