var PostDetail = React.createClass({
	render: function() {
		return (
			<div className="row">
			    <div className="col-md-2 col-md-offset-5">
  				  <a href="/">
  				    <img id="logo" src="/assets/logo2.png" />
  				   </a>
  				</div>
  				<div className="col-md-6 col-md-offset-3 postDetail">
  				<p className="postTitle">{this.props.post.title}</p>
				<p className="postDate">Written on {this.props.post.created_at}</p>
				<hr></hr>
				<p className="postPhoto">{this.props.post.photo.url}</p>
				<p className="postBody">{this.props.post.body}</p>
				</div>
			</div>
		);
	}
})
