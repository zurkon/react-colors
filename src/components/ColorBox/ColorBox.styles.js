import chroma from 'chroma-js';
import mediaQuery from '../../responsive';

const styles = {
  colorBox: {
    // width: '20%',
    width: '100%',
    // height: props => props.showLink ? '10%' : '10%',
    height: '10%',
    display: 'block',
    position: 'relative',
    cursor: 'pointer',
    '&:hover button': {
      opacity: 1,
      transition: '0.5s'
    },
    // '@media (min-width: 576px)': {
    [mediaQuery.size('sm')]: {
      width: '50%',
      height: '25%',
    },
    [mediaQuery.size('md')]: {
      width: '25%',
      height: props => props.showLink ? '25%' : '50%',
    },
    [mediaQuery.size('lg')]: {
      width: '20%'
    },
  },
  boxContent: {
    position: 'absolute',
    padding: '10px',
    width: '100%',
    left: '0px',
    bottom: '0px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    fontSize: '12px'
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
    fontSize: '2rem',
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
    },
    [mediaQuery.size('sm')]: {
      fontSize: '4rem'
    }
  },
  showMessage: {
    opacity: '1',
    transform: 'scale(1)',
    zIndex: '25',
    transition: 'all 0.4s ease-in-out',
    transitionDelay: '0.3s'
  }
};

export default styles;