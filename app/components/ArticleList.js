import React from 'react'
import Article from './Article'
import {Button} from 'react-bootstrap';

const ArticleList = ({fetching, articles, onButtonLoadMoreClick, onArticleLinkClick}) => {
  let text = "Load more"
  if (fetching && articles.length > 0) {
    text = "Loading..."
  }
  if (!(articles.length > 0))
    return <ul>Loading..</ul>

  return (
    <div >
      <ul>
        {articles.map((article) => (<Article key={article.id} title={article.title} onClick={() => onArticleLinkClick(article.url)}/>))}
      </ul>
      <Button onClick={() => onButtonLoadMoreClick(articles.length)}>
        {text}
      </Button>
    </div>
  )

};

export default ArticleList
