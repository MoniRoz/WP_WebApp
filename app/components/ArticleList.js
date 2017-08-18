import React from 'react'
import Article from './Article'
import {Button} from 'react-bootstrap';

const ArticleList = ({fetching, articles, onButtonLoadMoreClick}) => {
  let text = "Load more"
  if (fetching && articles.length > 0) {
    text = "Loading..."
  }
  if (!(articles.length > 0))
    return <ul>Loading..</ul>

  return (
    <div >
      <ul>
        {articles.map((article, index) => (<Article key={index} {...article}/>))}
      </ul>
      <Button onClick={() => onButtonLoadMoreClick(articles.length)}>
        {text}
      </Button>
    </div>
  )

};

export default ArticleList
