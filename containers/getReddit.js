import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import getRedditComponent from '../components/getReddit';

const mapStateToProps = (state) =>{
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
  	getJson: () => {
  		dispatch(fetchPosts())
  	}
  }
}

const getRedditContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(getRedditComponent);

export default getRedditContainer;