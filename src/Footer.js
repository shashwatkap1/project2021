import React from 'react';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import { IconButton, Grid } from '@material-ui/core';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
function Footer() {
	return (
		<div
			style={{
				position: 'fixed',

				background: 'linear-gradient(to  bottom right, #FBD786,#C6FFDD)',
				width: '100%',
				height: '80px',
				bottom: 0,
			}}
		>
			<Grid container>
				<Grid container justify='center' item>
					<div>
						<IconButton>
							<PlayCircleFilledIcon fontSize='large'></PlayCircleFilledIcon>
						</IconButton>
						<IconButton>
							<PauseCircleFilledIcon fontSize='large'></PauseCircleFilledIcon>
						</IconButton>
					</div>
				</Grid>
			</Grid>
		</div>
	);
}

export default Footer;
