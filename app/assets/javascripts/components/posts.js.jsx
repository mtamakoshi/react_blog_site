var Post = React.createClass({
	render: function() {
	  <div>
	  	<h2>{this.props.title}</h2>
	  	<p>Posted on {this.props.created_at}</p>
	  	<p>{this.props.body}</p>
	  </div>

	}
  );
});

var PostList = React.createClass({
	render: function() {
		var postNodes = this.props.posts.map(function (post) {
			return
				<Post title={post.title} body={post.body} id={post.id} key={post.id} created_at={post.created_at} />
		});
		return (
			<div>
			 <p>Post List</p>
				{postNodes.reverse()}
			</div>
		);
	}
});