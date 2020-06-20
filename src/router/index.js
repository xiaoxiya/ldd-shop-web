import Vue from 'vue'
import Router from 'vue-router'

//使用vuerouter
Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes 静态路由
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
    {
        path: '/404',
        component: () => import('@/views/404'),
        hidden: true
      },
    {
        path: '/',
        component: Layout,
        redirect: '/home',
        // 这里开始对应的路由都会显示在app-main中
        children: [{
            path: 'home',
            name: 'Home',
            component: () => import('@/views/home/index'),
            meta: { title: 'home', icon: 'dashboard' }
        }]
    }
]

//动态路由，需要权限校验
export const asyncRouterMap = [{}]

const createRouter = () => new Router({
    // require service support
    //history模式下的路由可以不需要路径后加#号
    // mode: 'history', 
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}
//定义全局router管理路由
export default router
