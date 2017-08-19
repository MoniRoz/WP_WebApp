import React from 'react'

const ArticleBody = ({content}) => {
  return (
    <div dangerouslySetInnerHTML={{
      __html: content
    }}></div>
  )
}

export default ArticleBody
