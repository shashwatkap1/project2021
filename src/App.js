import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';
import LoginSuccessful from './Successful2';
import Main from './Main';
export const spotify = new SpotifyWebApi();
function App() {
	const [token, setToken] = useState();

	useEffect(() => {
		const hash = getTokenFromUrl();
		window.location.hash = '';
		const _token = hash.access_token;
		if (_token) {
			setToken(_token);
			spotify.setAccessToken(_token);
		}
	}, []);

	return <div>{token ? <Main /> : <Login />}</div>;
}

export default App;
