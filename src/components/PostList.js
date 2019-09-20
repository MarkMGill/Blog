import React from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers, loveCounterArr, showCommentBoxFunc, showCommentsFunc } from './actions/';
import UserHeader from './UserHeader';
import ShowComments from './ShowComments';

class PostList extends React.Component {

    state = { index: null, comment: '' };

    componentDidMount() {
        this.props.fetchPostsAndUsers();
    }

    onCommentSubmit = (event) => {
        event.preventDefault();
        if(this.state.comment !== '') {
            this.props.showCommentsFunc(this.state.index, this.state.comment);
        }
        this.setState({ comment: '' })
    }

    iStyle = {
        cursor: 'pointer'
    }

    heart(heartCount) {
        return (heartCount === 0) ? 'far fa-heart' : 'fas fa-heart';
    }

    renderList() {
        return this.props.posts.map((post, index) => {
            return (
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user" />
                    <div className="content mb-1">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p className="mb-1 lead">{post.body}</p>
                        </div>
                        <UserHeader userId={post.userId} />
                        <div className="mb-1">
                            <div className="d-inline mx-2" onClick={() => this.props.loveCounterArr(index)} style={this.iStyle}>
                                <i className={this.heart(this.props.loveCountArr[index])}></i>
                            </div>
                            <div className="d-inline mx-2">{(this.props.loveCountArr[index] === 0) ? null : this.props.loveCountArr[index]}</div>
                            <div onClick={() => this.props.showCommentBoxFunc(index)} className="d-inline mx-2" style={this.iStyle}>
                                <i className="far fa-comment"></i>
                            </div>
                            <form onSubmit={this.onCommentSubmit}> 
                            <div className={this.props.showCommentBoxArr[index]}>
                                <div className="input-group">
                                <input className="form-control" type="text" value={this.state.comment} onChange={ e => this.setState({ index: index, comment: e.target.value })}></input>
                                <div className="input-group-append">
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                                </div>
                            </div>
                            </form>
                        </div>
                        <ShowComments showCommentsArr={this.props.showCommentsArr} index={index} />
                    </div>
                </div> 
            );
        });
    }

    render() {
        
        return <div className="ui relaxed divided list">{this.renderList()}</div>;
    }
}

const mapStateToProps = state => {
    return { posts: state.posts, loveCountArr: state.loveCountArr, showCommentBoxArr: state.showCommentBoxArr, showCommentsArr: state.showCommentsArr };
}

export default connect(mapStateToProps, { fetchPostsAndUsers, loveCounterArr, showCommentBoxFunc, showCommentsFunc })(PostList);
