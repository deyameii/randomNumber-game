import { Outlet } from 'react-router-dom'
import Header from '../header/Header'

const Layout = () => {
	return (
		<div className="bg-background h-screen">
			<Header />
			<main>
				<Outlet />
			</main>
		</div>
	)
}

export default Layout
