import React, { useState, useEffect } from 'react';
import Header from './Header';
import Body from './Body';
import Body2 from './Body2';
import { spotify } from './App';
import './loader.css';
import { Divider, LinearProgress, withWidth } from '@material-ui/core';
import Footer from './Footer.js';
import { useHistory, useParams } from 'react-router-dom';
import Header2 from './Header2';
import Footer2 from './Footer2';
import { getTokenFromUrl } from './spotify';
function Main(props) {
	const { width } = props;
	const [user, setUser] = useState();
	const [token, setToken] = useState();
	let history = useHistory();
	useEffect(() => {
		const getUser = async () => {
			const data = await spotify.getMe();

			setUser(data);
		};
		getUser();
	}, [token]);

	useEffect(() => {
		console.log('console.log');
		if (!localStorage.getItem('token')) {
			console.log('in if');
			const hash = getTokenFromUrl();
			console.log(hash);
			window.location.hash = '';
			const _token = hash.access_token;
			if (_token) {
				console.log('TOKEN FOUND');
				setToken(_token);
				localStorage.setItem('token', _token);
				spotify.setAccessToken(_token);
			}
		} else {
			console.log('Token in else');
			window.location.hash = '';
			setToken(localStorage.getItem('token'));
			spotify.setAccessToken(localStorage.getItem('token'));
		}
	}, []);
	let page = useParams();
	console.log('Page', page);
	if (user) {
		return (
			<div
				style={{
					minWidth: '100%',
				}}
			>
				<Header2 user={user}></Header2>
				<Body user={user}></Body>
				<Footer></Footer>
			</div>
		);
	} else {
		return <LinearProgress color='primary'></LinearProgress>;
	}
}
export default withWidth()(Main);
