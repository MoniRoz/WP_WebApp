import React from 'react'

const Article = ({url, title, img, onClick}) => (
  <div>
    <img src={img.url} alt="Smiley face" height="250px" width="250x"/>
    <li>
      <a href={url} onClick={onClick}>
        {title}
      </a>
    </li>
  </div>
)

export default Article
