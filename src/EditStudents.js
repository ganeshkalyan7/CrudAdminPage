import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useLocation} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';




function EditStudents() {
 
  const location=useLocation();
  const [rename,setRename]=useState(location.state)
  const [students,setStudents]=useState([]);
  const navigate=useNavigate();

  const handleUpdate = async (id) => {
    var response = await axios.put(
      `https://6243e7eb39aae3e3b7485c23.mockapi.io/students/${id}`,
      {
        firstname:rename.firstname,
        lastname: rename.lastname,
        email: rename.email,
        city: rename.city,
      }
    );
    console.log(response.data)
    setStudents(response.data);
    navigate('/students');
  
    //setStudents({firstname: '', lastname:'', email: '', id: '' });
    // // console.log(this.state.user);
  };
  


  return (
    <div>
      <h1>UPDATE</h1>
      
       <div id="addteachers">
         <Form>
        <Form.Group className="mb-3">
          <Form.Label>FirstName</Form.Label>
          <Form.Control type="text" placeholder=" enter your Firstname" value={rename.firstname} name="firstname" onChange={(e)=>setRename({...rename,firstname:e.target.value})} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Lastname</Form.Label>
          <Form.Control type="text" placeholder=" enter your Lastname" name="lastname"  value={rename.lastname} onChange={(e)=>setRename({...rename,lastname:e.target.value})}  />

        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>email</Form.Label>
          <Form.Control type="email" placeholder=" enter your Email" name="email" value={rename.email} onChange={(e)=>setRename({...rename,email:e.target.value})} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>city</Form.Label>
          <Form.Control type="text" name="city" value={rename.city}  placeholder=" enter your location" onChange={(e)=>setRename({...rename,city:e.target.value})} />
        </Form.Group>

        <Button variant="primary" onClick={()=>handleUpdate(rename.id)} >
          Submit
        </Button>

      </Form>
      </div>
      



    </div>
  )
}

export default EditStudents