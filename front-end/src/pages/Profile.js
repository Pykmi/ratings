import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import '../css/User.css';

class User extends React.Component {
	constructor() {
		super();
		this.state = {tooltip: 'none'}
		this.update = this.update.bind(this)
	}

	update(e) {
		if(this.state.tooltip === 'none') {
			this.setState({tooltip: 'block'})
		} else {
			this.setState({tooltip: 'none'})
		}
	}

    render() {
		return (
			<Grid className="block">
				<Row className="show-grid">
					<Col mdOffset={3} md={8}><div id="username">Heikki Keskari</div></Col>
				</Row>
				<Row className="show-grid">
					<Col mdOffset={3} md={8}>
						<div>
							<img src="/i/star.png" alt="" />
							<img src="/i/star.png" alt="" />
							<img src="/i/star.png" alt="" />
							<img src="/i/star.png" alt="" />
							<a id="reviews_total">
								(132 reviews)
								<span><img src="/i/breakdown.png" alt="" /></span>
							</a>
						</div>
					</Col>
				</Row>
			</Grid>
		);
    }
}

class Review extends React.Component {
    render() {
		return (
			<Grid className="block">
				<Row>
					<Col mdOffset={3} md={8}><div className="text bold">Helkama Yoker 16" polkupyörä (09.05.2017 08:25)</div></Col>
				</Row>
				<Row>
					<Col mdOffset={3} md={1}>
						<img src="/i/star.png" alt="" />
						<img src="/i/star.png" alt="" />
						<img src="/i/star.png" alt="" />
					</Col>
					<Col md={6}><span className="text">Overall</span></Col>
				</Row>
				<Row>
					<Col mdOffset={3} md={1}>
						<img src="/i/star.png" alt="" />
						<img src="/i/star.png" alt="" />
					</Col>
					<Col md={6}><div className="text">Communication</div></Col>
				</Row>
				<Row>
					<Col mdOffset={3} md={1}>
						<img src="/i/star.png" alt="" />
						<img src="/i/star.png" alt="" />
						<img src="/i/star.png" alt="" />
					</Col>
					<Col md={6}><div className="text">Shipping</div></Col>
				</Row>
				<Row className="sblock">
					<Col mdOffset={3} md={1}>
						<img src="/i/star.png" alt="" />
						<img src="/i/star.png" alt="" />
						<img src="/i/star.png" alt="" />
						<img src="/i/star.png" alt="" />
					</Col>
					<Col md={6}><div className="text">Condition</div></Col>
				</Row>
				<Row className="sblock">
					<Col mdOffset={3} md={6}><div className="text">Buyer: Nirri Mäkelä</div></Col>
				</Row>
				<Row>
					<Col mdOffset={3} md={6}><div className="text">Comment: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div></Col>
				</Row>
			</Grid>
		);
    }
}

class Profile extends React.Component {
    render() {
		return (
			<div>
				<User />
				<Review />
			</div>
		);
    }
}

export default Profile;
