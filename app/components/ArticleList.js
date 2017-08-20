import React from 'react'
import PrimaryArticleLink from './PrimaryArticleLink'
import SecondaryArticleLink from './SecondaryArticleLink'
import {Button, Grid, Row, Col} from 'react-bootstrap';
import styles from '../styles/ArticleList.scss';
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
      <div className={loader.preloader}>
        <div className={loader.spinner}></div>
      </div>
    )
  if (!fetching && !(articles.length > 0))
    return (
      <div className={loader.preloader}>
        ERROR! PAGE NOT FOUND
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
            <Button onClick={() => onButtonLoadMoreClick(((page <= 0)
              ? page - 1
              : 0) * 5, service, -1)}>
              Mniej
            </Button>
            <Button onClick={() => onButtonLoadMoreClick((page + 1) * 5, service, 1)}>
              Więcej
            </Button>
          </Row>
        </div>
      </div>
    </Grid>
  )

};

export default ArticleList
