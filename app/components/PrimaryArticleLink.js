import React from 'react'
import {Link} from 'react-router-dom';
import style from '../styles/SecondaryArticleLink.scss';
import styles from '../styles/PrimaryArticleLink.scss';

const returnProperDate = (timestamp) => {
  var options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  return new Date(timestamp * 1000).toLocaleDateString('pl-PL', options);
}

const PrimaryArticleLink = ({id, title, img, ts, onClick}) => {
  return (
    <div className={styles.image} style={{
      backgroundImage: `url(${img
        ? img.url
        : require('../assets/standart.jpg')})`
    }}>
      <h2 className={style.linkToArticle + " " + styles.title}>
        <li className={styles.linkToArticle} onClick={onClick}>
          <Link to={"/article/" + id}>{title.toUpperCase()}
          </Link>
        </li>
        <time style={{
          color: 'rgb(191, 191, 191)'
        }}>{returnProperDate(ts)}</time>
      </h2>
    </div>
  )
}
export default PrimaryArticleLink
