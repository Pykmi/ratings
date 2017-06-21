import React from 'react';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import User from '../components/User';
import Stars from '../components/Stars';

import APIFetch from '../lib/Fetch';

import '../css/Profile.css';

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
		this.setState({size: Object.keys(data).length})
	}

	componentDidMount() {
		APIFetch().get("/ratings/getbyseller/Heikki Keskari").then(response => {
            this.store(response.data)
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
