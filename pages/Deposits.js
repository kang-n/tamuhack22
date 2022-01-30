import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Total Assets</Title>
      <Typography component="p" variant="h4">
        Balance Here
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        Date Here
      </Typography>
      
    </React.Fragment>
  );
}