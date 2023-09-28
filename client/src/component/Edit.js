import React, { useEffect, useState } from 'react'
import { NavLink,useParams, useNavigate } from 'react-router-dom'



const Edit = () => {

    // const [getuserdata, setuserdata] = useState([]);
    // console.log(getuserdata);

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

    const { id } = useParams(""); //user ke id ko get kiya params se
    console.log(id);
    const getdata = async () => {
        const res = await fetch(`/getuser/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }

        });
        const data = await res.json();
        console.log(data);
        if (res.status === 422 || !data) {
            alert("error");
            console.log("error");

        } else {
            setINP(data);
            console.log("get data");
        }
    }
    useEffect(()=>{
        getdata();
    },[]);

    const updateuser =  async(e)=>{

        e.preventDefault();
        const { name, email, work, add, mobile, desc, age } = inpval;

        const res2 = await fetch(`/updateuser/${id}`, {

            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, work, add, mobile, desc, age
            })
        });

        const data2 = await res2.json();
        console.log(data2);
        if (res2.status === 422 || !data2) {
            alert("fill the data");

        } else {
            alert("data added");
            history("/");
        }

    }
  return (
    <div className='container '>
      <NavLink to="/">home2</NavLink>
      <form className='mt-4'>
        <div className="row">
  <div class="mb-3 col-lg-6 col-md-6 col-12">
    <label for="exampleInputEmail1" class="form-label">Name: </label>
    <input type="text"  onChange = {setdata} value={inpval.name} name='name' class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 col-lg-6 col-md-6 col-12  col-lg-6 col-md-6 col-12">
    <label for="exampleInputPassword1" class="form-label">email</label>
    <input type="email" onChange = {setdata} value={inpval.email} name = "email"class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 col-lg-6 col-md-6 col-12">
    <label for="exampleInputPassword1" class="form-label">Age:</label>
    <input type="number" onChange = {setdata} value={inpval.age} name = "age"class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 col-lg-6 col-md-6 col-12">
    <label for="exampleInputPassword1" class="form-label">Mobile</label>
    <input type="tel"  onChange = {setdata} value={inpval.mobile} name='mobile' class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 col-lg-6 col-md-6 col-12">
    <label for="exampleInputPassword1" class="form-label">Work</label>
    <input type="text" onChange = {setdata} value={inpval.work} name = "work"class="form-control" id="exampleInputPassword1"/>
  </div>
  
  <div class="mb-3 col-lg-6 col-md-6 col-12">
    <label for="exampleInputPassword1" class="form-label">Address</label>
    <input type="text"  onChange = {setdata} value={inpval.add} name = "add"class="form-control" id="exampleInputPassword1"/>
  </div>
  
<textarea name="desc" onChange = {setdata} value={inpval.desc}  id="" cols="30" rows="10" className='"form-control "'></textarea>

  <button type="submit"  onClick = {updateuser}  style={{width:300,marginTop:10}} class="btn btn-primary">Submit</button>
  </div>
</form>
    </div>
  )
}

export default Edit
