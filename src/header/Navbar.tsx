import { FC } from 'react'
import { Link } from 'react-router-dom'
const Navbar: FC = () => {
	return (
		<nav className="bg-navbar py-3">
			<ul className="flex justify-center gap-12">
				<li>
					<Link to="/" className="focus:border-b-2">
						Главная
					</Link>
				</li>
				<li>
					<Link to="/faq" className="focus:border-b-2">
						FAQ
					</Link>
				</li>
				<li>
					<Link to="/contacts" className="focus:border-b-2">
						Контакты
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
