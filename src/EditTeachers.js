import React from 'react';
import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
import Button from '@mui/material/Button';
import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TeachersContext } from './App';
import Grid from '@mui/material/Grid';


function EditTeachers() {
  let params = useParams();
  let context = useContext(TeachersContext);
  let navigate = useNavigate();

  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [gender, setGender] = useState('');
  let [subject, setSubject] = useState('');
  let [contact, setContact] = useState('');
  let [work_experiance, setWork_experiance] = useState('');


  useEffect(() => {
    if (params.id < context.teachers.length) {
      setName(context.teachers[params.id].name)
      setEmail(context.teachers[params.id].email)
      setGender(context.teachers[params.id].gender)
      setSubject(context.teachers[params.id].subject);
      setWork_experiance(context.teachers[params.id].work_experiance);
      setContact(context.teachers[params.id].contact);

    }
    else {
      alert("Selected Students is Not available")
    }
  }, [params.id, context.teachers])


  let handleSubmit = () => {
    let newdata = {
      name: name,
      email: email,
      gender: gender,
      subject: subject,
      work_experiance: work_experiance,
      contact: contact,
    }
    let newArray = [...context.teachers];
    newArray.splice(params.id, 1, newdata);
    console.log(newArray);
    context.setTeachers(newArray);
    navigate('/teachers')
  }






  return (
    <div>
      <h1><b>EDIT DATA</b></h1>
      <div id="teachersdata">
        <div id="con">
          <Grid container spacing={2}>
            <Grid item xs={12}>

              <FormControl>
                <InputLabel htmlFor="my-input"><h3> NAME</h3></InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" type="text" value={name} onChange={(e) => setName(e.target.value)} />
              </FormControl> &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp;


              <FormControl>
                <InputLabel htmlFor="my-input"><h3>Email address</h3></InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" value={email} onChange={(e) => setEmail(e.target.value)} />
                <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
              </FormControl>  &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp;


              <FormControl>
                <InputLabel htmlFor="my-input"><h3> GENDER   </h3></InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" type="text" value={gender} onChange={(e) => setGender(e.target.value)} />
              </FormControl> &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp;

              <FormControl>
                <InputLabel htmlFor="my-input"><h3> SUBJECT </h3></InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
              </FormControl>  &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp;
              <br />  <br />  <br />  <br />  <br />  <br />

              <FormControl>
                <InputLabel htmlFor="my-input"><h3> WORK_EXPERIANCE </h3></InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" type="text" value={work_experiance} onChange={(e) => setWork_experiance(e.target.value)} />
              </FormControl>  &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp;

              <FormControl>
                <InputLabel htmlFor="my-input"><h3> CONTACT </h3></InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" type="number" value={contact} onChange={(e) => setContact(e.target.value)} />
              </FormControl>  &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp;
              <br />  <br />  <br />
              <Button variant="contained" disableElevation onClick={handleSubmit}>
                update
              </Button>
            </Grid>
          </Grid>
        </div>





      </div>
    </div>
  )
}

export default EditTeachers    