import React from 'react'
import ArticleBody from './ArticleBody'
import styles from './css/Article.scss';
import {
  Grid,
  Row,
  Col,
  PageHeader,
  Image,
  Media
} from 'react-bootstrap';

const Article = ({match, fetching, articles}) => {
  var element;
  if (fetching)
    element = (
      <ul>Loading..</ul>
    )
  for (var article of articles) {
    if (article.id == match.params.id) {
      let img = null;
      if (article.img)
        img = <img src={article.img.url} className={styles.articleImg}></img>
      element = (
        <Grid>
          <Row className={"show-grid" + ' ' + styles.rowContainer}>
            <PageHeader style={{
              textAlign: "center"
            }} className={styles.header}>
              {article.title}
            </PageHeader>
            <Media>
              {img}
              <div className={styles.articleText}>
                {article.body.map((body, index) => (<ArticleBody key={index} content={body.data}/>))}</div>
            </Media>
          </Row>
        </Grid>

      )
    }
  }

  return <div className={styles.rootBackground}>{element}</div>

}
export default Article
