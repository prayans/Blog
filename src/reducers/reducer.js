import { GET_ALL_POSTS,GET_SINGLE_POST} from '../Actions/Action';

export const BlogList = (state = { posts: '' }, action) => {
    switch (action.type) {
        case GET_ALL_POSTS: return ({ ...state, posts: action.payload });
        case GET_SINGLE_POST: return ({ ...state, singlePost: action.payload });
        default:
            return state;
    }
}