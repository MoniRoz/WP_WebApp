import {connect} from 'react-redux';
import ArticleList from '../components/ArticleList';
import {loadMoreArticles} from '../actions/LoadMoreArticles';
import {getArticleBody} from '../actions/GetArticleBody';

const mapStateToProps = state => {
  let store = state.newsReducer
  return {
    fetching: store.fetching,
    page: store.page,
    articles: store.news,
    title: "WIADOMOŚCI",
    borderColor: "#7f8fa9",
    service: "Wiadomosci"
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onButtonLoadMoreClick: (offset, service) => {
      dispatch(loadMoreArticles(offset, service))
    },
    onArticleLinkClick: (url) => {
      dispatch(getArticleBody(url))
    }
  }
}

const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(ArticleList)

export default NewsContainer
