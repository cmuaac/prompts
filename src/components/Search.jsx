import { Fragment } from 'react';
import { TextField } from '@mui/material';

function Search(props) {
    return (
    <Fragment>
        <TextField id="outlined-basic" variant="outlined"
                   placeholder="Filter activities..."
                   onChange={(ev) => { props.onChangeText(ev.target.value) }}
                   />
    </Fragment>
    );
  }
  
  export default Search;

