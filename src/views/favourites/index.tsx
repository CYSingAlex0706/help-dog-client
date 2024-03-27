import React, { memo } from 'react'
import DogCard from '../../components/dog-card'
import { Pagination } from 'antd';

import './style.css'

const Favourites = memo(() => {
    return (
        <div className='views-main'>
            <h3 className='f-title'>Favourites</h3>
            <div className='card-list'>
                {
                    new Array(20).fill(null).map(item => {
                        return <div className='card'><DogCard /></div>
                    })
                }
            </div>
            <div>
                <Pagination defaultCurrent={1} total={50} />
            </div>
        </div>
    )
})

export default Favourites