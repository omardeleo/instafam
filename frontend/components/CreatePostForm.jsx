import React from 'react';
import Dropzone from 'react-dropzone';
import * as APIUtil from '../util/post_api_util';

class CreatePostForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            author_id: this.props.currentUserId,
            caption: null, imageUrl: null, imageFile: null
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.goBack = this.goBack.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    onDrop(files) {
        let file = files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({
                imageFile: file,
                imageUrl: fileReader.result
            });
        }
        if (file) {
            fileReader.readAsDataURL(file);
        }
        this.setState({
            imageFile: file})
    }

    dropzoneContents() {
        if (this.state.imageUrl) {
            return (<img className="dropzone-image" src={this.state.imageUrl} />);
        } else {
            return (<div>
                <p className="dropzone-text">Click here or drag file to upload an image</p>
            </div>);
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        let formData = new FormData();
        formData.append("post[caption]", this.state.caption);
        formData.append("post[image]", this.state.imageFile);
        formData.append("post[author_id]", this.state.author_id);
        APIUtil.createPost(formData).then(success => this.goBack());
    }

    goBack() {
        this.props.history.push("profile");
    }

    render() {
        return (
            <div className="create-post-form-container">
                <Dropzone onDrop={this.onDrop.bind(this)}>
                    {({ getRootProps, getInputProps }) => (
                        <section className="container">
                            <div {...getRootProps({ className: 'dropzone' })}>
                                <input {...getInputProps()} />
                                { this.dropzoneContents() }
                            </div>
                        </section>
                    )}
                </Dropzone>
                <form className="create-post-form" onSubmit={this.handleSubmit}>
                    <textarea type="text" rows="2" placeholder="Enter caption here" className="caption-text-box"
                        value={this.state.caption}
                        onKeyDown={(e) => { if (e.key === "Enter") { this.handleSubmit(e); } }}
                        onChange={this.update("caption")}>
                    </textarea>
                    <br />
                    <button className="create-post-button">Create post</button>
                </form>
            </div > 
        );
    }
}

export default CreatePostForm;