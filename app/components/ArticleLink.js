import React from 'react'
import {Link} from 'react-router-dom';
import styles from './css/ArticleLink.scss';

const ArticleLink = ({id, title, ts, onClick}) => (
  <li className={styles.linkToArticle} onClick={onClick}>
    <Link to={"/article/" + id}>{title}
    </Link>
  </li>
)

export default ArticleLink
