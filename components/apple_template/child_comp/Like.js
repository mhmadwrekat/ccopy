import React, { useState } from 'react'
const Like = () => {
  const defaultLike = false
  const [like, setLike] = useState(defaultLike)
  const [likee, setLikee] = useState(defaultLike)

  const handleLike = () => {
    setLike(!like)
  }
  return (
    <React.Fragment>
      <div className="bg-white absolute bottom-1 right-1 rounded-full p-1">
        {like ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=" h-7 w-7 cursor-pointer"
            fill="#FF0000"
            viewBox="0 0 24 24"
            stroke="#FF0000"
            strokeWidth="2"
            onClick={() => {
              handleLike()
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=" h-7 w-7 cursor-pointer opacity-70"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            onClick={() => {
              handleLike()
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        )}
      </div>
    </React.Fragment>
  )
}

export default Like
