import React from 'react';
// import './Footer.scss';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { FaTwitter, FaAndroid, FaGithub, FaLinkedinIn, FaCodepen } from 'react-icons/fa';
const Footer = () => {
	return (
		<footer id="Footer">
			<div className="Footer Footer__img">
				<button className="btn dbtn">
					<FaAndroid />
				</button>
				<Container className="Footer__Center">
					<h5> Follow Us on</h5>
					<div className="Footer__Icons">
						<div>
							<a href="/#">
								<FaTwitter color="#00aced" />
							</a>
						</div>
						<div>
							<a href="/#">
								{/* <FaGithub color="#211F1F" /> */}
								<FaGithub color="gray" />
							</a>
						</div>
						<div>
							<a href="/#">
								<FaLinkedinIn color=" #2867B2" />
							</a>
						</div>
						<div>
							<a href="/#">
								<FaCodepen color="#eee" />
							</a>
						</div>
					</div>
					<div>
						<h3>Copyright &copy; 2020 ShoppinList.com </h3>
						<p>
							<Link>Privacy Policy</Link>|<Link> Terms of Service </Link>{' '}
						</p>
					</div>
				</Container>
			</div>
		</footer>
	);
};

export default Footer;
