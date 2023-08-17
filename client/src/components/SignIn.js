import { useContext } from 'react';
import { UserContext } from '../context/user';
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

function SignUp() {
    const history = useHistory();
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
                        console.log("Fubar");
                }
            })
        }
    })

    return (
        <>
            <h1>Sign In Here!</h1>
            <form onSubmit={formik.handleSubmit}>
                <label>Username</label>
                <input 
                    type="text"
                    name="username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                />
                <label>Password</label>
                <input 
                    type="password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                />
                <input 
                    type="submit"
                    value="Sign In"
                    className="btn btn-primary"
                />
            </form>
        </>
    )
}

export default SignUp