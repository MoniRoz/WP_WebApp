import React from 'react'

const ArticleBody = ({data, t}) => {
  let element = null;
  if (t == 'Video') {} else {
    element = <div dangerouslySetInnerHTML={{
      __html: data
    }}></div>
  }
  return element
}

export default ArticleBody
