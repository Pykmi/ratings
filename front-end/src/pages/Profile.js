import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import _ from 'lodash';
import APIFetch from '../lib/Fetch';

import '../css/User.css';

class Stars extends React.Component {
    render() {
		return (
			<div>
				{_.times(this.props.total, i =>
					<img src="/i/star.png" alt="" />
				)}
			</div>
		)
    }
}

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
					<Col mdOffset={3} md={8}><div id="username" className="top">{this.props.seller}</div></Col>
				</Row>
				<Row className="show-grid">
					<Col mdOffset={3} md={8}>
						<div>
							<Stars total={this.props.average} />
							<a id="reviews_total">
								({this.props.reviews} reviews)
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
					<Col mdOffset={3} md={8}><div className="text bold">{this.props.data.item} ({this.props.data.saved})</div></Col>
				</Row>
				<Row>
					<Col mdOffset={3} md={2}>
						<Stars total={this.props.data.overall} />
					</Col>
					<Col md={6}><span className="text">Overall</span></Col>
				</Row>
				<Row>
					<Col mdOffset={3} md={2}>
						<Stars total={this.props.data.communication} />
					</Col>
					<Col md={6}><div className="text">Communication</div></Col>
				</Row>
				<Row>
					<Col mdOffset={3} md={2}>
						<Stars total={this.props.data.shipping} />
					</Col>
					<Col md={6}><div className="text">Shipping</div></Col>
				</Row>
				<Row className="sblock">
					<Col mdOffset={3} md={2}>
						<Stars total={this.props.data.condition} />
					</Col>
					<Col md={6}><div className="text">Condition</div></Col>
				</Row>
				<Row className="sblock">
					<Col mdOffset={3} md={6}><div className="text">Buyer: {this.props.data.sender}</div></Col>
				</Row>
				<Row>
					<Col mdOffset={3} md={6}><div className="text">Comment: {this.props.data.comment}</div></Col>
				</Row>
			</Grid>
		);
    }
}

class Profile extends React.Component {
	constructor() {
		super();
		this.state = {store: false, size: 0}
	}

	store(data) {
		this.setState({store: data})
	}

	componentDidMount() {
		APIFetch().get("/ratings/getbyseller/Heikki Keskari").then(response => {
            this.store(response.data)
			this.setState({size: Object.keys(response.data).length})
        })
	}

	componentDidUpdate() {
		//console.log(this.state.store)
	}

    render() {
		//console.log(this.state.size)
		return (
			<div>
				<User seller="Heikki Henkari" average="4" reviews={this.state.size} />
				{Object.keys(this.state.store).map((name) =>
					<Review data={this.state.store[name]} />
				)}
			</div>
		);
    }
}

export default Profile;
