import { DownloadOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Divider, Flex, Select } from 'antd'
import Search from 'antd/es/input/Search'
import React, { useEffect, useState } from 'react'
import DashboardTable from './DashboardTable'
import { getUserList } from '../../redux/actions/userActions'
import { useDispatch } from 'react-redux'
import useDebounce from '../../hooks/useDebounce'

const DashboardComponent = () => {

    const [tableParams, setTableParams] = useState({
        pagination: {
            current: 1,
            pageSize: 10,
        },
        searchText: '',
        sortState: {
            columnKey:'',
            order:''
        }
    });

    const dispatch = useDispatch();

    const handleSelectSort = (value) => {
        if (value === 'none') {
            dispatch(getUserList({...tableParams,sortState:{columnKey:'', order:''} }))
        } else if (value === 'ascendName') {
            dispatch(getUserList({...tableParams,sortState:{columnKey:'name',order:'asc'} }))
        } else if (value === 'descendName') {
            dispatch(getUserList({...tableParams,sortState:{columnKey:'name',order:'desc'} }))
        } else if (value === 'ascendOrder') {
            dispatch(getUserList({...tableParams,sortState:{columnKey:'orders',order:'asc'} }))
        } else if (value === 'descendOrder') {
            dispatch(getUserList({...tableParams,sortState:{columnKey:'orders',order:'desc'} }))
        }
    }

    let debounceValue = useDebounce(tableParams.searchText, 500)

    useEffect(() => {
            dispatch(getUserList({...tableParams, pagination:{...tableParams.pagination, current:''}}))
    }, [dispatch, debounceValue])


    return (
        <>
            <Flex gap={20} align='center' wrap='wrap'>
                <Search placeholder="Search User" style={{ width: '20%', minWidth:'300px' }} size='large' color='primary' onChange={(e) => setTableParams((prev) => ({ ...prev, searchText: e.target.value }))} />
                <Select
                    defaultValue="none"
                    size='large'
                    style={{  width: '20%',minWidth:'300px'  }}
                    onChange={(value) => handleSelectSort(value)}
                    options={[
                        { value: 'none', label: 'None' },
                        { value: 'ascendName', label: 'Sort by Name (ascending)' },
                        { value: 'descendName', label: 'Sort by Name (descending)' },
                        { value: 'ascendOrder', label: 'Sort by Order (ascending)' },
                        { value: 'descendOrder', label: 'Sort by Order (descending)' },
                    ]}
                />
                <Button size='large' type="primary">Add <PlusOutlined /></Button>
                <Button icon={<DownloadOutlined />} size={'large'} />
            </Flex>
            <Divider />
            <DashboardTable tableParams={tableParams} setTableParams={setTableParams} />
        </>
    )
}

export default DashboardComponent