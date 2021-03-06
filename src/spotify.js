export const authEndpoint = 'https://accounts.spotify.com/authorize';
const clientId = 'e0dac4cc38ef4a469e96c55d9906006f';
const local = 'http://localhost:3000/home';
const dev = 'https://project2021.netlify.app/home';
const redirectUri = dev;
const scopes = [
	'user-read-currently-playing',
	'user-read-recently-played',
	'user-read-playback-state',
	'user-top-read',
	'user-modify-playback-state',
	'playlist-modify-public',
	'playlist-modify-private',
	'user-library-modify',
	'playlist-read-private',
];
export const getTokenFromUrl = () => {
	console.log(window.location.href);
	return window.location.hash
		.substring(1)
		.split('&')
		.reduce((initial, item) => {
			let parts = item.split('=');
			initial[parts[0]] = decodeURIComponent(parts[1]);
			return initial;
		}, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
	'%20'
)}&response_type=token&show_dialog=true`;
