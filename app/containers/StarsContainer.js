import {connect} from 'react-redux';
import ArticleList from '../components/ArticleList';
import {loadMoreArticles} from '../actions/LoadMoreArticles';
import {getArticleBody} from '../actions/GetArticleBody';

const mapStateToProps = state => {
  let store = state.starsReducer
  return {fetching: store.fetching, page: store.page, articles: store.stars, title: "GWIAZDY", borderColor: "#66bb6a"}
}

const mapDispatchToProps = dispatch => {
  return {
    onArticleLinkClick: (url) => {
      dispatch(getArticleBody(url))
    }
  }
}

const StarsContainer = connect(mapStateToProps, mapDispatchToProps)(ArticleList)

export default StarsContainer