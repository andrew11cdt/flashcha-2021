import React from 'react';
import { footerStyle } from './footerStyle';

export default function Footer() {
  const classes = footerStyle();
  return (
    <div className={classes.container}>
      This is footer !
    </div>
  );
}