import React from 'react';
import * as Autolinker from 'autolinker';
import * as Parser from 'html-react-parser';

import './VCardDetails.css';

const VCardDetails = props => {
  const details = [];
  if (props.location) {
    details.push(
      <div className="vcard-detail pt-1" key="location">
        <i className="vcard-icon fas fa-map-marker-alt"></i>&nbsp;
        {props.location}
      </div>
    );
  };

  if (props.email) {
    details.push(
      <div className="vcard-detail pt-1" key="email">
        <i className="vcard-icon far fa-envelope"></i> {Parser(Autolinker.link(props.email))}
      </div>
    );
  };

  if (props.blog) {
    details.push(
      <div className="vcard-detail pt-1" key="blog">
        <i className="vcard-icon fas fa-link"></i> {Parser(Autolinker.link(props.blog))}
      </div>
    );
  };

  if (props.settings) {
    if (props.settings.twitter_username) {
      details.push(
        <div className="vcard-detail pt-1" key="twitter">
          <i className="vcard-icon fab fa-twitter"></i>
          <a href={`https://twitter.com/${props.settings.twitter_username}`} target="_blank">@{props.settings.twitter_username}</a>
        </div>
      );
    }
  };

  return (
    <div className={details.length > 0 && 'border-top border-gray-light py-3' || ''}>{details}</div>
  );
};

export default VCardDetails;
