import {connect} from 'react-redux';
import sayHelloComponent from '../components/sayHello';

const mapStateToProps = (state) => ({
  name: state.helloReducer.name
});

const mapDispatchToProps = () => ({});

const sayHelloContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(sayHelloComponent);

export default sayHelloContainer;