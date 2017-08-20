import {connect} from 'react-redux';
import ArticleList from '../components/ArticleList';
import {loadArticles} from '../actions/LoadArticles';
import {getArticleBody} from '../actions/GetArticleBody';

const mapStateToProps = state => {
  let store = state.starsReducer
  return {
    fetching: store.fetching,
    page: store.page,
    articles: store.stars,
    title: "GWIAZDY",
    borderColor: "#66bb6a",
    service: "Gwiazdy"
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onButtonLoadMoreClick: (offset, service, page) => {
      dispatch(loadArticles(offset, service, page))
    },
    onArticleLinkClick: (url,service) => {
      dispatch(getArticleBody(url,service))
    }
  }
}

const StarsContainer = connect(mapStateToProps, mapDispatchToProps)(ArticleList)

export default StarsContainer
