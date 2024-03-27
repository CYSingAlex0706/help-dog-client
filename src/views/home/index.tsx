import React, { memo } from 'react'
import { Pagination } from 'antd';

import './style.css'
import DogCard from '../../components/dog-card';
import FilterForm from '../../components/filter-form';


const Home = memo(() => {
    return (
        <div className='home-main'>
            <div>
                <FilterForm />
            </div>
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

export default Home