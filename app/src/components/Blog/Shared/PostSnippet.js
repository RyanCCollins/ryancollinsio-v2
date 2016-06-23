import React, { PropTypes } from 'react';
import ReactMarkdown from 'react-markdown';

class PostSnippet extends React.Component {
  constructor(props) {
    super(props);
    const {
      content
    } = this.props;
    const newContent = this.stripper(content);
    this.state = {
      content: newContent
    };
  }
  stripper(content) {
    if (content !== undefined && content.length > 220) {
      return content.substr(0, 220);
    }
    return content;
  }
  render() {
    return (
      <ReactMarkdown source={this.state.content} />
    );
  }
}

PostSnippet.propTypes = {
  content: PropTypes.string.isRequired
};

export default PostSnippet;
