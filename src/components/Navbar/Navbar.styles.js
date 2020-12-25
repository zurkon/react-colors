const styles = {
  navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '6vh'
  },
  logo: {
    marginRight: '15px',
    padding: '0 13px',
    background: '#eceff1',
    fontFamily: 'Roboto',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    '& a': {
      textDecoration: 'none',
      color: 'black'
    }
  },
  sliderContainer: {
    display: 'flex',
    alignItems: 'center',
    '& span': {
      lineHeight: '1.5'
    }
  },
  slider: {
    width: '300px',
    margin: '0 10px',
    display: 'flex',
    alignItems: 'center'
  },
  selectContainer: {
    marginLeft: 'auto',
    marginRight: '1rem'
  }
};

export default styles;