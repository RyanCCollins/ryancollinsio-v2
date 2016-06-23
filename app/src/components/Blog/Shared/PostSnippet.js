import React, { PropTypes } from 'react';
import marked from 'marked';

class PostSnippet extends React.Component {
  constructor(props) {
    super(props);
    const {
      content
    } = this.props;
    marked.setOptions({
      gfm: true,
      tables: false,
      breaks: false,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartyPants: false
    });
    const newContent = this.stripper(content);
    const markdown = marked.parse(newContent);
    this.state = {
      content: markdown
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
      <div dangerouslySetInnerHTML={ this.state.content } />
    );
  }
}

PostSnippet.propTypes = {
  content: PropTypes.string.isRequired
};

export default PostSnippet;
