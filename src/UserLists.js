import React, { useState, useEffect } from 'react';
import UsersData from './UsersData';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const UserLists = (props)=> {
	const useStyles = makeStyles({
		table: {
			maxWidth: 900,
      margin: "auto",
      border: "1px solid #ccc"
		},
	});
	const classes = useStyles();
  const [users, setUsers] = useState([])
  useEffect(() => {
    (async () => {
      const result = await fetch('https://reqres.in/api/users')
      const data = await result.json()
      setUsers(data.data)
    })()
  }, [])
	return (
		<TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align="left">First Name</TableCell>
              <TableCell align="left">Last Name</TableCell>
              <TableCell align="left">Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
                <UsersData key={user.id} data={user} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
	)
}

export default UserLists;