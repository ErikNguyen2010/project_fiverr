import React, {Fragment, useEffect, useState} from "react"
import { useSelector } from "react-redux"
import { NavLink, Redirect, Route } from "react-router-dom"
import { Layout, Menu, Breadcrumb } from 'antd';
import {
    UserOutlined,
    WindowsFilled,
    FileAddFilled,
    FileFilled,
    UserAddOutlined,
    GitlabOutlined,
    AuditOutlined,
    RobotOutlined,
    CarOutlined,
    SubnodeOutlined,
  } from '@ant-design/icons';
import { TOKEN, USER_LOGIN } from "../../util/setting";
import { history } from "../../App";
  const { Header, Content, Footer, Sider } = Layout;

export const  AdminTemplate = (props) =>{

    const {userLogin} = useSelector(rootReducer => rootReducer.userReducer)

    const [collapsed, setCollapsed] = useState(false);
      useEffect(() => {
        window.scrollTo(0, 0);
    });

    if(!localStorage.getItem(USER_LOGIN)){
        alert("Bạn không có quyền truy cập vào trang!")
        return <Redirect to="/"/>
    }
    if(userLogin.role != "ADMIN"){
    alert("Bạn không có quyền truy cập vào trang!")
    return <Redirect to="/"/>
    }


    let Component = props.component



    return <Route exact path={props.path} render={(propsRoute) =>{
        return <Fragment>
     
            <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="logo p-3">
            <NavLink to="/">
              <img src="https://www.brandinginasia.com/wp-content/uploads/2021/02/Fiverr-logo-Branding-in-Asia.jpg" alt="..." style={{width:"100%", height:"100px"}}/>
            </NavLink>
        </div>
        <Menu theme="dark" mode="inline">


          <Menu.SubMenu key={23} title="Users" icon={<RobotOutlined />}>
            <Menu.Item key="12" icon={<UserOutlined/>}>
                <NavLink to="/admin/user">Users</NavLink>
            </Menu.Item>
            <Menu.Item key="13" icon={<SubnodeOutlined />}>
                <NavLink to="/admin/user/adduser">Add Users</NavLink>
            </Menu.Item>
          </Menu.SubMenu>


            <Menu.SubMenu key={22} title="Films" icon={<WindowsFilled />}>
              <Menu.Item key="41" icon={<FileFilled />}>
                  <NavLink to="/admin/category">Categories</NavLink>
              </Menu.Item>
              <Menu.Item key="42" icon={<FileAddFilled />}>
                  <NavLink to="/admin/category/addcategory">Add New</NavLink>
              </Menu.Item>
            </Menu.SubMenu>



            <Menu.SubMenu key={25} title="Gigs" icon={<GitlabOutlined />}>
              <Menu.Item key="45" icon={<AuditOutlined />}>
                  <NavLink to="/admin/gig">Gigs</NavLink>
              </Menu.Item>
              <Menu.Item key="46" icon={<CarOutlined />}>
                  <NavLink to="/admin/gig/addgig">Add New</NavLink>
              </Menu.Item>
            </Menu.SubMenu>






        </Menu>
      </Sider>
            <Layout className="site-layout">
                <Header      className="d-flex justify-content-end site-layout-background"
                style={{
                  padding: 0,
                }}>

                <Fragment>
                          <NavLink className="btn__login mr-5" style={{textTransform: "uppercase"}} to={`/profile/${userLogin.taiKhoan}`}>
                              <i className="fa-solid fa-user-astronaut"></i>
                                hi {userLogin.name}
                              </NavLink>
                              <NavLink className="btn__logout mr-5" onClick={() =>{
                                  if(window.confirm("Bạn có muốn đăng xuất không?")){
                                    localStorage.removeItem(USER_LOGIN)
                                    localStorage.removeItem(TOKEN)
                                    history.push('/home')
                                    window.location.reload()
                                  }
                                }} to="#">
                                  Đăng Xuất
                              </NavLink>
                              <NavLink className="btn__login mr-5"  to="/">
                              <i className="fa-solid fa-house"></i> Về trang chủ
                              </NavLink>
                  </Fragment> 
                
                </Header>
                <Content
                style={{
                    margin: '0 16px',
                }}
                >
                     <Breadcrumb
                        style={{
                        margin: '16px 0',
                        }}
                    >
                        {/* <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
                    </Breadcrumb>
                    <div
                        className="site-layout-background"
                        style={{
                        padding: 24,
                        minHeight: 360,
                        }}
                    >
                        <Component {...propsRoute}/>
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
        </Fragment>
    }}/>
}




