import React from 'react';
import {Link} from 'react-router-dom';

const homePage = () => {
    return(
        <div>
            <div>
                <h1>Blogs</h1>
                <Link to = {'/blog'}>
                    <h1>View Blogs</h1>
                </Link>
            </div>
        </div>
    );
};
export default homePage;