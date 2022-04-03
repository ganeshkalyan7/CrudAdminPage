import React from 'react'
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Teachers from './Teachers';
import Students from './Students';
import Dashboard from './Dashboard';
import Addteachers from './Addteachers';
import Addstudents from './Addstudents';
import EditStudents from './EditStudents';
import EditTeachers from './EditTeachers';
import {useState} from 'react';
export const TeachersContext = React.createContext();



function App() {
  let [teachers,setTeachers]=useState([
    { 
      name:'shilpa',
      email:'shilpa@gmail.com',
      gender:'female',
      subject:'electronics',
      work_experiance:'2_years',
      contact:22435678944,
    },
    { 
      name:'manjunath',
      email:'manjunath@gmail.com',
      gender:'male',
      subject:'socila',
      work_experiance:'10_years',
      contact:54436272834,
    },
    { 
      name:'chandra shekar',
      email:'chandra@gmail.com',
      gender:'male',
      subject:'computer science',
      work_experiance:'1_years',
      contact:9966778693,
    },
    { 
      name:'bhaskar',
      email:'bhaskar@gmail.com',
      gender:'male',
      subject:'mathmathics',
      work_experiance:'7_years',
      contact:2396778643,
    },





  ]);
 

 
  
  return (
    <div  className="container"> 
  <BrowserRouter> 
    <TeachersContext.Provider value={{teachers,setTeachers}}>
      <Routes> 
            <Route path="teachers" element={<Teachers/>}></Route>
              <Route path="addteachers" element={<Addteachers/>}></Route>
              <Route path="/" element={<Dashboard/>}></Route>
              <Route path="students" element={<Students/>}></Route>
              <Route path="addstudents" element={<Addstudents/>}></Route>
               <Route path="editstudents" element={<EditStudents/>}></Route>
               <Route path="/editteachers/:id" element={<EditTeachers/>}></Route>
      </Routes>
  </TeachersContext.Provider>
        
     
</BrowserRouter>
    

  
      

    </div>
    
  );
}

export default App;
