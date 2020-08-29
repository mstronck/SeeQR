import React, { Component, MouseEvent } from 'react';
const path = require('path');
// const { dialog } = require('electron').remote;
// const { ipcRenderer } = window.require('electron');

type SplashProps = {
  openSplash: boolean;
  handleFileClick: any;
  handleSkipClick: any;
  //files: string[];
};

export class Splash extends Component<SplashProps> {
  // a dialogue menu with retrieve the file path
  constructor(props: SplashProps) {
    super(props);
  }

  render() {
    const imgPath = '../../frontend/assets/images/logo_color.png';
    console.log(imgPath);
    return (
      <div id="splash-page">
        {/* <img src={imgPath} /> */}
        <div className="splash-prompt">
          <h4>Welcome!</h4>
          <h4>Import database in .sql or .tar?</h4>
        </div>
        <div className="splash-buttons">
          <button onClick={this.props.handleSkipClick}>Skip</button>
          <button onClick={this.props.handleFileClick}>Yes</button>
        </div>
      </div>
    );
  }
}
