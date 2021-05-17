import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Avatar, makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));
const UserDetails = (props)=> {
	const classes = useStyles();
	const {userId} = useParams();
	
	const [usersDetails, setUsersDetails] = useState([])
  useEffect(() => {
    (async () => {
      const result = await fetch(`https://reqres.in/api/users/${userId}`)
      const data = await result.json()
      setUsersDetails(data.data)
    })()
  }, [])
	return (
		<div>
			<Avatar alt={`${usersDetails.first_name} ${usersDetails.last_name}`} src={usersDetails.avatar} className={classes.large} />
			<p>Name: {usersDetails.first_name} {usersDetails.last_name}</p>
			<p>Email: {usersDetails.email}</p>
		</div>
	)
}

export default UserDetails;