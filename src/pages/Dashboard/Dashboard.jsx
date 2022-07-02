import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    ShopOutlined,
    TeamOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';
  import { Avatar, Layout, Menu } from 'antd';
import { Footer } from 'antd/lib/layout/layout';
  import React, { useState } from 'react';
  import { Space, Table, Tag, Switch } from 'antd';
  import { AntDesignOutlined } from '@ant-design/icons';

  const { Header, Sider, Content } = Layout;
  const columns = [
    {
      title: 'MaPhim',
      width: 100,
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
    },
    {
      title: 'TenPhim',
      width: 100,
      dataIndex: 'age',
      key: 'age',
      fixed: 'left',
    },
    {
      title: 'HinhAnh',
      dataIndex: 'address',
      key: '1',
      width: 150,
    },
    
    {
      title: 'MoTa',
      dataIndex: 'address',
      key: '3',
      width: 150,
    },
    {
      title: 'Role',
      dataIndex: 'address',
      key: '4',
      width: 150,
    },
    {
      title: 'MaNhom',
      dataIndex: 'address',
      key: '5',
      width: 150,
    },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: () => 
         <div className='action__btn'>
            <a href="" className="btn-detail btn btn-success">
            View detail
            </a>                    
            <a href="" className="mt-2 btn-edit btn btn-warning">
            Edit
            </a>                    
            <a href="" className="mt-2 ml-2 btn-delete btn btn-danger">
            X
            </a>           
          </div>
      ,
    },
  ];
  const data = [];
  
  for (let i = 0; i < 10; i++) {
    data.push({
      key: i,
      name: `Edrward ${i}`,
      age: 32,
      address: `London Park no. ${i}`,
    });
  }
  
  const items = [
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    BarChartOutlined,
    CloudOutlined,
    AppstoreOutlined,
    TeamOutlined,
    ShopOutlined,
  ].map((icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: `nav ${index + 1}`,
  }));
  
export default function Dashboard() {
    const [collapsed, setCollapsed] = useState(false);
    const [fixedTop, setFixedTop] = useState(false);
  return (
    <section className='dashboard'>
        
    <Layout  hasSider>
        <Sider 
            style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
            top: 0,
            bottom: 0,
            }}
        >
            <div className="logo" />
            <a className='sider__link' href="">
                Quản lý người dùng
            </a>
            <a className='sider__link' href="">
                Quản lý danh mục
            </a>
            <a className='sider__link' href="">
                Quản lý dịch vụ
            </a>
        </Sider>
      <Layout 
        className="site-layout"
        style={{
          marginLeft: 200,
        }}
      >
         <Header>
        <div className=' d-flex justify-content-end'>
          <div className='avatar__name text-white mr-2'>
            Admin
          </div>
         
          <div>
          <div className="dropdown btn-avatar">
            <button className="btn btn-success " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
               <div className='avatar__icon text-white'>
                <i className="fa fa-user-circle mr-2"></i>
                <i className="fa-solid fa-angle-down"></i>
              </div>
            </button>
            <div className="mr-5 dropdown-menu avatar__menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">Cập nhật thông tin</a>
              <a className="dropdown-item" href="#">Đăng xuất</a>
            </div>
          </div>
          </div>
        </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px 0',
            overflow: 'initial',
          }}
        >
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              textAlign: 'center',
            }}
          >
              <div className='text-left'>
                    <a className='pl-0 sider__link' href="">
                        Thêm quản trị viên
                    </a>
                    <form className='mb-3'>
                        <input type="text" className='content__input' placeholder='Nhập vào tài khoản hoặc họ tên người dùng' />
                        <button type='submit' className="content__btn btn btn-success ml-3">Tìm</button>
                    </form>
              </div>
             <Table
      columns={columns}
      dataSource={data}
      scroll={{
        x: 1500,
      }}
      summary={() => (
        <Table.Summary fixed={fixedTop ? 'bottom' : 'bottom'}>
        </Table.Summary>
      )}
      sticky
    />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
        </Footer>
      </Layout>
        </Layout>

      
    </section>
  )
}




 
  




  
 
  
