import React, {useState } from 'react'
import { NavLink,useNavigate } from 'react-router-dom'



const Register = () => {

    const history = useNavigate("");
    const [inpval, setINP] = useState({
        name: "",
        email: "",
        age: "",
        mobile: "",
        work: "",
        add: "",
        desc: ""

    })
    const setdata = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setINP((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }

    const addinpdata = async (e) => {
        e.preventDefault();

        const {name,email,work,add,mobile,desc,age} = inpval;

        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, age, mobile, work, add, desc
            })

        });

        const data  = await res.json();
        console.log(data);
        if(res.status===422 ||!data)
        {
            alert("error");
            console.log("error");

        }else{
            alert("data added");
            history("/");
            console.log("data added");
        }
    }
    return (
        <div className='container '>
            <NavLink to="/" >home</NavLink>
            <form className='mt-4'>
                <div className="row">
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" className="form-label">Name: </label>
                        <input type="text" onChange={setdata} value={inpval.name} name='name' className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12  col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" className="form-label">Email: </label>
                        <input type="email" onChange={setdata} value={inpval.email} name="email" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" className="form-label">Age:</label>
                        <input type="number" onChange={setdata} value={inpval.age} name="age" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" className="form-label">Mobile</label>
                        <input type="tel" onChange={setdata} value={inpval.mobile} name='mobile' className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" className="form-label">Work</label>
                        <input type="text"  onChange={setdata} value={inpval.work} name="work" className="form-control" id="exampleInputPassword1" />
                    </div>

                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
                        <input type="text" onChange={setdata} value={inpval.add} name="add" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <label htmlFor="description">Description:</label>
                    <textarea name="desc" onChange={setdata} value={inpval.desc} id="" cols="30" rows="10" className='"form-control mt-2'></textarea>

                    <button type="submit" onClick={addinpdata} className="btn btn-primary mt-3" style={{width:300}}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Register
