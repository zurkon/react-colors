import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  picker: {
    width: '100% !important',
    margin: '2rem auto 0'
  },
  addColor: {
    width: '100%',
    // padding: '1rem',
    marginTop: '1rem',
    fontSize: '1rem'
  },
  colorForm: {
    width: '100%',
    marginTop: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  colorInput: {
    width: '100%'
  }
});

export default useStyles;