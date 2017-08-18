import {connect} from 'react-redux';
import ArticleList from '../components/ArticleList';
import {loadMoreArticles} from '../actions/LoadMoreArticles';

const mapStateToProps = state => {
  let store = state.articles
  return {
    fetching: store.fetching_articles,
    articles: (store.fetching_articles && !store.data)
      ? {}
      : store.data
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onButtonLoadMoreClick: offset => {
      dispatch(loadMoreArticles(offset))
    }
  }
}

const ArticleListContainer = connect(mapStateToProps, mapDispatchToProps)(ArticleList)

export default ArticleListContainer
