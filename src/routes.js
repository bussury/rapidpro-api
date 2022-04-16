
/** @type {import('vue-router').RouterOptions['routes']} */
export let routes = [
  { path: '/', 
    component:() => import('@/views/Home.vue'), 
    meta: { 
      title: 'Home',
      layout: 'LayoutClient' 
    } 
  },
  { path: '/message', 
    component: () => import('@/views/Message.vue'), 
    meta: { 
      title: 'Message',
      layout: 'LayoutClient'
    } 
  },
  { path: '/:path(.*)', component: () => import('@/views/NotFound.vue')},
]
