import React from 'react';
import Skeleton from './Skeleton';

const SkeletonProduct = () => {
    return (
        <div className='skeleton-wrapper' style={{display:'flex', justifyContent:"center", gap:"1rem"}}>
            <Skeleton type="avatar"/>
            <Skeleton type="avatar"/>
            <Skeleton type="avatar"/>
        </div>
    );
};

export default SkeletonProduct;