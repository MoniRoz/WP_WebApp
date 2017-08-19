import React from 'react'
import {Link} from 'react-router-dom';
import {Media} from 'react-bootstrap';
import styles from './css/ArticleLink.scss';

const ArticleLink = ({id, title, img, onClick}) => (
  <Media>
    <Media.Left align="middle">
      <img src={img
        ? img.url
        : null} width={110} height={80}/>
    </Media.Left>
    <Media.Body>
      <Media.Heading>
        <li className={styles.linkToArticle} onClick={onClick}>
          <Link to={"/article/" + id}>{title.toUpperCase()}
          </Link>
        </li>
      </Media.Heading>
    </Media.Body>
  </Media>
)

export default ArticleLink
