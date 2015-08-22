var PostForm = React.createClass({
	handleSubmit: function(event) {
	//To cancel to submit if there are any error inputs by calling e.preventDefault//
	event.preventDefault();

	var title = this.refs.title.getDOMNode().value.trim();
	var body = this.refs.body.getDOMNode().value.trim();

	//To validate contetns
	if (!title || !body) {
		alert("Please enter both title and post content");
	}

	//To submit the form entry and serialize
	var formData = $(this.refs.form.getDOMNode()).serialize();

	this.props.onPostSubmit(formData, this.props.form.action);

	//To Reset from (clear inputs after submit
	this.refs.title.getDOMNode().value = "";
	this.refs.body.getDOMNode().value = "";	
	this.refs.photo.getDOMNode().value = "";
	},

	render: function() {
		return (
			<form ref="form" action={this.props.form.action} acceptCharset="UTF-8" method="post" onSubmit={this.handleSubmit}>
			  <p><input type="hidden" name={ this.props.form.csrf_param } value={ this.props.form.csrf_token } /></p>
			  <p><input type="text" ref="title" name="post[title]" placeholder="Title" /></p>
			  <p><textarea ref="body" name="post[body]" placeholder="Post content" row="10" /></p>
			  <p><input type="file" ref="photo" name="post[photo]" /></p>
			  <p><button type="submit">Submit post</button></p>
			</form>
	  );
	}
});