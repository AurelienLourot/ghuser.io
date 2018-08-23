import React from 'react';

import LogoWithPunchline from '../../LogoWithPunchline';

const CreateYourProfile = props => (
  <div>
    <LogoWithPunchline />
    <p>
      Good that you are here :)<br />
      We're building profiles like this one:&nbsp;
      <a href="/AurelienLourot">https://ghuser.io/AurelienLourot</a><br />
      More details on&nbsp;
      <a href="https://github.com/AurelienLourot/ghuser.io" target="_blank" className="external">
        https://github.com/AurelienLourot/ghuser.io
      </a>
    </p>
    {
      // issue49 is a hidden work in progress, see #49:
      props.issue49 &&
      <p>
        <a className="btn btn-primary"
           href="https://github.com/login/oauth/authorize?client_id=client_id&redirect_uri=https://ghuser.io/create_profile&allow_signup=false"
           role="button">Get your profile</a>
      </p>
      ||
      <p>
        <a href="https://github.com/AurelienLourot/ghuser.io/issues/new?template=profile-request.md"
           target="_blank" className="external">Create a profile request</a> and we'll set up your
           profile right away!
      </p>
    }
  </div>
);

export default CreateYourProfile;
