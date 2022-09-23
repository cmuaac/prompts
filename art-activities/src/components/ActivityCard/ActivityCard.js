import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';

function ActivityCard(props) {
  return (
    <Card>
      <CardActionArea>
        <CardContent>
          <Typography variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2">
            {props.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Stack direction="row" spacing={1}>
          {props.tags.map((tag) => (
              <Chip label={tag} />
          ))}
        </Stack>
      </CardActions>
    </Card>
  );
}

export default ActivityCard;
