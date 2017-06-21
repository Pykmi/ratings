import React from 'react';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import Stars from '../components/Stars';

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

export default User;
