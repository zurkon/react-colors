import { makeStyles } from '@material-ui/core/styles';
import mediaQuery from '../../responsive';

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '10%',
    display: 'block',
    position: 'relative',
    cursor: 'pointer',
    '&:hover svg': {
      color: 'white',
      transform: 'scale(1.5)'
    },
    [mediaQuery.size('sm')]: {
      width: '50%'
    },
    [mediaQuery.size('md')]: {
      width: '25%',
      height: '20%'
    },
    [mediaQuery.size('lg')]: {
      width: '20%',
      height: '25%'
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
    justifyContent: 'space-between',
    alignItems: 'center',
    "& span": {
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  },
  deleteIcon: {
    color: 'rgba(0,0,0,0.5)',
    transition: 'all 0.3s ease-in-out'
  }
});

export default useStyles;