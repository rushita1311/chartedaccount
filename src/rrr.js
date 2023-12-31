import { Maximize } from '@mui/icons-material';
import { useFormik } from 'formik';
import React, { useState } from 'react'
import { Eye, EyeSlash } from 'react-bootstrap-icons';
import * as Yup from "yup";


export default function Rrr() {

    const [type, setType] = useState('password')
    const [Data, setData] = useState([])

    const formik = useFormik({
        initialValues: {
            full_name: "",
            email: "",
            password: "",
            confirm_password: ""
        },
        validationSchema: Yup.object({
            full_name: Yup.string()
                .min(2, "Mininum 2 characters")
                .max(15, "Maximum 15 characters")
                .required("Required!"),
            email: Yup.string()
                .email("Invalid email format")
                .required("Required!"),
            password: Yup.string()
                .min(8, "Minimum 8 characters")
                .max(10, 'maximim 10 characters')
                .required("Required!"),
            confirm_password: Yup.string()
                .oneOf([Yup.ref("password")], "Password's not match")
                .required("Required!")
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            localStorage.setItem("values",JSON.stringify([...Data,values]))
        }
    });
    return (
        <>

            <div className="App">
                <h1>Validation with Formik + Yup</h1>

                <form onSubmit={formik.handleSubmit}>
                    <div>
                        <label>Full Name</label>
                        <input
                            className='form-control'
                            type="text"
                            name="full_name"
                            value={formik.values.full_name}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.full_name && formik.touched.full_name && (
                            <p>{formik.errors.full_name}</p>
                        )}
                    </div>
                    <div>
                        <label>Email</label>
                        <input
                            className='form-control'
                            type="email"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.email && formik.touched.email && (
                            <p>{formik.errors.email}</p>
                        )}
                    </div>
                    <div>
                        <label>Password</label>
                        <input
                            className='form-control'
                            // type="password"
                            type={type}
                            name="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.password && formik.touched.password && (
                            <p>{formik.errors.password}</p>
                        )}
                        <button onClick={() => { type === 'password' ? setType('text') : setType('password') }} >
                            {type === 'password' ? <Eye /> : <EyeSlash />}

                            {/* <Eye/> */}
                        </button>

                        {/* <button onClick={() => { type === 'password' ? setType('text') : setType('password') }}>show</button>
                        <button onClick={() => { type === 'text' ? setType('password') : setType('text') }}>hide</button> */}

                    </div>
                    <div>
                        <label>Confirm Password</label>
                        <input
                            className='form-control'
                            type="password"
                            name="confirm_password"
                            value={formik.values.confirm_password}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.confirm_password &&
                            formik.touched.confirm_password && (
                                <p>{formik.errors.confirm_password}</p>
                            )}
                    </div>
                    <div>
                        <button className='btn btn-primary' type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </>

    )
}
