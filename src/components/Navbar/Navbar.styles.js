import mediaQuery from '../../responsive';

const styles = {
  navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    // height: '6vh',
    height: '10vh',
    flexWrap: 'wrap',
    [mediaQuery.size('sm')]: {
      height: '6vh'
    }
  },
  logo: {
    padding: '0 13px',
    background: '#eceff1',
    fontFamily: 'Roboto',
    // height: '100%',
    height: '50%',
    display: 'flex',
    alignItems: 'center',
    order: '1',
    '& a': {
      textDecoration: 'none',
      color: 'black'
    },
    [mediaQuery.size('sm')]: {
      height: '100%',
    }
  },
  sliderContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& span': {
      lineHeight: '1.5'
    },
    // marginLeft: '1rem'
    marginLeft: '0',
    order: '3',
    width: '100%',
    [mediaQuery.size('sm')]: {
      marginLeft: '1rem',
      justifyContent: 'flex-start',
      order: '2',
      width: 'auto'
    }
  },
  slider: {
    width: '200px',
    margin: '0 10px',
    display: 'flex',
    alignItems: 'center',
    [mediaQuery.size('md')]: {
      width: '300px'
    }
  },
  selectContainer: {
    marginLeft: 'auto',
    marginRight: '1rem',
    order: '2',
    [mediaQuery.size('sm')]: {
      order: '3'
    }
  }
};

export default styles;