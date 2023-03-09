import * as React from 'react';
import { useState,useEffect} from 'react';
import IconButton from '@mui/material/IconButton';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import styles from  '../styles/home.module.css'
import complimentsData from '../../data/compliments.json';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

const queryClient = new QueryClient();

export default function Home() {
  const [message, setMessage] = useState("");
  const [count, setCount] = useState(0)
  const [flag, setFlag] = useState(false);
  
  const fetcher = async (...args) => {
    const response = await fetch(...args);
    console.log(response.json())
    if (response.ok) {
      return await response.json();
    }
    throw new Error(response.status);
  };

  useEffect(() => {
    setCount(Math.floor(Math.random() * complimentsData.length ));
    setMessage(complimentsData[count])
  },[flag]);


  const handleClick = () => {
    setFlag(!flag);
  }

  // const { isLoading, data, error } = useQuery(
  //   ["message", message],
  //   async () => await fetcher(""),
  //   { retry: false, enabled: !!message }
  // );

  const theme = createTheme({
    palette: {
      heart: {
        main: '#ef5350'
      },
    },
  });


  return (
    <>
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <IconButton color="heart" onClick={handleClick}>
            <FavoriteIcon />
          </IconButton>
          <Stack spacing={2} alignItems="center">
            {message.message}
          </Stack>
        </ThemeProvider>
      </QueryClientProvider>
      </Box>
    </>
  )
}