import {connect} from 'react-redux';
import getRedditComponent from '../components/getReddit';

const mapStateToProps = () => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    getJson: () => {
      dispatch({type: 'fetch_posts'});
    }
  }
}

const getRedditContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(getRedditComponent);

export default getRedditContainer;