import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '20%',
    height: '25%',
    display: 'block',
    position: 'relative',
    cursor: 'pointer',
    '&:hover svg': {
      color: 'white',
      transform: 'scale(1.5)'
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
    display: 'flex',
    justifyContent: 'space-between'
  },
  deleteIcon: {
    color: 'rgba(0,0,0,0.5)',
    transition: 'all 0.3s ease-in-out'
  }
});

export default useStyles;