import React, { Fragment, memo, useEffect } from 'react'
import { Table,Space, Input  } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { history } from '../../../App';
import { getArrUserAPI, timKiemUser, xoaNguoiDung } from '../../../redux/reducer/userReducer';
import moment from "moment"
const { Search } = Input;


 function Users(props) {
  const {arrUser} = useSelector(rootReducer => rootReducer.userReducer)
  const dispatch = useDispatch()
  useEffect(() =>{
    const action = getArrUserAPI()
    dispatch(action)
  },[])
  const columns = [
    {
      title: 'Avatar',
      dataIndex: 'Avatar',
      render : (text,user,index) =>{
        return <Fragment key={text}>
          <img onError={(e) =>{
            e.target.onError = null;
            e.target.src =`https://picsum.photos/${index + 1}/50`
          }} style={{width:"100px", height:"100px"}} src={user.avatar} alt="..." />
        </Fragment>
      },
      width: "20%",

    },
    {
      title: 'Email',
      dataIndex: 'email',
      
      width: "calc(100% / 7)",
    },
    
    {
      title: 'Name',
      dataIndex: 'name',
      
      width: "calc(100% / 7)",
    },
    {
      title: 'Birthday',
      dataIndex: 'birthday',
      render : (text,user,index) =>{
        return <Fragment key={text}>
          {moment(user.birthday).locale("en").format("DD-MM-YYYY")}
        </Fragment>
      },
      width: "calc(100% / 7)",
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
    
      width: "calc(100% / 7)",
    },
    {
      title: 'Role',
      dataIndex: 'role',
    
      width: "calc(100% / 7)",
    },
    {
      dataIndex: 'email',
      render: (text,user) =>{
        return <Fragment>
          <NavLink style={{fontSize: "20px", fontWeight:"bold"}} to={`/admin/user/edituser/${user._id}`}>
            <i className="fa-solid fa-marker"></i>
          </NavLink>
          <a onClick={() =>{
            console.log(user._id);
            dispatch(xoaNguoiDung(user._id))
          }} className="ml-4 mr-4" style={{fontSize: "20px", fontWeight:"bold", color:"red"}} >
            <i className="fa-solid fa-trash"></i>
          </a>
        </Fragment>
      },
      width: "calc(100% / 7)",
    },
  ];
  const arrUserFilter =
  arrUser.filter(
    (job) =>
      job.avatar !== null && job.name && job.email && job.birthday && job.phone && job.name
  );
  const data = arrUser;
  const onSearch = (value) => {
    
    dispatch(timKiemUser(value))

  }
  const onChange = (pagination, filters, sorter, extra) => {
  };
  return (
    <section className='users'>
      <h1 className='text-center mb-5' style={{fontSize: "30px", fontWeight:"bold", color:"black"}}>Quản Lý Người Dùng</h1>
      <button onClick={() =>{
        history.push("/admin/user/adduser")
      }} className="btn__login btn btn-success">Thêm Người Dùng</button>
      <Search
      className='my-3'
      placeholder="Tìm kiếm người dùng"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}
    />
        <Table columns={columns} dataSource={data} onChange={onChange} rowKey={"_id"} />
    </section>
  )
}

export default memo(Users) 