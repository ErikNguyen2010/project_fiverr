import { createSlice } from '@reduxjs/toolkit'
import { http } from '../../util/setting';

const initialState = {
    bookingJob: []
}

const workReducer = createSlice({
  name: 'workReducer',
  initialState,
  reducers: {

  }
});

export const {} = workReducer.actions

export default workReducer.reducer

export const getWork = () =>{
    return async dispatch =>{
        try{
            let result = await http.get(`/api/jobs/by-user`)
            console.log(result.data);
        }
        catch(err){
            console.log(err.response?.data);
        }
    }
}