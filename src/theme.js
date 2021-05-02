import { colors, createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#1AB26B',
		},
		secondary: {
			main: '#f5f2f2',
		},
		white: {
			main: '#ffffff',
		},
		primary1: {
			main: colors.backgroundColor,
		},
	},
	typography: {
		fontFamily: '"Montserrat", Arial, Helvetica, sans-serif',
		fontSize: 12,

		allVariants: {
			color: '#001b3d',
		},
	},
});
export default theme;
