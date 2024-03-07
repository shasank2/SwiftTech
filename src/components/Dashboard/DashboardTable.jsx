import React, { useEffect, useState } from 'react'
import { Button, Modal, Space, Table, Tag, message } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, getUserList } from '../../redux/actions/userActions';

const DashboardTable = ({ tableParams, setTableParams, handleSelectSort }) => {

    const dispatch = useDispatch();
    const [deleteModal, setDeleteModal] = useState(false)
    const [deleteItem, setDeleteItem] = useState(null)

    const userList = useSelector((state) => state.user);

    const [messageApi, contextHolder] = message.useMessage();

    const success = (message) => {
        messageApi.success(message);
    };

    useEffect(() => {
        dispatch(getUserList(tableParams));
    }, [dispatch]);

    const handleChange = (pagination, filters, sorter) => {
        console.log(pagination);
        if (pagination.current !== tableParams.pagination.current || pagination.pageSize !== tableParams.pagination.pageSize) {
            dispatch(getUserList({ ...tableParams, pagination: pagination }));
            setTableParams((prev) => ({
                ...prev,
                pagination: pagination
            }));
        }
    };

    const columns = [
        {
            render: (text, record, index) => index + 1,
        },
        {
            title: 'Status',
            key: 'status',
            dataIndex: 'status',
            render: (_, { status }) => {
                let color = 'red'
                if (status === 'completed') {
                    color = 'green'
                } else if (status === 'pending') {
                    color = 'blue'
                }
                return (
                    <Tag color={color} key={status}>
                        {status}
                    </Tag>
                )

            }
        },
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            render: (text) => <strong>#{text}</strong>,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            sorter: (a, b) => a.name.localeCompare(b.name),
            sortOrder: tableParams.sortState.columnKey === 'name' ? tableParams.sortState.order : null,
            sortDirections: ['ascend', 'descend', 'ascend'],
        },
        {
            title: 'Contact',
            dataIndex: 'contact',
            key: 'contact',
        },
        {
            title: 'Orders',
            dataIndex: 'orders',
            key: 'orders',
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (_, record) => (
                <Space >
                    <Button>
                        <EditOutlined />
                    </Button>
                    <Button onClick={
                        () => {
                            setDeleteModal(true),
                                setDeleteItem(record)
                        }
                    }>
                        <DeleteOutlined />
                    </Button>
                </Space>
            ),
        },
    ];

    return (
        <div style={{overflowX:'auto'}}>
            {contextHolder}
            <Table
                columns={columns}
                dataSource={userList?.users}
                loading={userList?.loading}
                pagination={{
                    ...tableParams.pagination,
                    total: userList.total,
                    showSizeChanger: true,
                }}
                onChange={handleChange}
            />


            <Modal
                title="Confirm Delete"
                open={deleteModal}
                onOk={() => {
                    dispatch(deleteUser(deleteItem.id))
                    setDeleteModal(false)
                    success(`User deleted successfully`)
                }}
                onCancel={() => setDeleteModal(false)}>
                Are you sure you want to delete User <strong>{deleteItem?.name}</strong>
            </Modal>
        </div>
    )
}

export default DashboardTable