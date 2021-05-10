/*
 * @LastEditors: caizichen1
 */
import Loadable from 'react-loadable';

const page = component => {
  return Loadable({
    loader: () => import(`./../pages/${component}/index.jsx`),
    loading() {
      return <div>Loading...</div>
    }
  })
};

const routes = [
  // 默认路由
  { path: '/', component: page('index') },
  { path: '/index', component: page('index') },
  { path: '/admin', component: page('admin') },
];

export default routes;