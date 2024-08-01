import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';  //
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';


const bull = (    
  <Box 
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>       
);
 
export default function ViewJob() {

  const [joblist,setJobList]=useState()  //
  useEffect(()=>{
    const data = JSON.parse(localStorage.getItem("JobList"))
    setJobList(data)
  },[])
  console.log(joblist)    //


  const handleDelete=(id)=>{       // To delete recipe item
    const filtered_data=joblist.filter((item)=>{
      return item.JobList_id !== id
    })

    console.log(filtered_data) 
    setJobList(filtered_data)
    localStorage.setItem("JobList", JSON.stringify(filtered_data))
  }
      
  
  return (
    <div style={{display:"flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"center", alignItems:"center",gap:"80px", marginTop:"10px", backgroundImage:"url('https://img.freepik.com/free-photo/abstract-background-cement-wall-shadow-light-concept_53876-95320.jpg')",  backgroundSize: "cover"}}>
      {joblist && joblist.length>0? (   //
        joblist.map((item)=>{
          return <>
          <Card sx={{minWidth: 500, maxWidth: 500}}>
      <CardContent>
        <Typography variant="h5" color="text.secondary" gutterBottom>
          {item.jobtitle}    
          </Typography>
        <Typography sx={{ fontSize: 14 }} component="div">  
          {item.company}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        
        </Typography>
        <Typography variant="body2">
        {item.location}
        </Typography>
        <br/>
        <Typography>
        {item.jobDescription}
         
        </Typography>
      </CardContent>
      <CardActions>

      <Button size="small">Learn More</Button>
        <div style={{display:"flex", flexDirection:"row", justifyContent:"flex-end", width:"100%"}}>

        <Link to={`/editjob/${item.JobList_id}`}>
        <IconButton aria-label="share" style={{color:"black"}}> 
       <EditIcon/>
       </IconButton>
       </Link>

        <Link to={`/singlejob/${item.JobList_id}`}>
        <IconButton aria-label="share" style={{color:"black"}}> 
        <VisibilityIcon/>
        </IconButton>
        </Link>

        <IconButton aria-label="share" style={{color:"black"}} onClick={()=>handleDelete(item.JobList_id)}> 
        <DeleteIcon/>
        </IconButton>

        </div>
        
      </CardActions>
      
    </Card>
    </>
        })     

        ) : (
          <div>No job list found</div>   //
      )}

    </div>
  );
}   
