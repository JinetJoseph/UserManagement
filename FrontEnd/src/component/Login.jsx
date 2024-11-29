import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './login.css';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log("Form Data:", data);
        axios.post('http://localhost:3000/users/login', data)
            .then(response => {
                console.log(response.data);
                alert("Login Success");
            })
            .catch(error => console.error(error));
    };

    return (
        <>
            <h2>LOGIN FORM</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div style={{ marginBottom: '15px' }}>
                    Email:
                    <input
                        {
                            ...register("email", {
                                required: "Email is required"
                            })
                        }
                        type="email"
                    />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>

                <div style={{ marginBottom: '15px' }}>
                    Password:
                    <input
                        {
                            ...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 8, message: "Password must be at least 8 characters"
                                }
                            })
                        }
                        type="password"
                        placeholder="Enter your password"
                    />
                    {errors.password && <p>{errors.password.message}</p>}
                </div>

                <button type='Submit'>Login</button>
            </form>

            <p style={{ marginTop: '20px', textAlign: 'center' }}>
                Don't have an account? <Link to="/Signup" style={{ color: '#007BFF', textDecoration: 'none' }}>Sign Up</Link>
            </p>
        </>
    );
};

export default Login;
