import { Button } from '@material-ui/core';

const Notcurr = (props) => {
	return (
		<div>
			<h2>
				Seems empty here &#128517;
				<br></br>
				Here's what you can do:
				<br></br>
				->Play a song on any device
				<br></br>
				->Hit
				<Button onClick={props.callback}>Refresh</Button>
			</h2>
		</div>
	);
};
export default Notcurr;
