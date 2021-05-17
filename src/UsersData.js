import React, { useState, useEffect } from 'react'
import {
	Link
} from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { Avatar } from '@material-ui/core';


const UsersData = props => {
	const { id, email, first_name, last_name, avatar } = props.data;

	const StyledTableCell = withStyles((theme) => ({
		head: {
			backgroundColor: theme.palette.common.black,
			color: theme.palette.common.white,
		},
		body: {
			fontSize: 14,
		},
	}))(TableCell);

	const StyledTableRow = withStyles((theme) => ({
		root: {
			'&:nth-of-type(odd)': {
				backgroundColor: theme.palette.action.hover,
			},
		},
	}))(TableRow);


	return (
			<StyledTableRow>
					<StyledTableCell align="left">
						<Link to={`/user-details/${id}`}>
							<Avatar alt={`${first_name} ${last_name}`} src={avatar} />
						</Link>
					</StyledTableCell>
					<StyledTableCell align="left"><Link to={`/user-details/${id}`}>{first_name}</Link></StyledTableCell>
					<StyledTableCell align="left"><Link to={`/user-details/${id}`}>{last_name}</Link></StyledTableCell>
					<StyledTableCell align="left"><Link to={`/user-details/${id}`}>{email}</Link></StyledTableCell>
			</StyledTableRow>
	)
}

export default UsersData