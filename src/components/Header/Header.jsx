import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import {Link} from "react-scroll";

const Header = () => {
	const mobile = window.innerWidth <= 768 ? true : false;
	const [menuOpened, setMenuOpened] = useState(false);
	return (
		<div className="header">
			<img src={Logo} className="logo" />
			{menuOpened === false && mobile === true ? (
				<div
					style={{
						backgroundColor: "var(--appColor)",
						padding: "0.5rem",
						borderRadius: "5px",
					}}
					onClick={() => setMenuOpened(true)}>
					<img style={{ width: "1.5rem", height: "1.5rem" }} src={Bars}></img>
				</div>
			) : (
				<ul className="header-menu">
					<li >
						<Link onClick={() => setMenuOpened(false)} to="hero" smooth duration={700}>Home</Link>
					</li>
					<li >
						<Link onClick={() => setMenuOpened(false)} to="programs" smooth duration={700}>Programs</Link>
					</li>
					<li>
						<Link onClick={() => setMenuOpened(false)} to="reasons" smooth duration={700}>Why Us</Link>
					</li>
					<li >
						<Link onClick={() => setMenuOpened(false)} to="plans" smooth duration={700}>Plans</Link>
					</li>
					<li >
						<Link onClick={() => setMenuOpened(false)} to="testimonials" smooth duration={700}>
							Testimonials
						</Link>
					</li>
				</ul>
			)}
		</div>
	);
};

export default Header;
