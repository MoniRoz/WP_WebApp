import React from 'react'

const Article = ({title, onClick}) => (
  <div>
    {/* <img src={img.url} alt="Smiley face" height="250px" width="250x"/> */}
    <li onClick={onClick}>
      {title}
    </li>
  </div>
)

export default Article
