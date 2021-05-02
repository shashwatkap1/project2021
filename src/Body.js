import {
	Grid,
	Button,
	Typography,
	LinearProgress,
	Divider,
	Avatar,
	withWidth,
	Box,
} from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { spotify } from './App';
import logo from './LOGO.png';
import recent from './Recent.png';
import './Body.css';
import { colors } from './colors';
function Body(props) {
	const [playlists, setPlaylists] = useState();
	const [currPlaylist, setCurrPlaylist] = useState();
	const [tracks, setTracks] = useState();
	const [recentlyPlayed, setRecentlyPlayed] = useState();
	const [currTrack, setCurrTracks] = useState();
	const default_img =
		'https://grandimageinc.com/wp-content/uploads/2015/09/icon-user-default-300x300.png';
	const { user, width } = props;
	const { display_name: name, images } = user;
	const url = images[0] ? images[0].url : '';
	useEffect(() => {
		const getPlaylist = async () => {
			const playlists = await spotify.getUserPlaylists();

			setPlaylists(playlists.items);
		};
		async function getRecentlyPlayed() {
			const recentlyPlayed = await spotify.getMyRecentlyPlayedTracks();

			const arr = recentlyPlayed.items;
			console.log(recentlyPlayed);
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
				finalArr.push({ track: a, artist: b, url: c, preview_url: d });
				return { name: a, artist: b, url: c, preview_url: d };
			});

			arr.map((i) => i.track.name).filter((value, index, self) => self.indexOf(value) === index);

			setRecentlyPlayed(finalArr);
		}

		getRecentlyPlayed();
		getPlaylist();
	}, []);

	const Playlistbutton = () => {
		return (
			<Box mx={2} my={2}>
				<Grid container justify='center'>
					<Typography variant='h3' style={{ fontWeight: 600 }}>
						Recently Played
					</Typography>
				</Grid>
				<Grid container justify='center'>
					{recentlyPlayed
						? recentlyPlayed.map((track, idx) => {
								const { track: name, artist, url, preview_url } = track;
								return (
									<Grid
										container
										item
										xs={6}
										key={idx}
										sm={3}
										style={{ paddingTop: '20px', paddingBottom: '30px' }}
										direction='column'
										justify='flex-start'
										alignItems='center'
									>
										<img
											src={url}
											alt='hello'
											onClick={() => toggleTrack(preview_url)}
											style={{ ...style.imageTrack, cursor: 'pointer' }}
										></img>
										<Typography align='center' variant='h6'>
											{name}
										</Typography>{' '}
										<Typography align='center' variant='subtitle1'>
											{artist}
										</Typography>{' '}
									</Grid>
								);
						  })
						: null}
				</Grid>
			</Box>
		);
	};

	const TracksButton = () => {
		if (tracks)
			return (
				<div>
					<Grid container justify='center' style={{ paddingTop: '20px', paddingBottom: '30px' }}>
						<Typography variant='h3' style={{ fontWeight: 600 }}>
							{currPlaylist.name}
						</Typography>
					</Grid>

					<Grid container justify='center' style={{ paddingLeft: '10px', paddingRight: '10px' }}>
						{tracks.map((track, idx) => {
							const {
								name,
								artists: [{ name: artist }],
								preview_url,
								album: {
									images: [{ url }],
								},
							} = track.track;
							return (
								<Grid
									container
									item
									key={idx}
									xs={6}
									sm={3}
									style={{ paddingTop: '20px', paddingBottom: '30px' }}
									direction='column'
									justify='flex-start'
									alignItems='center'
								>
									<img
										src={url}
										alt='hello'
										onClick={() => toggleTrack(preview_url)}
										style={{ ...style.imageTrack, cursor: 'pointer' }}
									></img>
									<Typography align='center' variant='h6'>
										{name}
									</Typography>{' '}
									<Typography align='center' variant='subtitle1'>
										{artist}
									</Typography>{' '}
								</Grid>
							);
						})}
					</Grid>
				</div>
			);
		else return null;
	};

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
		setCurrPlaylist(playlist);
		const getTracks = async () => {
			const tracks = await spotify.getPlaylistTracks(playlist.id);
			const stats = await spotify.getMyTopArtists();
			console.log(stats);
			setTracks(tracks.items);
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
					<Avatar src={url} alt={name} style={{ marginRight: '10px' }}></Avatar>

					<Typography variant='h6'>{name}</Typography>
				</div>
			</div>
		);
	}

	const toggleTrack = (mp3Link) => {};
	if (playlists) {
		return (
			<div
				style={{
					paddingTop: '5px',
					paddingBottom: '88px',
					height: '100%',

					backgroundColor: colors.backgrounColor,
				}}
			>
				<Grid container justify='center' style={{ paddingBottom: '30px' }}>
					<Typography
						variant='h3'
						style={{
							fontWeight: 600,
						}}
					>
						Playlists
					</Typography>
				</Grid>

				<Grid container justify='center' style={{ paddingLeft: '10px', paddingRight: '10px' }}>
					{playlists.map((playlist, idx) => {
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
								key={idx}
								direction='column'
								playlist={playlist}
								alignItems='center'
								justify='flex-start'
							>
								<img
									src={url}
									style={{ ...style.image, cursor: 'pointer' }}
									onClick={() => handleClick(playlist)}
									alt='PLAYLIST'
								></img>
								<Typography align='center' variant='h5'>
									{name}
								</Typography>{' '}
							</Grid>
						);
					})}
					<Grid
						container
						item
						style={{ paddingTop: '20px', paddingBottom: '30px' }}
						sm={4}
						xs={6}
						direction='column'
						alignItems='center'
						justify='flex-start'
					>
						<img src={recent} style={{ ...style.image, cursor: 'pointer' }} alt='PLAYLIST'></img>
						<Typography align='center' variant='h5'>
							{name}
						</Typography>{' '}
					</Grid>
				</Grid>
				{!currPlaylist ? <Playlistbutton /> : null}
				<TracksButton />
			</div>
		);
	} else {
		return <LinearProgress color='primary'></LinearProgress>;
	}
}

export default withWidth()(Body);
