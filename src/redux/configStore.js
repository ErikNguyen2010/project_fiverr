import {configureStore} from '@reduxjs/toolkit';
import jobList from './Reducers/jobList';
import jobPage from './Reducers/jobPage';
import subTypeJob from './Reducers/subTypeJob';
import detailJob from './Reducers/detailJob';
import subJobs from './Reducers/subJobs';
import authStore from './Reducers/authStore';

export const store = configureStore ({
    reducer: {
        // khai bao state
        jobPage: jobPage,
        jobList: jobList,
        subTypeJob : subTypeJob,
        detailJob : detailJob,
        subJobs : subJobs,
        auth: authStore,
    }
})