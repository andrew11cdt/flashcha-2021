import { fade, makeStyles } from '@material-ui/core/styles';
import { grey, orange } from '@material-ui/core/colors';

export const bgColor = grey[50];
export const primaryColor = grey[700];
export const brandColor = orange[700];
export const inputBorderRadius = 15;
export const iconHeight = '30px';
export const navBarStyle = makeStyles((theme) => ({
    appBar: {
      background: bgColor,
      color: primaryColor,
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      // marginRight: theme.spacing(2),
    },
    logo: {
      width: '30px',
      height: '30px',
    },
    navIcon: {
      height: iconHeight,
    },
    title: {
      display: 'none',
      color: brandColor,
      // fontFamily: ,
      fontSize: '20px',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      border: 'solid 1px',
      borderRadius: inputBorderRadius,
      // backgroundColor: fade(grey[100], 0.15),
      borderColor: fade(primaryColor, 0.5),
      '&:hover': {
        borderColor: fade(primaryColor, 1),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: '20%',
        width: 'auto',
      },
    },
    searchIcon: {
      color: fade(primaryColor, 0.5),
      '&:hover *': {
        color: primaryColor,
      },
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  }));