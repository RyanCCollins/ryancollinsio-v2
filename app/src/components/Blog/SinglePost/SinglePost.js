import React, {
  Component,
  PropTypes
} from 'react';
import marked from 'marked';
import './SinglePost.scss';

class SinglePost extends Component {
  constructor(props) {
    super(props);
    marked.setOptions({
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartyPants: false
    });
  }
  render() {
    const {
      post
    } = this.props;
    const content = post.content;
    const html = marked(content || '');
    return (
      <div className="single-post">
        <div dangerouslySetInnerHTML={{__html: html }} />
      </div>
    );
  }
}

SinglePost.propTypes = {
  post: PropTypes.shape({
    content: PropTypes.string.isRequired
  })
};

export default SinglePost;
