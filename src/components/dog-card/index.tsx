import React, { memo } from 'react'
import { Card } from 'antd';

import './style.css'

const DogCard = memo(() => {
    const { Meta } = Card;

    return (
        <div>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <Meta title="Cindy" />
            </Card>
        </div>
    )
})

export default DogCard