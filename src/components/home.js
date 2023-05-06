import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {

    const history = useNavigate();

    const [inpval, setInpval] = useState({
        name: "",
        email: "",
        date: "",
        password: ""
    })

    const [data] = useState([]);
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

        const { name, email, date, password } = inpval;

        if (name === "" || email === "" || date === "" || password === "") {
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
            console.log("data added successfully.");

            history("/login")

            localStorage.setItem("userkey", JSON.stringify({ ...data, inpval }));

            toast.error('Your Data Is Added Successfully.', {
                position: "top-center",
            });
        }
    }

    return (
        <>
            <div className="container mt-3">
                <section className='d-flex justufy-content-between'>
                    <div className="left_data mt-3 " style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-6'>Sign Up</h3>
                        <Form>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Label>User Name</Form.Label>
                                <Form.Control type="text" name="name" onChange={getdata} />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name="email" onChange={getdata} placeholder="abc@gmail.com" />

                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Label>Date</Form.Label>
                                <Form.Control type="date" name="date" onChange={getdata} />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" onChange={getdata} placeholder="" />
                            </Form.Group>

                            <button class="login_btn" onClick={adddata}>Submit</button>

                        </Form>

                        <p className='mt-3'>Already have an account? <span><NavLink to="/login" >SignIn</NavLink></span></p>
                    </div>

                    <div className="right_data" style={{ width: "100%" }}>
                        <div className="sign_img mt-3">
                            <img src='https://img.freepik.com/free-vector/modern-check-list-illustration_79603-146.jpg?size=626&ext=jpg&ga=GA1.1.698033446.1657733709&semt=ais' style={{ maxWidth: 450 }} alt='OOPS!! NOT AVAILABLE' />
                        </div>
                    </div>

                </section>
                <ToastContainer />
            </div>
        </>
    )
}

export default Home
