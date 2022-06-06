import { createSlice } from '@reduxjs/toolkit'
import { history } from '../../App';
import { ACCESSTOKEN, DOMAIN, http, USER_LOGIN } from '../../util/setting';

// Kiểm tra trong localStorage đã có thông tin đăng nhập hay chưa, nếu có rồi thì không cần đăng nhập lại
let user = {};
if (localStorage.getItem(USER_LOGIN)) {
    user = JSON.parse(localStorage.getItem(USER_LOGIN));
  }
const initialState = {
    userLogin: user,
    userRegister : {},
    userInfo: {},


}

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
        loginAPI : (state, action) =>{
            console.log(action.payload);
            state.userLogin = action.payload;
        },
        registerAPI : (state, action) =>{
            state.userRegister = action.payload
        },
        infoAPI: (state,action) =>{
            state.userInfo = action.payload
        }
  }
});

export const {loginAPI,registerAPI, infoAPI} = userReducer.actions

export default userReducer.reducer


export const userLoginAPI = (userLogin) =>{
    return async dispatch =>{
        try{
            let result = await http.post('api/auth/signin', userLogin)
            console.log(result);
            let usLogin = result.data.user
            localStorage.setItem(USER_LOGIN, JSON.stringify(usLogin))
            localStorage.setItem(ACCESSTOKEN, result.data.token)
            const action = loginAPI(usLogin)
            dispatch(action)
            alert("Đăng nhập thành công")
            history.push('/'); 
        }catch(error){
            alert(
                "Đăng nhập không thành công, tên đăng nhập hoặc mật khẩu không chính xác"
              );
            console.log(error.response?.data);
                
        }
    }
}

export const userRegisterAPI = (userRegister) =>{
    return async dispatch =>{
        try{
          let result = await http.post("/api/auth/signup", userRegister)
          console.log(result.data);
          const action = registerAPI(userRegister)
          dispatch(action)
          alert("Đăng ký thành công")
          history.push('/login'); 
            
        }
        catch(error){
            alert(
                "Đăng ký không thành công"
              );
            console.log(error.response?.data);
        }
    }
}


export const userInfoAPI = (userID) =>{
    return async dispatch =>{
        try{
            let result = await http.get(`/api/users/${userID}`)
            console.log(result);
        }  
        catch(error){
            console.log(error.response?.data);
        }
    }
}