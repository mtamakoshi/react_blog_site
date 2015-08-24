var PostBox = React.createClass({
	getInitialState: function() {
		return JSON.parse(this.props.presenting);  //presenting represents posts (see controller
	},
	handlePostSubmit: function(formData, action) {
		$.ajax({
			data: formData,
			url: action,
			type: "POST",
			dataType: "json",
			success: function(data) {
				this.setState({posts: data});
			}.bind(this)
		});
	}, 
	render: function() {
		return (
			<div className="post-box">
			  <div className="post-container">
			  <PostForm form={this.state.form} onPostSubmit={this.handlePostSubmit} />	
			  </div>		
			  <PostList posts={this.state.posts.reverse()} />
			</div>

		);
	}
});



