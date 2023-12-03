import React from 'react';
import Skeleton from './Skeleton';
const SkeletonHelp = () => {
    return (
        <div className='skeleton-wrapper'>
            <Skeleton type="title"/>
            <Skeleton type="text"/>
            <Skeleton type="text"/>
            <Skeleton type="text"/>
        </div>
    );
};

export default SkeletonHelp;