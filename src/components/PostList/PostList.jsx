import React from "react";
import { BsFillArrowRightCircleFill,BsPenFill, BsFillCameraFill } from 'react-icons/bs'
import {GiHiveMind} from 'react-icons/gi'
import PropTypes from 'prop-types';

const PostList = ({ post }) => {
    return(
        <div className='text-je-white category m-2 p-8 bg-je-black rounded-lg md:m-0 justify-center items-center flex flex-col cursor-pointer min-h-[200px]'>
            {post.category === 'Press' && <BsFillCameraFill className="text-je-white h-4 w-4  md:h-4 " aria-hidden="true" />}
            {post.category === 'Articles' && <BsPenFill className="text-je-white h-4 w-4  md:h-4 " aria-hidden="true" />}
            {post.category === 'News' && <GiHiveMind className="text-je-white h-4 w-4 md:h-4" aria-hidden="true" />}
            {post.category === 'Prensa' && <BsFillCameraFill className="text-je-white h-4 w-4  md:h-4 " aria-hidden="true" />}
            {post.category === 'Articulos' && <BsPenFill className="text-je-white h-4 w-4  md:h-4 " aria-hidden="true" />}
            {post.category === 'Noticias' && <GiHiveMind className="text-je-white h-4 w-4 md:h-4" aria-hidden="true" />}
            <a href={post.url}  style={{ fontFamily: 'Syne' }} className="text-je-white text-center text-xl md:text-2xl">{post.title}</a>
            <BsFillArrowRightCircleFill className="text-je-white h-6 w-6 left-8 md:h-8 md:left-20 md:w-8 relative top-4 md:top-12" aria-hidden="true" />
        </div>
    )
}

PostList.propTypes = {
    post: PropTypes.object,
};



export default PostList;

