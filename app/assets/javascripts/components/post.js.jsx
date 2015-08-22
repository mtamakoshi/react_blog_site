var PostDetail = React.createClass({
	render: function() {
		return (
			<div>
				<img src="../assets/images/photo_file_name" />
				<h2>{this.props.post.title}</h2>
				<p>hi on {this.props.post.created_at}</p>
				<p>{this.props.post.body}</p>
			</div>
		);
	}
})