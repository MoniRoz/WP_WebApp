import React from 'react'
import ArticleLink from './ArticleLink'
import {Button, Grid, Row, Col} from 'react-bootstrap';
import styles from './css/ArticleList.scss';

const ArticleList = ({fetching, page, articles, onButtonLoadMoreClick, onArticleLinkClick}) => {
  let text = "Load more"
  if (fetching && articles.length > 0) {
    text = "Loading..."
  }
  if (fetching && !(articles.length > 0))
    return <ul>Loading..</ul>

  return (
    <Grid>
      <div className={styles.newsContainer}>
        <div className={styles.tabHeader}>
          <span className={styles.tabName}>WIADOMOŚCI</span>
        </div>
        <div className={styles.tabContent}>
          <Row className="show-grid">
            <Col xs={12} md={5}>test</Col>
            <Col xs={12} md={7}>
              {articles.map((article,index) => (<ArticleLink key={index} id={article.id} title={article.title} img={article.img} onClick={() => onArticleLinkClick(article.url)}/>))}</Col>
          </Row>
          <Row className="show-grid">
            <Button className={styles.setButton}onClick={() => onButtonLoadMoreClick(page * 5)}>
              {text}
            </Button>
          </Row>
        </div>
      </div>
    </Grid>
  )

};

export default ArticleList
