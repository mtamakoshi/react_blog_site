var Post = React.createClass({
	render: function() {
		return (
			<div className="post">
				<p>{this.props.photo}</p>
				<h3>{this.props.title}</h3>
				<p>Written on {this.props.created_at}</p>
				<p className="body">{this.props.body}</p>
			</div>
		);
	}
});

var PostList = React.createClass({
	render: function() {
		var postNodes = this.props.posts.map(function (post) {
			return (
				<Post title={post.title} created_at={post.created_at} body={post.body} photo={post.photo} id={post.id} key={post.id} />
			)
		});
		return (
			<div>
				<div>
					<h2>Post list</h2>
					{postNodes.reverse()}
				</div>
			</div>
		);
	}
});



