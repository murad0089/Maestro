import Container from '../components/Container'
import Hotel from '../components/HotelRoute'
import Post from '../components/PostRoute'

export const routes = [
  {
    path: '',
    name:'Home',
    component: Container,
  },
  {
    path: '/hotel/:id',
    name:'Hotel',
    component: Hotel,
  },
  {
    path: '/post/:id',
    name:'Post',
    component: Post,
  }
  
]


