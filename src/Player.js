import Sidebar from './Sidebar';
import React from 'react';
import Body from './Body';
import './Player.css';

function Player(props) {
	return (
		<div className='holder'>
			<div style={{ width: '90%' }}>
				<Body />
			</div>
			<div style={{ width: '10%' }}>
				<Sidebar />
			</div>
		</div>
	);
}

export default Player;
