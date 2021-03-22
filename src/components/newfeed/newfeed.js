import React from 'react';
import { NewFeedStyle } from './newfeedStyle';

const newfeed = () => {
    const classes = NewFeedStyle();
    return (
        <div className={classes.container}>
            {/* This is new feed */}
        </div>
    );
};

export default newfeed;