import { Grid } from '@mui/material';
import ActivityCard from './ActivityCard';
import fuzzy from 'fuzzy';

const items = [
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

function Activities(props) {
    const filteredItems = fuzzy.filter(
        props.filterText,
        items,
        { extract: (item) => item.name + ' ' + item.desc + ' ' + item.tags.join(' ')},
    );

    return (
        <Grid container spacing={12} alignItems='center'>
            {filteredItems.map((item) => {
                if (item.original) {
                    item = item.original;
                }
                return (
                    <Grid item xs={4} key={item.key}>
                    <ActivityCard name={item.name} 
                                desc={item.desc} 
                                tags={item.tags}/>
                    </Grid>
                );
            })}
        </Grid>
    );
  }
  
  export default Activities;