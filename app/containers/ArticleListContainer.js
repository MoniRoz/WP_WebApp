import {connect} from 'react-redux';
import {fetchArticles} from '../actions/index'
import ArticleList from '../components/ArticleList'

const mapStateToProps = state => {
  let fetching = state.articles.fetching
  return {
    fetching,
    articles: fetching
      ? {}
      : state.articles.data
  }
}

const ArticleListContainer = connect(mapStateToProps)(ArticleList)

export default ArticleListContainer
