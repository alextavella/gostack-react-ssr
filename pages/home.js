import React, { Component } from 'react';
import styled from 'styled-components';

import Link from 'next/link';
import Head from 'next/head';

import withAnalytics from '~/hocs/withAnalytics';

const Title = styled.h1`
  color: #069;
  font-size: 40px;
`;

class Home extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>Home</title>
        </Head>
        <Title>Hello World</Title>
        <img src="/static/react.png" width="320" />
        <Link href="/users">
          <a>Users</a>
        </Link>
      </div>
    )
  }
}

export default withAnalytics()(Home);
