
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {useSession, signIn} from "next-auth/react";
import {useRouter} from 'next/router'
export default function HomePage() {
  const router = useRouter()
  const { data: session } = useSession()
  console.log(session);

  if(session) {
    console.log('LoggedIn')
  }

  return (
    <Grid container sx = {{height: "100vh", width: "100vw"}}>
      <Grid item
        xs = {12}
        sm = {6} 
        component = {Paper}
        elevation = {5}
        >
          <Box 
            sx = {{
              my: 25,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}>
            <Typography variant = "h3" textAlign = "center">
              Welcome to Magpie!
            </Typography>
            <br/>
            <Typography variant = "h5" textAlign = "center">
              We're here to help you keep track of your investments and your spending.
            </Typography>
            <br/>
            <br/>
            <Typography variant = "p" textAlign = "center">
              Login using your Google account to get started.
            </Typography>
            <br/>
            <Button variant = "contained" onClick = {() => signIn('google')}>
              Google Login
            </Button>
          </Box>
        </Grid>
    </Grid>
  )
}
