import React from 'react'
import ArticleBody from './ArticleBody'
import styles from '../styles/Article.scss';
import loader from '../styles/loader.scss'
import {
  Grid,
  Row,
  Col,
  PageHeader,
  Image,
  Media
} from 'react-bootstrap';

const createArticle = (article) => {
  let img = null;
  if (article.img)
    img = <img src={article.img.url} className={styles.articleImg}></img>
  var element = (
    <Grid>
      <Row className={"show-grid" + ' ' + styles.rowContainer}>
        <PageHeader style={{
          textAlign: "center"
        }} className={styles.header}>
          <small style={{
            color: "black"
          }}>{article.title.toUpperCase()}</small>
        </PageHeader>
        <Media>
          {img}
          <div className={styles.articleText}>
            {article.body.map((body, index) => (<ArticleBody key={index} {...body}/>))}</div>
        </Media>
      </Row>
    </Grid>
  )
  return element
}

const Article = ({match, fetching, error, articles}) => {
  var element;
  if (fetching)
    return (
      <div className={loader.fullPage}>
        <div className={loader.spinner}></div>
      </div>
    )

  if (error) {
    for (var article of articles)
      if (article.id == match.params.id) {
        return <div className={styles.rootBackground}>{createArticle(article)}</div>
      }

    return (
      <div className={loader.fullPage}>
        ERROR! PAGE NOT FOUND
      </div>
    )
  }

  for (var article of articles) {
    if (article.id == match.params.id) {
      element = createArticle(article)
    }
  }

  return <div className={styles.rootBackground}>{element}</div>

}
export default Article
