import React from 'react'
import PrimaryArticleLink from './PrimaryArticleLink'
import SecondaryArticleLink from './SecondaryArticleLink'
import {Button, Grid, Row, Col} from 'react-bootstrap';
import styles from '../styles/ArticleList.scss';
import button from '../styles/buttons.scss'
import loader from '../styles/loader.scss'

const ArticleList = ({
  fetching,
  page,
  articles,
  title,
  borderColor,
  service,
  onButtonLoadMoreClick,
  onArticleLinkClick
}) => {
  if ((fetching && !(articles.length > 0)))
    return (
      <div className={loader.fullPage}>
        <div className={loader.spinner}></div>
      </div>
    )
  if (!fetching && !(articles.length > 0))
    return (
      <div className={loader.fullPage}>
        <img src={require('../assets/warning.png')}/>
        <p>ERROR! PAGE NOT FOUND</p>
      </div>
    )

  return (
    <Grid>
      <div className={styles.newsContainer}>
        <div className={styles.tabHeader} style={{
          borderBottomColor: `${borderColor}`
        }}>
          <span className={styles.tabName}>{title}</span>
        </div>
        <div className={styles.tabContent}>
          <Row className="show-grid">
            <Col xs={12} md={7}><PrimaryArticleLink {...articles[0]} onClick={() => onArticleLinkClick(articles[0].url, service)}/></Col>
            <Col xs={12} md={5}>
              {articles.slice().splice(1).map((article, index) => (<SecondaryArticleLink key={index} {...article} onClick={() => onArticleLinkClick(article.url, service)}/>))}</Col>
          </Row>
          <Row className="show-grid">
            <span className={button.leftArrow} onClick={() => onButtonLoadMoreClick(((page > 0)
              ? (page - 1)
              : 0) * 5, service, -1)}></span>
            <span className={button.arrow} onClick={() => onButtonLoadMoreClick((page + 1) * 5, service, 1)}></span>
          </Row>
        </div>
      </div>
    </Grid>
  )

};

export default ArticleList
