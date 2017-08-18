import React from 'react'
import Article from './Article'

const ArticleList = ({fetching,articles}) => {
  if(fetching)
    return <ul>Loading..</ul>
  return <ul>
    {articles.map((article, index) => (<Article key={index} {...article}/>))}
  </ul>;
};

export default ArticleList
