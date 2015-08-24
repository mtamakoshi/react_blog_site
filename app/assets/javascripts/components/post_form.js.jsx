var PostForm = React.createClass({
	getInitialState: function() {
		return {
			data_uri: null,
		};
	},
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
	handleFile: function(event) {
	var reader = new FileReader();
	var file = event.target.files[0];

	reader.onload = function(upload) {
		this.setState({
			data_uri: upload.target.result
		});
	 }
	reader.readAsDataURL(file);
	},
	render: function() {
		return (
			<div className="row">
			  <div className="col-md-8 col-md-offset-2 formContainer">
			    <form ref="form" action={this.props.form.action} acceptCharset="UTF-8" method="post" onSubmit={this.handleSubmit} encType="multipart/form-data">
			      <p><input type="hidden" name={ this.props.form.csrf_param } value={ this.props.form.csrf_token } /></p>
			      <p><input type="text" ref="title" name="post[title]" placeholder="Title" className="formBox" /></p>
			      <p><textarea ref="body" name="post[body]" placeholder="Post content" row="10" className="formBox" /></p>
			      <p><input type="file" ref="photo" name="post[photo]" onChange={this.handleFile} className="fileUploader"/></p>
			      <button classNAME="button" type="submit">SUBMIT</button>
			    </form>
			  </div>
			</div>
	  );
	}
});