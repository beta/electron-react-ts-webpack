// Copyright (c) 2019 Beta Kuang
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as React from 'react'

export interface AppProps {
  name?: string
}

export default class App extends React.Component<AppProps, {}> {
  render() {
    return (
      <h1>Hello, { this.props.name || 'world'}.</h1>
    )
  }
}
