import React, { useEffect } from 'react'
import DashboardComponent from '../components/Dashboard/DashboardComponent'
import { useDispatch, useSelector } from 'react-redux';
import { getUserList } from '../redux/actions/userActions';

const Dashboard = () => {

    return (
        <DashboardComponent />
    )
}

export default Dashboard