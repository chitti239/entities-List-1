import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Postcard from './components/Postcard';
import Likebutton from './components/likebutton';

function App() {

  const initialPosts = [
    {
      id: 1,
      profileImage: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg',
      username: 'alice',
      content: 'This is my first post!',
      isLiked: false,
    },
    {
      id: 2,
      profileImage: 'https://writestylesonline.com/wp-content/uploads/2016/08/Follow-These-Steps-for-a-Flawless-Professional-Profile-Picture.jpg',
      username: 'bob',
      content: 'Loving this social media app.',
      isLiked: true,
    },
    {
      id: 3,
      profileImage: 'https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png',
      username: 'charlie',
      content: 'Just another day...',
      isLiked: false,
    },
  ];

  return (
    <>
        <h1>Social media application</h1>
      <div style={{display:"flex",margin:"10px"}}>
        {
          initialPosts.map((post)=>(<Postcard
          key={post.id}
          profileImage={post.profileImage}
          username={post.username}
          content={post.content}
          isLiked={post.isLiked}
          />
        ))
        }
    </div>
    </>
  )
}

export default App
