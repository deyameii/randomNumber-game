import { FC } from 'react'
import { Link } from 'react-router-dom'
import logo from './../assets/img/logo.svg'
import Navbar from './Navbar'

const Header: FC = () => {
	return (
		<>
			<header className="mx-auto flex justify-center h-15 bg-gradient-to-r from-violet-800 to-fuchsia-900 py-4">
				<Link to="/">
					<img src={logo} alt="logo" width={45} height={45} />
				</Link>
			</header>
			<Navbar />
		</>
	)
}

export default Header
