const styles = {
  root: {
    backgroundColor: 'blue',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  container: {
    width: '60%',
    maxWidth: '37rem',
    height: '100%'
  },
  nav: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
    "& a": {
      color: 'white',
      textDecoration: 'none',
      padding: '8px 10px',
      border: '1px solid white',
      borderRadius: '5px',
      fontWeight: 'bold',
      fontSize: '0.9rem',
      "&:hover": {
        background: 'white',
        color: 'black'
      }
    }
  },
  palettes: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '5%',
    paddingBottom: '2rem',
    // display: 'grid',
    gridTemplateColumns: 'repeat(3, 30%)',
    // gridAutoRows: '11.5rem',
    // gridGap: '5%'
  }
};

export default styles;