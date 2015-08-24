var PostDetail = React.createClass({
	render: function() {
		return (
			<div className="row">
			    <div className="col-md-4 col-md-offset-4 logo">
  				  <a href="/">
  				    <p className="logoName">MADE in 80{"'"}s</p>
  				   </a>
  				</div>
  				<div className="col-md-6 col-md-offset-3 postDetail">
  				<p className="postTitle">{this.props.post.title}</p>
				<p className="postDate">Written on {this.props.post.created_at}</p>
				<hr></hr>
				<p className="postPhoto">{this.props.post.photo_file_name}</p>
				<p className="postBody">{this.props.post.body}</p>
				</div>
			</div>
		);
	}
})
