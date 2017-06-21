import React from 'react';
import _ from 'lodash';

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

export default Stars;
