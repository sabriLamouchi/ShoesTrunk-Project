import React from 'react';
import Skeleton from './Skeleton';

const SkeletonHome = () => {
    return (
        <div className='skeleton-wrapper'>
            <Skeleton type="title"/>
            <Skeleton type="title"/>
            <Skeleton type="avatar"/>
        </div>
    );
};

export default SkeletonHome;