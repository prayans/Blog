import {connect} from 'react-redux';
import {getAllPosts} from '../Actions/Action'
import React from 'react';
import {Link} from 'react-router-dom';
import _ from 'lodash';

class AllBlogs extends React.Component {
    componentDidMount() {
        console.log(this.props);
        this.props.getAllPosts();
    }
    render() {
        return (
            <div>
                <h1>All Posts</h1>
                {
                    _.map(this.props.blog.posts, (item,i) => {
                        return (
                            <Link key={i} to={`/blogs/${item.id}`} >
                                <h3>{item.id}. {item.title}</h3>
                                <p>{item.body}</p>
                            </Link>
                        )
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return (
        {blog: state.BlogList}
    );
}

const mapDispatchToProps = dispatch => {
    return({
        getAllPosts: () => dispatch(getAllPosts())
    });
}

export default connect(mapStateToProps,mapDispatchToProps)(AllBlogs);
