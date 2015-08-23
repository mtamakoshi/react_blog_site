var PostDetail = React.createClass({
	render: function() {
		return (
			<div>
				<p>{this.props.post.photo}</p>
				<h2>{this.props.post.title}</h2>
				<p>hi on {this.props.post.created_at}</p>
				<p>{this.props.post.body}</p>
			</div>
		);
	}
})