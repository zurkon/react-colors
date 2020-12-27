const styles = {
  root: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: '0.5rem',
    position: 'relative',
    overflow: 'hidden',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  colors: {
    backgroundColor: '#dae1e4',
    height: '120px',
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    borderRadius: '5px',
    overflow: 'hidden'
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 0,
    color: 'black',
    paddingTop: '0.5rem',
    fontSize: '0.8rem',
    position: 'relative'
  },
  emoji: {
    marginLeft: '0.5rem',
    fontSize: '1.2rem'
  },
  miniColor: {
    height: '25%',
    width: '20%'
  }
};

export default styles;