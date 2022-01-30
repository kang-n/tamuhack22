import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import {useSession} from "next-auth/react";
import {useRouter} from 'next/router'
import Image from 'next/image'
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItem'
import Button from '@mui/material/Button';

export default function HomePage() {
  const router = useRouter()
  const { data: session } = useSession()
  const [selectedStock, setSelectedStock] = React.useState();

  const handleListItemClick = (stock) => {
      console.log(stock)
      setSelectedStock(stock);
  }
  
  return (
    <Grid container sx = {{height: "100vh", width: "100vw"}}>
      <Grid item
        xs = {5}
        sm = {4} 
        component = {Paper}
      >
          <List component="nav">
            {['AMZN', 'GOOG','JPM','KO','MSFT','TSLA','WMT'].map((s) => (
                <ListItemButton 
                key = {s}
                selected = {selectedStock === `${s}`}
                onClick = {() => {handleListItemClick(s); console.log(s);}}>
                    <Typography variant = 'h4'>
                        {`${s}`}
                    </Typography>
                    <Button color = 'error'>
                        SELL
                    </Button>
                </ListItemButton>
            ))}
          </List>
      </Grid>
      <Grid item
        xs = {7}
        sm = {8} 
        component = {Paper}
        elevation = {5}
        style = {{
            position: 'relative'
        }}
        >
            <Image src = {'/' + selectedStock + '.png'} layout = 'fill' />
        </Grid>
        
    </Grid>
  )
}