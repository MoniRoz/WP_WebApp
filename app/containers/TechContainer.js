import {connect} from 'react-redux';
import ArticleList from '../components/ArticleList';
import {loadArticles} from '../actions/LoadArticles';
import {getArticleBody} from '../actions/GetArticleBody';

const mapStateToProps = state => {
  let store = state.techReducer
  return {
    fetching: store.fetching,
    page: store.page,
    articles: store.tech,
    title: "TECHNOLOGIE",
    borderColor: "#e91e63",
    service: "Tech"
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onButtonLoadMoreClick: (offset, service, page) => {
      dispatch(loadArticles(offset, service, page))
    },
    onArticleLinkClick: (url) => {
      dispatch(getArticleBody(url))
    }
  }
}

const TechContainer = connect(mapStateToProps, mapDispatchToProps)(ArticleList)

export default TechContainer
