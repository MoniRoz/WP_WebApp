import React from 'react'
import Article from './Article'

const ArticleList = ({
  data: {
    loading,
    error,
    articles,
    OnArticleClick
  }
}) => {
  if (loading) {
    return <p>Loading ...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  return <ul className="Item-list">
    {articles.map((article, index) => (<Article key={index} {...article} onClick={() => OnArticleClick()}/>))}
  </ul>;
};

export default ArticleList
