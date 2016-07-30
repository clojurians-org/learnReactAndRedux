import { connect } from 'react-redux';
import showRedditComponent from '../components/showReddit';

const mapStateToProps = (state) => ({
	jsonData: state.jsonReducer.jsonData
})

const mapDispatchToProps = () => ({});

const showRedditContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(showRedditComponent);

export default showRedditContainer;