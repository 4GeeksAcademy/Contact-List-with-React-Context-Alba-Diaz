import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1 "><i class="fa-solid fa-address-book text-primary fs-1"></i></span>
				</Link>
				<div className="ml-auto">
					<Link to="/new_contact">
					<button className="btn btn-primary border-white text-white">New Contact</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};