import React from 'react';

import { Outlet, Link } from 'react-router-dom';

import { Button } from '@mui/material';
import AddIcon from "@mui/icons-material/Add";

function Home () {
  return (
    <>
      <h1>Home</h1>
      <Link to='/add'>
        <Button variant='contained' color='primary' startIcon={<AddIcon />}>Add New Quiz</Button>
      </Link>
    </>
  )
}

export default Home;
