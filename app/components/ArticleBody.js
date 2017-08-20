import React from 'react'

const ArticleBody = ({data}) => {
  let element = null;
  element = <div dangerouslySetInnerHTML={{
    __html: data
  }}></div>

  return element
}

export default ArticleBody
