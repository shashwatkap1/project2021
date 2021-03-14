import React, { useState, useEffect } from 'react';
import Header from './Header';
import Body from './Body';
import { spotify } from './App';
import './loader.css';
import { Divider, LinearProgress, withWidth } from '@material-ui/core';
import Footer from './Footer.js';
function Main(props) {
	const { width } = props;
	const [user, setUser] = useState();
	useEffect(() => {
		const getUser = async () => {
			const data = await spotify.getMe();

			setUser(data);
		};
		getUser();
	}, []);
	if (user) {
		return (
			<div
				style={{
					minWidth: '100%',
				}}
			>
				<Header user={user}></Header>
				<Body user={user}></Body>
				<Footer></Footer>
			</div>
		);
	} else {
		return <LinearProgress color='primary'></LinearProgress>;
	}
}
export default withWidth()(Main);
