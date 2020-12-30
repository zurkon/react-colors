const styles = {
  root: {
    backgroundColor: 'white',
    borderRadius: 5,
    marginTop: '5%',
    width: '30%',
    padding: '0.5rem',
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    '&:hover #delete': {
      opacity: 1
    }
  },
  colors: {
    backgroundColor: '#dae1e4',
    height: '120px',
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    borderRadius: '5px',
    overflow: 'hidden',
    alignContent: 'start'
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
  },
  delete: {
    background: '#eb3d30',
    width: '32px',
    height: '32px',
    position: 'absolute',
    right: '0',
    top: '0',
    padding: '5px',
    boxShadow: '-4px 4px 8px rgba(0, 0, 0, 0.3)',
    opacity: 0,
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
  },
  deleteIcon: {
    color: '#e0e0e0',
    width: '100%',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    '&:hover': {
      transform: 'scale(1.3)',
      color: 'white'
    }
  }
};

export default styles;