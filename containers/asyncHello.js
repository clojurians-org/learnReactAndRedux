import { connect } from 'react-redux';
import { asyncHello } from '../actions';
import inputNameComponent from '../components/inputName';

const mapStateToProps = (state) =>{
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: (theInputValue) => {
      dispatch(asyncHello(theInputValue));
    }
  }
}

const asyncSayHelloContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(inputNameComponent);

export default asyncSayHelloContainer;