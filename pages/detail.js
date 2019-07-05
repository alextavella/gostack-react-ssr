import React, { Component } from 'react';
import axios from 'axios';

import withAnalytics from '~/hocs/withAnalytics';

class Detail extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.user.login}</h1>
        <img src={this.props.user.avatar_url} width="320" />
      </div>
    );
  }
}

Detail.getInitialProps = async ({ query }) => {
  const response = await axios.get(
    `https://api.github.com/users/${query.user}`
  )

  return { user: response.data };
}

export default withAnalytics()(Detail);