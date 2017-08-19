import React from 'react'
import ArticleLink from './ArticleLink'
import {Button} from 'react-bootstrap';

const ArticleList = ({fetching, articles, onButtonLoadMoreClick, onArticleLinkClick}) => {
  let text = "Load more"
  if (fetching && articles.length > 0) {
    text = "Loading..."
  }
  if (fetching && !(articles.length > 0)) 
    return <ul>Loading..</ul>

  return (
    <div >
      <ul>
        {articles.map((article, index) => (<ArticleLink key={index} id={index} title={article.title} onClick={() => onArticleLinkClick(article.url, index)}/>))}
      </ul>
      <Button onClick={() => onButtonLoadMoreClick(articles.length)}>
        {text}
      </Button>
    </div>
  )

};

export default ArticleList
