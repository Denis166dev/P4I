import React from 'react'
import ReactDOM from 'react-dom/client'
import Browser from './routes/Browser'
import { ProjetoProvider } from './context/ProjetoContext'


ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ProjetoProvider>
			<Browser />
		</ProjetoProvider>
	</React.StrictMode>
)