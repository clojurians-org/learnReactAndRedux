import {connect} from 'react-redux';
import * as actions from '../actions';
import inputNameComponent from '../components/inputName';

const mapStateToProps = () => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: (theInputValue) => {
      dispatch(actions.commonHello(theInputValue));
    }
  }
}

const inputNameContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(inputNameComponent);

export default inputNameContainer;