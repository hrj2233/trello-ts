import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { GlobalStyled } from './GlobalStyled';
import { darkTheme } from './theme';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<RecoilRoot>
		<ThemeProvider theme={darkTheme}>
			<GlobalStyled />
			<App />
		</ThemeProvider>
	</RecoilRoot>
);
