import React from 'react';
import chroma from 'chroma-js';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  colorBox: {
    width: '20%',
    height: props => props.showLink ? '25%' : '50%',
    display: 'block',
    position: 'relative',
    cursor: 'pointer',
    '&:hover button': {
      opacity: 1,
      transition: '0.5s'
    }
  },
  boxContent: {
    position: 'absolute',
    padding: '10px',
    width: '100%',
    left: '0px',
    bottom: '0px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    fontSize: '12px',
  },
  copyText: {
    color: props => chroma(props.color).luminance() >= 0.7 ? 'black' : 'white'
  },
  colorName: {
    color: props => chroma(props.color).luminance() <= 0.08 ? 'white' : 'black'
  },
  seeMore: {
    color: props => chroma(props.color).luminance() >= 0.6 ? 'rgba(0,0,0,0.7)' : 'white',
    background: 'rgba(255, 255, 255, 0.3)',
    position: 'absolute',
    border: 'none',
    right: '0px',
    bottom: '0px',
    width: '60px',
    height: '30px',
    textAlign: 'center',
    lineHeight: '30px',
    textTransform: 'uppercase'
  },
  copyButton: {
    color: props => chroma(props.color).luminance() >= 0.6 ? 'rgba(0,0,0,0.7)' : 'white',
    width: '100px',
    height: '30px',
    display: 'inline-block',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate( -50%, -50%)',
    textAlign: 'center',
    outline: 'none',
    background: 'rgba(255, 255, 255, 0.3)',
    fontSize: '1rem',
    lineHeight: '30px',
    textTransform: 'uppercase',
    border: 'none',
    opacity: '0',
    cursor: 'pointer'
  },
  copyOverlay: {
    position: 'absolute',
    opacity: '0',
    zIndex: '0',
    width: '100%',
    height: '100%',
    transition: 'transform 0.5s ease-in-out'
  },
  showOverlay: {
    opacity: '1',
    transform: 'scale(50)',
    zIndex: '10'
  },
  copyMessage: {
    position: 'fixed',
    left: '0',
    right: '0',
    top: '0',
    bottom: '0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '4rem',
    transform: 'scale(0.1)',
    opacity: '0',
    color: 'white',
    "& h1": {
      fontWeight: '400',
      textShadow: '1px 2px black',
      background: 'rgba(255, 255, 255, 0.2)',
      width: '100%',
      textAlign: 'center',
      marginBottom: '0',
      padding: '1rem',
      textTransform: 'uppercase'
    },
    "& p": {
      fontSize: '2rem',
      fontWeight: '100',
      color: props => chroma(props.color).luminance() >= 0.7 ? 'rgba(0,0,0, 0.7);' : 'white'
    }
  },
  showMessage: {
    opacity: '1',
    transform: 'scale(1)',
    zIndex: '25',
    transition: 'all 0.4s ease-in-out',
    transitionDelay: '0.3s'
  }
}

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