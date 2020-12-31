import { makeStyles } from '@material-ui/core/styles';
import mediaQuery from '../../responsive';

const drawerWidth = 320;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '64px'
  },
  appBarShift: {
    // width: `calc(100% - ${drawerWidth}px)`,
    width: '100%',
    // marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    // marginRight: theme.spacing(2),
    marginRight: 0,
  },
  title: {
    fontSize: '1rem',
    fontWeight: '500',
    lineHeight: 1.6,
    [mediaQuery.size('sm')]: {
      fontSize: '1.25rem'
    }
  },
  navBtns: {
    display: 'flex',
    alignItems: 'center',
    '& form': {
      display: 'flex',
      alignItems: 'center'
    },
    '& button': {
      marginRight: '0.5rem',
      minWidth: '48px'
    },
    [mediaQuery.size('sm')]: {
      '& button': {
        marginRight: '1.5rem',
        minWidth: '64px'
      }
    }
  },
  label: {
    '& span': {
      marginRight: '0'
    },
    '& .labelText': {
      display: 'none'
    },
    [mediaQuery.size('sm')]: {
      '& span': {
        marginRight: '8px'
      },
      '& .labelText': {
        display: 'inline'
      },
    }
  }
}));

export default useStyles;