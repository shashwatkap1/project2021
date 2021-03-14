import { Avatar, Grid, Typography } from '@material-ui/core';

import React, { useState, useEffect } from 'react';
import logo from './LOGO.png';
function Header(props) {
	const style = {
		headerContainer: {
			top: 0,
			position: 'fixed',
			width: '100%',
			height: '60px',
			background: 'linear-gradient(to   right, #FBD786,#C6FFDD)',

			overflow: 'hidden',
		},
		logo: {
			objectFit: 'contain',
			height: '65px',
			paddingLeft: '10px',
		},
	};
	const default_img =
		'https://grandimageinc.com/wp-content/uploads/2015/09/icon-user-default-300x300.png';
	const { user } = props;
	const {
		display_name: name,
		images: [{ url = default_img }],
	} = user;

	return (
		<div style={style.headerContainer}>
			<Grid container direction='row'>
				<Grid container item xs={6} justify='flex-start'>
					<img style={style.logo} src={logo} alt='logo' />
				</Grid>
				<Grid
					item
					container
					xs={6}
					justify='flex-end'
					alignItems='center'
					style={{ paddingRight: '10px' }}
				>
					<Avatar src={url} alt='USER_IMAGE'></Avatar>
					<Typography variant='h6'>Heyy, {name}</Typography>
				</Grid>
			</Grid>
		</div>
	);
}

export default Header;
