import React from 'react'
import Likebutton from './likebutton'

const Postcard = ({profileImage,username,content,isLiked}) => {
  return (
    <div>
        <img src={profileImage} alt={username} style={{width:"200px",height:"200px",borderRadius:"50%",justifyContent:"space-between"}} />
        <h3>{username}</h3>
        <p>{content}</p>
        <Likebutton isLiked={isLiked}/>
    </div>
  )
}

export default Postcard