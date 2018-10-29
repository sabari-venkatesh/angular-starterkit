import { Menu } from './menu';

export const MENU: Menu[] = [
  {
    id: 1,
    name: 'home',
    path: '',
    children: []
  },
  {
    id: 2,
    name: 'Services',
    path: 'services',
    children: [{
      id: 2.1,
      name: 'Digital Innovation',
      path: 'digital-innovation'
    }, {
      id: 2.2,
      name: 'Software Engineering',
      path: 'software-engineering'
    }, {
      id: 2.3,
      name: 'Software Engineering',
      path: 'software-engineering'
    }, {
      id: 2.4,
      name: 'Software Engineering',
      path: 'software-engineering'
    }]
  },
];
