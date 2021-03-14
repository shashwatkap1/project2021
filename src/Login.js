import React from 'react';
import { Button, Container, Grid, useMediaQuery } from '@material-ui/core';
import './Login.css';
import { loginUrl } from './spotify';
import logo from './logo_big.png';

function Login() {
	return (
		<div className='login'>
			<div
				style={{
					display: 'block',
					marginLeft: '25%',
					marginRight: '5%',
					paddingTop: '5%',
				}}
			>
				<img className='logo_big' src={logo} alt='Spotify logo'></img>
			</div>

			<div
				style={{
					marginTop: '20%',
					display: 'grid',
					marginLeft: '20%',
					marginRight: '20%',
				}}
			>
				<Button variant='contained' size='large' color='primary' href={loginUrl}>
					LOGIN WITH SPOTIFY
				</Button>
			</div>
		</div>
	);
}

export default Login;
