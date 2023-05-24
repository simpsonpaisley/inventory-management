import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Auth0Provider
		domain="stockwise.uk.auth0.com"
		clientId="iHPe9JXljjxsJwWyRUeCVC3T6NL6T8I9"
		authorizationParams={{
			redirect_uri: window.location.origin,
		}}>
		<React.StrictMode>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</React.StrictMode>
	</Auth0Provider>
);
