import {connect} from 'react-redux';
import sayHelloComponent from '../components/sayHello';

const mapStateToProps = (state) => {
  return {
    name: state.helloReducer.name
  }
}

const mapDispatchToProps = () => {
  return {}
}

const sayHelloContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(sayHelloComponent);

export default sayHelloContainer;