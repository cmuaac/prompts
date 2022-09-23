import { useState } from 'react';
import { Grid } from '@mui/material';
import ActivityCard from '../ActivityCard/ActivityCard'

const data = [
    {
        'key': 'a1',
        'name': 'Name1',
        'desc': 'desc1',
        'tags': ['portrait', 'figure']
    },
    {
        'key': 'a2',
        'name': 'Name2',
        'desc': 'desc2',
        'tags': ['portrait']
    },
    {
        'key': 'a3',
        'name': 'Name3',
        'desc': 'desc3',
        'tags': ['portrait']
    }
];

function Activities() {
    const [activities, setActivities] = useState([]);

    return (
        <Grid container spacing={12} alignItems='center'>
            {data.map((cardData) => (
                <Grid item xs={4} key={cardData.key}>
                <ActivityCard name={cardData.name} 
                              desc={cardData.desc} 
                              tags={cardData.tags}/>
                </Grid>
            ))}
        </Grid>
    );
  }
  
  export default Activities;