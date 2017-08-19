import React from 'react'
import {Link} from 'react-router-dom';

const ArticleLink = ({id, title, onClick}) => (
  <div>
    <li onClick={onClick}>
      <Link to={"/article/" + id}>{title}</Link>
    </li>
  </div>
)

export default ArticleLink
