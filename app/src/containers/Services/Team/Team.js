import React, { PropTypes } from 'react';
import { Divider } from 'components';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import {
  Row,
  Column
} from 'react-foundation';
import './Team.scss';
import { TiLinkOutline, TiSocialGithub } from 'react-icons/lib/ti'

const TeamMemberLink = ({
  website
}) => (
  <span className="team-member__social">
    <Link to={website}>
      <TiLinkOutline className="icon-website" />
    </Link>
  </span>
);

const TeamMemberGithub = ({
  github
}) => (
  <span className="team-member__social">
    <Link to={github}>
      <TiSocialGithub className="icon-github" />
    </Link>
  </span>
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
        <TeamMemberGithub github={member.github} />
        <TeamMemberLink website={member.website} />
      </div>
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
    <div className="section-title text-white">Mentors</div>
    <Divider />
    <Row>
      {teamMembers.map((member, i) =>
        <Column small={12} medium={6} large={4}>
          <TeamMember key={i} member={member} />
        </Column>
      )}
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
