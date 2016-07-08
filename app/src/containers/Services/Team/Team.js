import React, { PropTypes } from 'react';
import { Divider } from 'components';
import { connect } from 'react-redux';
import {
  Row,
  Column
} from 'react-foundation';
import './Team.scss';

const TeamMember = ({
  member
}) => (
  <div className="team-member-item">
    <div className="team-member-item__photo">
      <img src={member.imageUrl} />
    </div>
    <div className="team-member-item__info">

    </div>
  </div>
);

TeamMember.propTypes = {
  member: PropTypes.object.isRequired
};

const Team = ({
  teamMembers
}) => (
  <div className="team-section">
    <div className="section-title">Available Mentors</div>
    <Divider />
    <Row>
      {teamMembers.map((member, i) =>
        <Column small={12} medium={4} large={3}>
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
