import axios from 'axios';
import strings from '../../strings';

const BASE_URL = strings.API_ROUTE;
const BBASE_URL = strings.SAVEAPI_COLLEGEROUTE;

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    bbaseURL: BBASE_URL
});