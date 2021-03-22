import { makeStyles } from '@material-ui/core/styles';
import { grey, orange } from '@material-ui/core/colors';

export const bgColor = grey[50];
export const primaryColor = grey[700];
export const brandColor = orange[700];
export const inputBorderRadius = 15;
export const iconHeight = '30px';
export const footerBgColor = '#093170';
export const footerStyle = makeStyles((theme) => ({
  container: {
    background: footerBgColor,
    height: '100px',
  }
}));