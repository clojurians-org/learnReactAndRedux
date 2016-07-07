import {connect} from 'react-redux';
import inputNameComponent from '../components/inputName';

const mapStateToProps = () => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: (name) => {
      dispatch({type: 'async_hello', name});
    }
  }
}

const asyncSayHelloContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(inputNameComponent);

export default asyncSayHelloContainer;