import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import Contacts from './pages/Contacts'
import Faq from './pages/Faq'
import Home from './pages/Home'
import Layout from './pages/Layout'

const App: FC = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index path="/randomNumber-game/" element={<Home />} />
					<Route path="/contacts" element={<Contacts />} />
					<Route path="/faq" element={<Faq />} />
				</Route>
			</Routes>
		</>
	)
}

export default App
