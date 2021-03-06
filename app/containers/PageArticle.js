import {connect} from 'react-redux';
import Article from '../components/Article';

const mapStateToProps = state => {
  let store = state.readArticles
  return {
    fetching: store.fetching,
    error: store.error,
    articles: store.articles
  }
}

const PageArticle = connect(mapStateToProps)(Article)

export default PageArticle
