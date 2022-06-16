import React, { Fragment, memo } from 'react'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import _ from "lodash"
import { history } from '../../App';
import { TOKEN, USER_LOGIN } from '../../util/setting';
 function HeaderHome(props) {
  const {userLogin} = useSelector(rootReducer => rootReducer.userReducer)
  console.log(userLogin);

  const renderLogin = () =>{
    if(_.isEmpty(userLogin)){
      return <Fragment >
        <div className='d-flex justify-content-end'>
          <NavLink to="/login" className='btn__login btn btn-success'  type="primary">
              Login
              </NavLink>
              <NavLink  className='btn__register ml-2 btn btn-primary' to='/register' type="primary">
              Register
              </NavLink>
        </div>
      </Fragment>
    }
    return <Fragment>
       <div className='d-flex justify-content-end'>
        <NavLink className='btn__login btn ' to={`/personal/${userLogin._id}`} >
        <i className="fa-solid fa-user-ninja"></i> hi {userLogin.email}
        </NavLink>
        <NavLink className='btn__login btn ' to={`/admin/user`} >
        <i className="fa-solid fa-user-ninja"></i> hi {userLogin.email}
        </NavLink>
        <NavLink to="/" className='ml-2 btn__logout btn btn-danger' onClick={() =>{
          if(window.confirm("Bạn có muốn đăng xuất không?")){
            // xóa mọi dữ liệu trong localstorage
            localStorage.removeItem(USER_LOGIN)
            localStorage.removeItem(TOKEN)
          }
          //chuyen hướng về home và reload lại trang
          props.history.push('/home')
          window.location.reload()
        }} type="primary">
        Log Out
        
        </NavLink>
       </div>
    </Fragment>
  }

  return (
    <div>
           {renderLogin()}
    </div>
  )
}

export default memo(HeaderHome)