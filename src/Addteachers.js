import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useState,useContext} from  'react';
import {useNavigate} from 'react-router-dom';
import {TeachersContext} from './App'


function Addteachers() {
    let context = useContext(TeachersContext);
     
    const initilavalues={ 
        name:"",
        email:"",
        gender:"",
        work_experiance:"",
        contact:""

    }
    const [values,setValues]=useState(initilavalues);
    const navigate=useNavigate();
     //onchange event//
    const onChange=(e)=>{
        e.preventDefault();
    setValues({...values,[e.target.name]: e.target.value})
}
 const  handleSubmit=()=>{
     let newDta={
         name:values.name,
         email:values.email,
         gender: values.gender,
         work_experiance:values.work_experiance,
         contact:values.contact

     }
     let newArray = [...context.teachers];
     newArray.push(newDta)
     console.log(newArray);
     context.setTeachers(newArray);
     navigate('/teachers')
 }



  return (

    <div className="container" id="addteachers">
            <h1 id="table"><b>ADD TEACHERS</b></h1>
        
        <Form>

            <Form.Group className="mb-3">
                <Form.Label>name</Form.Label>
                <Form.Control type="text"   name="name" placeholder="ENTER YOUR NAME"  value={values.name} onChange={onChange} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>email</Form.Label>
                <Form.Control type="email"  name="email"  placeholder="email with min of 8 characters" value={values.email} onChange={onChange} />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>GENDER:</Form.Label> &nbsp;  &nbsp;
                <input type="radio" name="gender" value="male"   onChange={onChange} />MALE  &nbsp;  &nbsp;
                <input type="radio"   name="gender" value="female"  onChange={onChange}  />FEMALE
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>WORK_EXPERIANCE</Form.Label>
                <Form.Control type="text"    name="work_experiance" placeholder="experiance of no of years " value={values.work_experiance} onChange={onChange}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>MOBILE_NUMBER</Form.Label>
                <Form.Control type="number"   name="contact" placeholder="PHONE_NUMBER" value={values.contact}  onChange={onChange}/>
            </Form.Group>
            <br/>
          
  
  
            <Button variant="primary"  onClick={handleSubmit}>
                Submit
            </Button>
        </Form>



    </div>
  )
}

export default Addteachers