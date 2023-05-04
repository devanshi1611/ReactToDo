import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import { useNavigate } from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


function Login({ setIsLogin }) {

    const history = useNavigate();

    const [inpval, setInpval] = useState({
        email: "",
        password: ""
    })

    console.log(inpval);

    const getdata = (e) => {
        // console.log(e.target.value);

        const { value, name } = e.target;
        // console.log(value,name);

        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })
    }

    const adddata = (e) => {
        e.preventDefault();

        const getuserArr = localStorage.getItem("userkey");
        console.log(getuserArr);

        const { email, password } = inpval;

        if (email === "" || password === "") {
            toast.error('All fiels are required here...', {
                position: "top-center",
            });
        }
        else if (!email.includes("@")) {
            toast.error('Enter a valid email ID!', {
                position: "top-center",
            });
        }
        else if (password.length < 6) {
            toast.error('Enter valid password!!!', {
                position: "top-center",
            });
        }
        else {

            if (getuserArr && getuserArr.length) {

                const userobj = JSON.parse(getuserArr);

                const userdata = Object.values(userobj);

                console.log(userdata);

                const userlogin = userdata.filter((el, k) => {
                    return el.email === email && el.password === password;
                });

                if (userlogin.length === 0) {
                    alert("invalid details!!")
                } else {
                    console.log("User loged in successfully.");
                    setIsLogin(true);
                    localStorage.setItem("user_login", JSON.stringify(getuserArr));
                    history("/details");
                }
            }
        }
    }

    return (
        <>
            <div className="container mt-3">
                
                <section className='d-flex justufy-content-between'>

                    <div className="left_data mt-3 " style={{ width: "100%" }}>
                        
                        <h3 className='text-center col-lg-6'>Sign IN</h3>

                        <Form>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name="email" onChange={getdata} placeholder="abc@gmail.com" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" onChange={getdata} placeholder="" />
                            </Form.Group>

                            <button class="login_btn" onClick={adddata}>Submit</button>

                        </Form>

                    </div>

                    <div className="right_data" style={{ width: "100%" }}>
                        <div className="sign_img mt-3">
                            <img src='./signup.png' style={{ maxWidth: 450 }} alt='Not Found!' />
                        </div>
                    </div>

                </section>
                <ToastContainer />
            </div>
        </>
    )
}

export default Login
