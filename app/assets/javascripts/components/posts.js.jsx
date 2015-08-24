var Post = React.createClass({
	render: function() {
		var postId = this.props.id.toString();
		var postPath = "/posts/" + postId
		return (
			<div className="row">
			  <div className="post col-md-6 col-md-offset-3">
				<p className="postTitle">{this.props.title}</p>
				<p className="postDate">Written on {this.props.created_at}</p>
				<p className="postBody" maxVisible={2}>{this.props.body}</p>
				<p className="postPhoto">{this.props.photo_file_name}</p>
				<p className="btn"><a className="button postPath" href={postPath}>Read More</a></p>
			  </div>
			</div>
		);
	}
});

var PostList = React.createClass({
	render: function() {
		var postNodes = this.props.posts.map(function (post) {
			return (
				<Post title={post.title} created_at={post.created_at} body={post.body} photo={post.photo_file_name} id={post.id} key={post.id} />
			)
		});
		return (
			<div className="row">
			  <div className="col-md-12">
			    <div className="col-md-4 col-md-offset-4 logo">
  				  <a href="/">
  				    <p className="logoName">MADE in 80{"'"}s</p>
  				   </a>
  				</div>
				<div className="postList col-md-8 col-md-offset-2">
					{postNodes.reverse()}
				</div>
			  </div>
		    </div>
		);
	}
});



