'use strict';

import React, { Component } from 'react';
import styles from '<%= style.webpackPath %>';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

class <%= component.className %> extends Component {

  render() {
    return (
      <div className={styles.root}>
        Please edit <%= component.path %><%= component.fileName %> to update this component!
      </div>
    );
  }
  
}

export default withStyles(<%= component.className %>, styles);
