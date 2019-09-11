import React from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers, loveCounterArr } from './actions/';
import UserHeader from './UserHeader';

class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPostsAndUsers();
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
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <UserHeader userId={post.userId} />
                        <div>
                            <div className="d-inline mx-2" onClick={() => this.props.loveCounterArr(index)} style={this.iStyle}>
                                <i className={this.heart(this.props.loveCountArr[index])}></i>
                            </div>
                            <div className="d-inline">{(this.props.loveCountArr[index] === 0) ? null : this.props.loveCountArr[index]}</div>
                        </div>
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
    console.log(state);
    return { posts: state.posts, loveCountArr: state.loveCountArr };
}

export default connect(mapStateToProps, { fetchPostsAndUsers, loveCounterArr })(PostList);
