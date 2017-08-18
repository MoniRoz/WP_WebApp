import {connect} from 'react-redux';
import ArticleList from '../components/ArticleList';
import {loadMoreArticles} from '../actions/LoadMoreArticles';
import {getArticleBody} from '../actions/GetArticleBody';

const mapStateToProps = state => {
  let store = state.articlesHeaders
  return {
    fetching: store.fetching_articles,
    articles: (store.fetching_articles && !store.headers)
      ? {}
      : store.headers
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onButtonLoadMoreClick: offset => {
      dispatch(loadMoreArticles(offset))
    },
    onArticleLinkClick: url => {
      dispatch(getArticleBody(url))
    }
  }
}

const ArticleListContainer = connect(mapStateToProps, mapDispatchToProps)(ArticleList)

export default ArticleListContainer
