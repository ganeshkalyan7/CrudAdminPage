import React from 'react';
import {Card,CardActions,CardContent,Button,Typography } from '@mui/material';
import {useNavigate} from 'react-router-dom';
import Grid from '@mui/material/Grid';



function Dashboard() {
    const navigate = useNavigate();
    const onclick=()=>{
      alert("just dummy content ")
    }
 
   
  return (
    <div className="container">
      <nav class="navbar navbar-light bg-dark" >
          <div class="container-fluid">
              <span class="navbar-brand mb-0 h1" id="nav"><h1><b>DASHBOARD</b></h1></span>
              <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-primary" type="submit" onClick={onclick}>Search</button>
    </form>
        </div>
     </nav>
       <div id="divider">
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
      <Grid item xs={6} >
        <div id="teachers"> 
      <Card sx={{ maxWidth: 345 }}  >
      <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        <h2><b> TEACHERS LIST </b></h2> 
      </Typography>
      <Typography variant="body2" color="text.secondary">
         HERE IS LIST OF TEACHERS 
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small"   onClick={() => navigate('teachers')} >CLICK TO VIEW </Button>
      <Button size="small" onClick={() => navigate('addteachers')}> ADD DATA </Button>
    </CardActions>
  </Card>
  </div>
  </Grid>
  
  <Grid item xs={6}>
    <div id="students" >
    <Card sx={{ maxWidth: 345 }} >
      <CardContent>
      <Typography gutterBottom variant="h5" component="div">
          <h1>  STUDENTS LIST </h1> 
      </Typography>
      <Typography variant="body2" color="text.secondary">
      HERE IS LIST OF  STUDENTS
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small"  onClick={() => navigate('students')}>CLICK TO VIEW</Button>
      <Button size="small" onClick={() => navigate('addstudents')}>ADD DATA</Button>
    </CardActions>
  </Card>
  </div>
  </Grid>
</Grid>
</div>


    </div>
  )
}

export default Dashboard