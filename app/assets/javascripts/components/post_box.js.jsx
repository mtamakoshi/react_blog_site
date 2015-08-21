var PostBox = React.createdClass({
	getInitialState: function() {
		return
			JSON.parse(this.props.presenter);  //presenter represents posts (see controller)
	},
	handlePostSubmit: function() {
		return
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
			<PostForm form={this.state.form} onPostSubmit={this.handlePostSubmit} />			
			<PostList posts={this.state.posts} />
			</div>
		);
	}
});