import ajax from './ajax';
export const baseSearchInfo = () => ajax.post('/api/xhr/search/init.json');
export const navWap = () => ajax.get('/api/topic/v1/know/navWap.json');
export const recAuto = (page,size) => ajax.get(`/api/topic/v1/find/recAuto.json?page=${page}&size=${size}`);

export const cateNavDatas = () => ajax.get('/node/cateNavDatas');
export const cateLists = () => ajax.get('/node/cateLists');
