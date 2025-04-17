import React, { useState } from 'react'

const Likebutton = ({isLiked}) => {
    const [liked,setLiked] = useState(isLiked);
   const LikeToggle = ()=> {
        setLiked(!liked)
    }
  return (
    <div>
        <button onClick={LikeToggle}>{liked ? 'Liked' : 'Like'}</button>
    </div>
  )
}

export default Likebutton