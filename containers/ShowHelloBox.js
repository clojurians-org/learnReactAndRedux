import { connect } from 'react-redux';
import ShowHello from '../components/ShowHello';

const mapStateToProps = (state) => {
  return {
    hellos: state.hello
  }
}

const ShowHelloBox = connect(
  mapStateToProps
)(ShowHello)

export default ShowHelloBox