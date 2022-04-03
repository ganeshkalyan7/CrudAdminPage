import React from 'react';
import axios from 'axios';
import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';



function Students() {
  const initial={
    firstname:"",
    lastname:"",
    email:"",
    city:"",
   

  }
  const [rename,setRename]=useState(initial)
  const [students,setStudents]=useState([]);


      //GET DATA //
    const getdata=async()=>{
    var response = await axios.get(
      'https://6243e7eb39aae3e3b7485c23.mockapi.io/students'
    );
    setStudents(response.data);
   }

    //DELETE
  const handleDelete=async(id)=>{
    await axios.delete( 
      `https://6243e7eb39aae3e3b7485c23.mockapi.io/students/${id}`

    )
    var user = students.filter((user) => user.id !== id);
    console.log(user)
    setStudents(user);
   }

  
  //  const displayData = (id) => {
  //   var selectedData = students.filter((user) => user.id === id)[0];
  //   setRename({
  //     id: selectedData.id,
  //     firstname: selectedData.firstname,
  //     lastname: selectedData.lastname,
  //     email: selectedData.email,
  //     city:selectedData.city,
  //   });
    
  //   console.log(selectedData)
  // };


  useEffect(()=>{
    getdata()

  },[])


  return (
    <div>  
    
      <h1  className="container-fluid"><b>students data</b></h1>
      <Link to='/'>
      <button className="btn btn-info">go back</button>
      </Link> 
      <table className="table table-striped table-dark" >
        <thead>
          <tr>
            <td>ID</td>
            <td>FirstName</td>
            <td>LastName</td>
            <td>email</td>
            <td>City</td>
            <td>OPARATION</td>
            </tr> 

        </thead>
        <tbody >
          {
            students.map((data)=>{
              return< >
                <tr key={data.id}>
                  <td>{data.id}</td> 
                  <td> {data.firstname}</td> 
                  <td>{data.lastname}</td> 
                  <td>{data.email}</td> 
                  <td>{data.city}</td> 
                  <td> 
                    <Link to= '/editstudents' state={data}> 
                    <button className="btn btn-primary" >EDIT</button> &nbsp; &nbsp;
                    </Link>
                    <button className="btn btn-danger" onClick={()=>handleDelete(data.id)}>DELETE</button>
                    
                    
                  </td>
                </tr>
              
              
              
              </>

            })



          } 

          
          </tbody>
          </table>
           

        





    </div>
  )
}

export default Students