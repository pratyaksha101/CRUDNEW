import React, { useEffect,useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WorkIcon from '@mui/icons-material/Work';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { red } from '@mui/material/colors';
const Detail = () => {

    const [getuserdata, setuserdata] = useState([]);
    console.log(getuserdata);
    
    const { id } = useParams(""); //user ke id ko get kiya params se
    console.log(id);

    const history = useNavigate("");
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
            setuserdata(data);
            console.log("get data");
        }
    }


    useEffect(() => {
        getdata();
    },[])

    const deleteuser = async (id) => {

        const res2 = await fetch(`/deleteuser/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
    
        const deletedata = await res2.json();
        console.log(deletedata);
    
        if (res2.status === 422 || !deletedata) {
            console.log("error");
        } else {
            console.log("user deleted");
            // setDLTdata(deletedata)
           history("/");
        }
    
    }
    return (
        <div className='container mt-3'>
            <h1 style={{ fontWeight: 400}} className='h1-detail'>Welcome {getuserdata.name}</h1>
            <Card sx={{ maxWidth: 600 }}>
                <CardContent>
                    <div className="add_btn ">
                     <NavLink to ={`/edit/${getuserdata._id}`}><button className="btn btn-primary mx-2"><EditIcon /></button></NavLink> 
                        <button className="btn btn-danger"  onClick={()=>deleteuser(getuserdata._id)} ><DeleteIcon /></button>

                    </div>
                    <div className="row">
                        <div className="left_view col-lg-6 col-md-6 col-12">
                            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="profile" style={{ width: 50 }} />
                            <h3 className='mt-3'>Name: <span>{getuserdata.name}</span></h3>
                            <h3 className='mt-3'>Age: <span>{getuserdata.age}</span></h3>
                            <h3 className='mt-3'><MailOutlineIcon />Email: <span>{getuserdata.email}</span></h3>
                            <h3 className='mt-3'><WorkIcon />Occupation: <span>{getuserdata.work}</span></h3>
                        </div>
                        <div className="right_view  col-lg-6 col-md-6 col-12" >

                            <p className='mt-5'><PhoneAndroidIcon />mobile: <span>+91 {getuserdata.mobile}</span></p>
                            <p className='mt-3'><LocationOnIcon />Location: <span>{getuserdata.add}</span></p>
                            <p className='mt-3'>Description: <span>{getuserdata.desc}</span></p>
                        </div>
                    </div>

                </CardContent>
            </Card>
        </div>
    )
}

export default Detail
