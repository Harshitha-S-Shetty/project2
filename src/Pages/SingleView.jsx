import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import { useEffect, useState} from 'react';

export default function MediaCard() {



  const {id} = useParams()
  console.log(id)   

  const [singleJob, setSingleJob] = useState("  ")

  useEffect(()=>{
    const data = JSON.parse(localStorage.getItem("JobList"))
    const single=data.filter((item)=>{
      return item.JobList_id==id
    })
    console.log(single)
    setSingleJob(...single)
  },[])
  console.log(id)          
  console.log(singleJob)



  return (
    <div style={{display:"flex", flexDirection:"row", justifyContent:'center', alignItems:"center", height:"80vh", backgroundImage:"url('https://img.freepik.com/free-photo/abstract-background-cement-wall-shadow-light-concept_53876-95320.jpg')",  backgroundSize: "cover"}}>
    <Card sx={{ minWidth:600, maxWidth: 600}}>
      <CardMedia
       
        title={singleJob.jobtitle}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {singleJob.jobtitle}
        </Typography>
        <Typography sx={{ fontSize: 14 }} component="div">
          {singleJob.company}
        </Typography>
        <br/>
        <Typography variant="body2">
          {singleJob.location}
        </Typography>
        <br/>
        <Typography>
          {singleJob.jobDescription}
        </Typography>
      </CardContent> 
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
  );
}
