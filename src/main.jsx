import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react';
import App from './App';

const theme = extendTheme({
	styles: {
		global: {
			body: {
				transitionProperty: 'all',
				transitionDuration: 'normal',
			},
		},
	},
	config: {
		disableTransitionOnChange: false,
	},
});

ReactDOM.createRoot(document.getElementById('root')).render(
	// <React.StrictMode>
	<ChakraProvider theme={theme}>
		<ColorModeScript initialColorMode='light' />
		<App />
	</ChakraProvider>
	// </React.StrictMode>,
);
