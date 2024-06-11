import { axiosPrivate } from './axios';

export const fromsaveByApi = async (payloadData) => {
    let res = await axiosPrivate.post('/fromsaves', payloadData);
    return res.data;
};
