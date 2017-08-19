import React from 'react'
import ArticleBody from './ArticleBody'

const Article = ({match, fetching, articles}) => {
  var element;
  if (fetching)
    element = (
      <ul>Loading..</ul>
    )
  for (var article of articles) {
    if (article.index == match.params.index) {
      element = (
        <div>
          {article.title}
          {article.body.map((body, index) => (<ArticleBody key={index} content={body.data}/>))}
        </div>
      )
    }
  }

  return <div>{element}</div>

}
export default Article
