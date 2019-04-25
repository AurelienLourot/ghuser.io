import React from 'react';

import {urls} from '../ghuser';
import Content from './Content';
import NavBar from './NavBar';
import PageContent from './PageContent';
import './All.css';
import './Mobile.css';

class Creating extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      // temporarily disabled for issue143: window.location.replace(`/${this.props.username}`);
    }, 5000);
  }

  render() {
    return (
      <PageContent>
        <NavBar/>
        <Content>
          <div className="container container-lg mt-2">
            { /* temporarily disabled for issue143
            <i className="fas fa-spinner fa-pulse"></i> {this.props.username}'s profile is being
            created. You'll be redirected to&nbsp;
            <a href={`/${this.props.username}`}>
              {urls.landing}/{this.props.username}
            </a> in a few seconds... */ }
            Sorry, automation has been disabled. Thus the creation of your profile takes a bit more
            time than expected. Your username has just landed in a queue that we process in a
            semi-automatic fashion. Come back in 48 hours and your profile will be here. See&nbsp;
            <a href="https://github.com/ghuser-io/ghuser.io/issues/143" target="_blank" className="external">
              #143
            </a>.
          </div>
        </Content>
      </PageContent>
    );
  }
}

export default Creating;
