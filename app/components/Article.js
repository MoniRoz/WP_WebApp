import React from 'react'

const Article = ({url, title}) => (
  <div>
    {/* <img src={img.url} alt="Smiley face" height="250px" width="250x"/> */}
    <li>
      <a href={url}>
        {title}
      </a>
    </li>
  </div>
)

export default Article
