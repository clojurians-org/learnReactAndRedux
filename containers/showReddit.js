import { connect } from 'react-redux';
import showRedditComponent from '../components/showReddit';

const mapStateToProps = (state) => {
	return {
		jsonData: state.jsonReducer.jsonData
	}
}

const mapDispatchToProps = () => {
  	return {}
}

const showRedditContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(showRedditComponent);

export default showRedditContainer;