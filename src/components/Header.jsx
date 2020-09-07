import React from "react";
import "../stylesheets/Header.css";

const Header = () => {
	return (
		<div className="header">
			<div className="header-flex-container">
				<h2 id="plumm-title">plumm.it</h2>
				<div className="header-buttons">
					<button>Log In</button>
					<button>Sign Up</button>
				</div>
			</div>
		</div>
	);
};

export default Header;
