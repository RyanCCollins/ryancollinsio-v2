import React, { PropTypes } from 'react';
import { Divider } from 'components';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import {
  Row,
  Column,
  Button
} from 'react-foundation';
import './Team.scss';
import { TiLinkOutline, TiSocialGithub } from 'react-icons/lib/ti'

const TeamMemberLink = ({
  website
}) => (
  <span className="team-member__social">
    <a href={website}>
      <TiLinkOutline className="icon-website" />
    </a>
  </span>
);

const TeamMemberGithub = ({
  github
}) => (
  <span className="team-member__social">
    <a href={github}>
      <TiSocialGithub className="icon-github" />
    </a>
  </span>
);

const TeamMemberTwitter = ({
  twitterHandle
}) => (
  <a href={`https://twitter.com/${twitterHandle}`}>
    <p className="team-member__twitter-handle">@{twitterHandle.toLowerCase()}</p>
  </a>
);

const TeamMember = ({
  member
}) => (
  <div className="team-member-item">
    <div className="team-member-item__photo">
      <img
        className="team-member-item__image"
        src={member.imageUrl}
        alt={`A person named ${member.name}`}
      />
    </div>
    <div className="team-member-item__info">
      <div className="team-member-item__name">{member.name}</div>
      <div className="team-member__social-wrapper">
        {member.github && <TeamMemberGithub github={member.github} />}
        {member.website && <TeamMemberLink website={member.website} />}
      </div>
      {member.twitter && <TeamMemberTwitter twitterHandle={member.twitter} />}
    </div>
    <p className="team-member-item__bio">{member.bio}</p>
  </div>
);

TeamMember.propTypes = {
  member: PropTypes.object.isRequired
};

const Team = ({
  teamMembers
}) => (
  <div className="team-section">
    <div className="section-title text-white team-section-headline">Mentors</div>
    <Divider />
    <Row className="team-member__flex-wrapper">
      {teamMembers.map((member, i) =>
        <Column
          small={12}
          medium={6}
          large={4}
          isColumn
          centerOnSmall
          className="team-member-item__wrapper"
        >
          <TeamMember key={i} member={member} />
        </Column>
      )}
    </Row>
    <Row>
      <Column
        large={8}
        medium={10}
        small={12}
        isColumn
        centerOnSmall
        className="services__button-wrapper__with-text"
      >
        <Button size={'large'} className="button__contact button__centered-margin">
          <a href="https://github.com/teamhacksmiths">Take me there!</a>
        </Button>
        <h4
          id="servicesButtonText"
          className="raleway-header text-white centered"
        >
          Click the button to view our open source work.
        </h4>
      </Column>
    </Row>
  </div>
);

Team.propTypes = {
  teamMembers: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  teamMembers: state.teamMembers
});

export default connect(mapStateToProps)(Team);
