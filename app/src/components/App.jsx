import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

const mapStateToProps = (state) => ({
  projects: state.projects,
  resumeData: state.resumeData,
  messages: state.messages,
  errors: state.errors,
  contact: state.contact,
  posts: state.posts,
  footerLinks: state.footerLinks
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    actionCreators,
    dispatch
  );
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

export default App;
