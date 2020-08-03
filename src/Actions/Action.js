import axios from 'axios';

export const getAllPosts = () => {
    return(
        dispatch => {
            axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                return (dispatch({type: GET_ALL_POSTS, payload:res.data}));
            })
        }
    )
}

export const getSinglePost = (id) => {
    return(
        dispatch => {
            axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                return (dispatch({type: GET_SINGLE_POST, payload:res.data}));
            })
        }
    )
}

export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const GET_SINGLE_POST = 'GET_SINGLE_POST';
