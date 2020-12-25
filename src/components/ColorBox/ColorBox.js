import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import styles from './ColorBox.styles';

class ColorBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false
    }
  }

  changeCopyState = () => {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  }

  render() {
    const { color, name, moreUrl, showLink, classes } = this.props;
    const { copied } = this.state;
    return (
      <CopyToClipboard text={color} onCopy={this.changeCopyState}>
        <div style={{ background: color }} className={classes.colorBox}>
          <div style={{ background: color }} className={`${classes.copyOverlay} ${copied && classes.showOverlay}`}></div>
          <div className={`${classes.copyMessage} ${copied && classes.showMessage}`}>
            <h1>copied!</h1>
            <p className={classes.copyText}>{color.toUpperCase()}</p>
          </div>
          <div>
            <div className={classes.boxContent}>
              <span className={classes.colorName}>{name}</span>
            </div>
            <button className={classes.copyButton}>Copy</button>
          </div>
          {/* stopPropagation method prevent the CopyToClipboard event being fired */}
          {showLink && (
            <Link to={moreUrl} onClick={e => e.stopPropagation()}>
              <span className={classes.seeMore}>More</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);