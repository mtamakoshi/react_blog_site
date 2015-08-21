var PostDetail = React.createClass({
	render: function() {
		return (
			<div>
			  <p>{this.props.post.title}</p>
			  <p>Posted on {this.props.post.created_at}</p>
			  <p>{this.props.post.body}</p>
			</div> 
	  );

	}
});