import React from 'react';
import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import  {useContext} from 'react';
import {TeachersContext} from './App';





function Teachers() {
  let context = useContext(TeachersContext);
  console.log(context)


    const handeleDelete=(i)=>{
      let olddata=[...context.teachers]
      olddata.splice(i,1);
      context.setTeachers(olddata)

    }
 

  return (
    <div>
      <Link to='/'>
      <button className="btn btn-info">go back</button>
      </Link> 
      <h1>teachers data</h1>
      <table className='table table-striped table-dark" '> 
        <thead> 
          <tr> 
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>GENDER</th>
            <th>WORK_EXPERIANCE</th>
            <th>CONTACT</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody> 
          {
              context.teachers.map((data,i)=>{
                return <tr key={i}> 
                   <td>{i+1}</td>
                   <td>{data.name}</td>
                   <td>{data.email} </td>
                   <td>{data.gender} </td>
                   <td>{data.work_experiance} </td>
                   <td>{data.contact}</td>
                   <td> 
                   <Link to= {`/editteachers/${i}`}> 
                      <button className="btn btn-primary">EDIT</button>  &nbsp;  &nbsp;
                  </Link>
           
                      <button className="btn btn-danger" onClick={() =>handeleDelete(i)}>DELETE</button>
                  </td>
                  </tr>
              })
          }
          </tbody>
</table>
   
      
      
     
    
     </div>
  )
}

export default Teachers