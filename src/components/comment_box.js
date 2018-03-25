import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
class CommentBox extends Component {

    state = {
        comment: ''
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} className="comment-box">
                <textarea value={this.state.comment} onChange={this.handleChange} />
                <button action="submit">Submit</button>
            </form>
        )
    }

    handleChange = (e) => {
        this.setState({ comment: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.saveComment(this.state.comment);
        this.setState({ comment: '' });

    }
}


export default connect(null, actions)(CommentBox);