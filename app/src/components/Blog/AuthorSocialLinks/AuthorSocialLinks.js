import React, { PropTypes } from 'react';
import {
  FaGithub,
  FaTwitter
} from 'react-icons/lib/fa';
import './AuthorSocialLinks.scss';

const AuthorSocialLinks = ({
  author
}) => (
  <div className="author-bio__social-links--wrapper">
    {author.website &&
      <a
        className="muted-link"
        href={author.website}
      >
        {author.website}
      </a>
    }
    <span className="author-social-links">
      {author.github &&
        <a
          className="author-social-link"
          href={author.github.url}
        >
          <FaGithub className="text-medium dark-grey" />
        </a>
      }
      {author.twitter &&
        <a
          className="author-social-link"
          href={author.twitter.url}
        >
          <FaTwitter className="text-medium dark-grey" />
        </a>
      }
    </span>
  </div>
);

AuthorSocialLinks.propTypes = {
  author: PropTypes.object.isRequired
};

export default AuthorSocialLinks;
