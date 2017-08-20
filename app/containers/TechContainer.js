import {connect} from 'react-redux';
import ArticleList from '../components/ArticleList';
import {loadMoreArticles} from '../actions/LoadMoreArticles';
import {getArticleBody} from '../actions/GetArticleBody';

const mapStateToProps = state => {
  let store = state.techReducer
  return {fetching: store.fetching, page: store.page, articles: store.tech, title: "TECHNOLOGIE",borderColor: "#e91e63"}
}

const mapDispatchToProps = dispatch => {
  return {
    onArticleLinkClick: (url) => {
      dispatch(getArticleBody(url))
    }
  }
}

const TechContainer = connect(mapStateToProps, mapDispatchToProps)(ArticleList)

export default TechContainer
