import mediaQuery from '../../responsive';

const styles = {
  palette: {
    height: '100vh',
    overflow: 'hidden'
  },
  colors: {
    height: '90%',
    display: 'flex',
    flexWrap: 'wrap',
    background: '#dae1e4',
    overflow: 'auto'
  },
  goBack: {
    // width: '20%',
    width: '100%',
    height: '10%',
    display: 'block',
    position: 'relative',
    cursor: 'pointer',
    opacity: 1,
    background: 'black',
    '& a': {
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
      color: 'white',
      textTransform: 'uppercase',
      border: 'none',
      cursor: 'pointer',
      textDecoration: 'none'
    },
    [mediaQuery.size('sm')]: {
      width: '50%',
      height: '25%'
    },
    [mediaQuery.size('md')]: {
      width: '75%',
      height: '50%'
    },
    [mediaQuery.size('lg')]: {
      width: '20%',
      height: '50%'
    }
  }
};

export default styles;