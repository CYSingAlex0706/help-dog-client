import React, { memo, useState } from 'react'
import { Modal } from 'antd';
import DogForm from '../dog-form';

interface Iprops {
    open: boolean,
    setOpenFn: (bol: boolean) => void
}

const DogModal: React.FC<Iprops> = memo((props) => {
    const { open, setOpenFn } = props

    // const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');

    const handleOk = () => {
        setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);
        setTimeout(() => {
            // setOpen(false);
            setConfirmLoading(false);
        }, 2000);
    };

    const handleCancel = () => {
        setOpenFn(false)
        console.log('Clicked cancel button');
        // setOpen(false);
    };

    return (
        <div>
            <Modal
                title="Title"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <DogForm />
            </Modal>
        </div>
    )
})


export default DogModal