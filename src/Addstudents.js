import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useState}from  'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


function Addstudents() {
    const initial={
        firstname:"",
        lastname:"",
        email:"",
        city:"",
        id:""
    
      }
      const [rename,setRename]=useState(initial)
      const [students,setStudents]=useState([]);
      const navigate=useNavigate()
     
        const handleChange=(e)=>{
            
            setRename ({...rename, [e.target.name]: e.target.value})
         }

         const handleCreate = async () => {
            var response = await axios.post(
              'https://6243e7eb39aae3e3b7485c23.mockapi.io/students',
              {
                firstname: rename.firstname,
                lastname: rename.lastname,
                email: rename.email,
                city:rename.city
              }
             

            );
            setStudents(response.data);
            navigate('/students')
        
          
            setRename({ 
              firstname: '', 
              lastname: '', 
              email: '',
              city:'' 
             })
            
            
           
          };

       
        
          
         



    
      
  return (
    <div>
          <h1><b> edit students </b></h1>
        <Form>

  <Form.Group className="mb-3">
    <Form.Label>FirstName</Form.Label>
    <Form.Control type="text"    placeholder="Firstname" name="firstname"  value={rename.firstname}  onChange={handleChange}/>
</Form.Group>

<Form.Group className="mb-3">
    <Form.Label>Lastname</Form.Label>
    <Form.Control type="text"  placeholder="Lastname" name="lastname" value={rename.lastname}  onChange={handleChange} />
  
</Form.Group>

<Form.Group className="mb-3" >
    <Form.Label>email</Form.Label>
    <Form.Control type="email"  placeholder="Email"  name="email" value={rename.email}  onChange={handleChange}/>
    <Form.Text className="text-muted">
    We'll never share your email with anyone else.
    </Form.Text>
</Form.Group>

<Form.Group className="mb-3">
    <Form.Label>city</Form.Label>
    <Form.Control type="text"  name="city"  value={rename.city}    onChange={handleChange} />
</Form.Group>

<Button variant="primary" onClick={handleCreate}>
    Submit
</Button>

</Form>


          


         
    </div>
  )
}

export default Addstudents;