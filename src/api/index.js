import ajax from './ajax'
console.log(ajax);
export const baseSearchInfo = () => ajax.post('/api/xhr/search/init.json')