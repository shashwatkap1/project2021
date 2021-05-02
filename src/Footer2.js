import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import React from 'react';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
function Footer2() {
	return (
		<BottomNavigation showLabels style={{ position: 'sticky' }}>
			<BottomNavigationAction label='Recents' icon={<RestoreIcon />} />
			<BottomNavigationAction label='Favorites' icon={<FavoriteIcon />} />
			<BottomNavigationAction label='Nearby' icon={<LocationOnIcon />} />
		</BottomNavigation>
	);
}

export default Footer2;
