import React from 'react';
import '../../assets/styles/header.scss';
import '../../assets/styles/nav.scss';

const Header = () => (
    <header>
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="colorlib-navbar-brand">
							<a className="colorlib-logo" href="index.html"><span>No</span><span>ah</span></a>
						</div>
						<a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle"><i></i></a>
					</div>
				</div>
			</div>
		</header>
);
export default Header;