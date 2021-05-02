import { AppBar, Avatar, Grid, IconButton, Toolbar, Tooltip, Typography } from '@material-ui/core';
import React from 'react';
import { colors } from './colors';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import logo from './LOGO.png';
import Body2 from './Body2';
import Login from './Login';
function Header2(props) {
	const style = {
		logo: {
			objectFit: 'contain',
			height: '65px',
			paddingLeft: '10px',
		},
	};

	const default_img =
		'https://grandimageinc.com/wp-content/uploads/2015/09/icon-user-default-300x300.png';
	const { user } = props;
	const { display_name: name, images } = user;
	let history = useHistory();
	const url = images[0] ? images[0].url : 'fgh';
	return (
		<AppBar position='sticky' color='primary1' style={{ minHeight: '30px' }}>
			<Toolbar>
				<Grid container spacing={2} direction='row' justify='space-between' alignItems='center'>
					<Grid item md={6} xs={6} justify='flex-start'>
						<img style={style.logo} src={logo} alt='logo' />
					</Grid>
					{/* <Grid item md={8} xs={4}>
						<Router>
							<BottomNavigation showLabels style={{ position: 'sticky' }}>
								<BottomNavigationAction
									onClick={() => history.push('/Home')}
									label='Recents'
									icon={<QueueMusicIcon />}
								/>
								<BottomNavigationAction label='Favorites' icon={<FavoriteIcon />} />
								<BottomNavigationAction label='Nearby' icon={<LocationOnIcon />} />
							</BottomNavigation>
							<Switch>
								<Route path='/login'>
									<Login></Login>
								</Route>
							</Switch>
						</Router>
					</Grid> */}
					<Grid
						item
						container
						md={6}
						xs={6}
						direction='row'
						justify='flex-end'
						alignItems='center'
						style={{ paddingRight: '10px' }}
					>
						<Avatar
							src={url}
							alt={name}
							style={{
								maxHeight: '30px',
								maxWidth: '30px',
								backgroundColor: colors.backgroundColor,
							}}
						></Avatar>

						<Typography variant='body1' style={{ marginLeft: '2px' }}>
							{name.split(' ')}
						</Typography>
						<IconButton
							onClick={() => {
								history.push('/');
								localStorage.removeItem('token');
							}}
						>
							<Tooltip title='Logout'>
								<ExitToAppIcon></ExitToAppIcon>
							</Tooltip>
						</IconButton>
					</Grid>
				</Grid>
			</Toolbar>
		</AppBar>
	);
}

export default Header2;
