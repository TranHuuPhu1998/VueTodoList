import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../components/HomePage';
import NewTodo from '../components/NewTodo';
import ItemTodo from '../components/ItemTodo';
import EditTodo from '../components/EditTodo';
import HistoryTodo from '../components/HistoryTodo';
import ListTodo from '../components/ListTodo';


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: ListTodo
    },
    {
      path: '/new',
      name: 'newtodo',
      component: NewTodo
    },
    {
      path: '/item',
      name: 'itemtodo',
      component: ItemTodo
    },
    {
      path: '/edit',
      name: 'edit',
      component: EditTodo
    },
    {
      path: '/history',
      name: 'history',
      component: HistoryTodo
    }

  ]
})
