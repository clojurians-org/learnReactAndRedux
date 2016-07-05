import { connect } from 'react-redux';
import { commonHello } from '../actions';
import inputNameComponent from '../components/inputName';

const mapStateToProps = (state) =>{
  return {}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleClick: (theInputValue) => {
      dispatch(commonHello(theInputValue));
		}
	}
}

const inputNameContainer = connect(
  mapStateToProps,
	mapDispatchToProps
)(inputNameComponent);

export default inputNameContainer;