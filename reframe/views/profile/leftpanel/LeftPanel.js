import React from 'react';

import AvatarUnknown from './AvatarUnknown.png';
import Bio from './Bio';
import Orgs from './Orgs';
import VCard from './VCard';
import VCardDetails from './VCardDetails';
import './LeftPanel.css';

import Avatar from '../Avatar';

const LeftPanel = props => {
  let stars = 0;
  for (const repo in props.contribs && props.contribs.repos) {
    const contrib = props.contribs.repos[repo];
    stars += contrib.percentage * contrib.stargazers_count / 100;
  }

  return (
    <div className="col-3 p-0 pr-4">
      <Avatar url={props.user.avatar_url || AvatarUnknown} classes="avatar-user" />
      <VCard login={props.user.login}
             name={!props.user.ghuser_created_at && 'Your name here' || props.user.name}
             url={props.user.html_url} stars={stars} />
      <Bio text={!props.user.ghuser_created_at && "I love coding and I'm about to create my profile on ghuser.io :)" || props.user.bio} />
      <VCardDetails location={props.user.location} email={props.user.email}
                    blog={!props.user.ghuser_created_at && 'https://ghuser.io' || props.user.blog} />
      <Orgs userOrgs={props.user.organizations || []}
            contribOrgs={props.contribs && props.contribs.organizations || []}
            allOrgs={props.orgs}/>
    </div>
  );
};

export default LeftPanel;
