import {
	Grid,
	Button,
	Typography,
	LinearProgress,
	Divider,
	Avatar,
	withWidth,
} from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { spotify } from './App';
import logo from './LOGO.png';
import './Body.css';
function Body(props) {
	const [playlists, setPlaylists] = useState();
	const [tracks, setTracks] = useState();
	const [recentlyPlayed, setRecentlyPlayed] = useState();
	const default_img =
		'https://grandimageinc.com/wp-content/uploads/2015/09/icon-user-default-300x300.png';
	const { user, width } = props;
	const {
		display_name: name,
		images: [{ url = default_img }],
	} = user;
	useEffect(() => {
		const getPlaylist = async () => {
			const playlists = await spotify.getUserPlaylists();

			setPlaylists(playlists.items);
		};
		async function getRecentlyPlayed() {
			const recentlyPlayed = await spotify.getMyRecentlyPlayedTracks();

			const arr = recentlyPlayed.items;
			console.log(recentlyPlayed.items);
			const uniqueAges = [
				...new Set(
					arr.map(
						(obj) =>
							obj.track.name +
							'^' +
							obj.track.artists[0].name +
							'^' +
							obj.track.album.images[0].url +
							'^' +
							obj.track.preview_url
					)
				),
			];

			const finalArr = [];
			uniqueAges.map((i) => {
				const temp = i.split('^');

				const [a, b, c, d] = temp;
				finalArr.push({ track: a, artist: b, url: c, preview: d });
				return { name: a, artist: b, url: c, preview: d };
			});

			arr.map((i) => i.track.name).filter((value, index, self) => self.indexOf(value) === index);

			setRecentlyPlayed(finalArr);
		}

		getRecentlyPlayed();
		getPlaylist();
	}, []);
	const style = {
		image: {
			objectFit: 'contain',
			height: '100px',
			borderRadius: '20%',
		},
		imageTrack: { objectFit: 'contain', height: '50px', borderRadius: '10%' },
		logo: {
			objectFit: 'contain',
			position: 'fixed',
			top: 0,
			height: '80px',
			paddingLeft: '10px',
			zIndex: '1',
		},
	};
	function handleClick(playlist) {
		const getTracks = async () => {
			const tracks = await spotify.getPlaylistTracks(playlist.id);

			setTracks(tracks);
		};
		getTracks();
	}
	function Header() {
		return (
			<div>
				<img style={style.logo} src={logo} alt='logo' />
				<div
					style={{
						right: 0,
						top: 0,
						position: 'fixed',
						paddingRight: '5px',
						paddingTop: '10px',
						display: 'flex',
						alignItems: 'center',
					}}
				>
					<Avatar src={url} alt='USER_IMAGE' style={{ marginRight: '10px' }}></Avatar>

					<Typography variant='h6'>{name}</Typography>
				</div>
			</div>
		);
	}
	let audio = new Audio();
	const toggleTrack = (track) => {
		const mp3 = track.preview;

		if (mp3 !== 'null') {
			audio.pause();

			audio = new Audio(mp3);

			audio.play();
		}
	};
	if (playlists) {
		return (
			<div
				style={{
					paddingTop: '60px',
					paddingBottom: '88px',
					height: '100%',
					background: 'linear-gradient(to   right, #FBD786,#C6FFDD)',
				}}
			>
				<Grid container justify='center' style={{ paddingBottom: '30px' }}>
					<Typography variant='h3' style={{ fontWeight: 600 }}>
						Playlists
					</Typography>
				</Grid>

				<Grid container style={{ paddingLeft: '10px', paddingRight: '10px' }}>
					{playlists.map((playlist) => {
						const {
							description,
							name,
							images: [{ url }],
						} = playlist;

						return (
							<Grid
								container
								item
								style={{ paddingTop: '20px', paddingBottom: '30px' }}
								sm={4}
								xs={6}
								direction='column'
								playlist={playlist}
								alignItems='center'
								justify='flex-start'
								onClick={() => handleClick(playlist)}
							>
								<img src={url} style={style.image} alt='PLAYLIST'></img>
								<Typography align='center' variant='h5'>
									{name}
								</Typography>{' '}
							</Grid>
						);
					})}
				</Grid>
				<Grid container justify='center' style={{ paddingTop: '20px', paddingBottom: '30px' }}>
					<Typography variant='h3' style={{ fontWeight: 600 }}>
						Recently Played
					</Typography>
				</Grid>
				<Grid
					container
					justify='space-between'
					style={{ paddingTop: '30px', paddingLeft: '25px', paddingRight: '10px' }}
				>
					{recentlyPlayed.map((track) => {
						const { track: name, artist, url, preview } = track;
						return (
							<Grid
								container
								item
								xs={6}
								sm={2}
								spacing={1}
								justify='flex-start'
								alignItems='center'
								// style={{ paddingTop: '20px', paddingRight: '10px' }}
							>
								<Grid item>
									<img
										src={url}
										alt='hello'
										onClick={() => toggleTrack(track)}
										style={{ ...style.imageTrack, cursor: 'pointer' }}
									></img>
									<Typography align='left' variant='h6'>
										{name}
									</Typography>{' '}
									<Typography align='left' variant='subtitle1'>
										{artist}
									</Typography>{' '}
								</Grid>
							</Grid>
						);
					})}
				</Grid>
			</div>
		);
	} else {
		return <LinearProgress color='primary'></LinearProgress>;
	}
}

export default withWidth()(Body);
