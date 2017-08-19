import {connect} from 'react-redux';
import Article from '../components/Article';

const mapStateToProps = state => {
  let store = state.readArticle
  return {
    fetching: store.fetching_articles,
    articles: (store.fetching_articles && !store.headers)
      ? {}
      : store.headers
  }
}
