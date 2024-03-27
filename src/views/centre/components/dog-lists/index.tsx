import React, { memo, useState } from 'react'
import { Space, Table, Tag, Button } from 'antd';
import type { TableProps } from 'antd';

import FilterForm from '../../../../components/filter-form'
import './style.css'
import DogModal from './components/dog-modal';

interface DataType {
    key: string;
    name: string;
    age: number;
    breed: string;
}

const columns: TableProps<DataType>['columns'] = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        // render: (text) => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Breed',
        dataIndex: 'breed',
        key: 'breed',
    },
    {
        title: 'Gender',
        dataIndex: 'gender',
        key: 'gender',
    },
    // {
    //     title: 'Tags',
    //     key: 'tags',
    //     dataIndex: 'tags',
    //     render: (_, { tags }) => (
    //         <>
    //             {tags.map((tag) => {
    //                 let color = tag.length > 5 ? 'geekblue' : 'green';
    //                 if (tag === 'loser') {
    //                     color = 'volcano';
    //                 }
    //                 return (
    //                     <Tag color={color} key={tag}>
    //                         {tag.toUpperCase()}
    //                     </Tag>
    //                 );
    //             })}
    //         </>
    //     ),
    // },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                {/* <a>Invite {record.name}</a> */}
                <a>Update</a>
                <a>Delete</a>
            </Space>
        ),
    },
];

const data: DataType[] = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        breed: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        breed: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        breed: 'Sydney No. 1 Lake Park',
    },
];

const DogLists = memo(() => {
    const [open, setOpen] = useState(false);

    function setOpenFn(bol: boolean) {
        setOpen(bol)
    }

    return (
        <div className='dog-lists'>
            <FilterForm />
            <div className='operation-btn-wrap'>
                <Button className='add-btn' type="primary" onClick={() => setOpenFn(true)}>Add</Button>
                {/* <Button>Delete</Button> */}
            </div>
            <div>
                <Table columns={columns} dataSource={data} />
            </div>
            <DogModal open={open} setOpenFn={setOpenFn} />
        </div>
    )
})

export default DogLists