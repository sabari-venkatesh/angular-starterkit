import { Menu } from '../menu/menu';
import { Utils } from '../app.utils';

export const MENU: Menu[] = [
  {
    id: Utils.generateId(),
    order: 1,
    name: 'home',
    path: ''
  },
  {
    id: Utils.generateId(),
    name: 'Services',
    order: 2,
    path: 'services',
    children: [{
      id: Utils.generateId(),
      name: 'Digital Innovation',
      order: 1,
      path: 'digital-innovation'
    }, {
      id: Utils.generateId(),
      name: 'Software Engineering',
      order: 2,
      path: 'software-engineering'
    }, {
      id: Utils.generateId(),
      name: 'Testing & Automation',
      order: 3,
      path: 'quality-assurance'
    }, {
      id: Utils.generateId(),
      name: 'Devops',
      order: 4,
      path: 'devops'
    }, {
      id: Utils.generateId(),
      name: 'Gamification',
      order: 5,
      path: 'gamification'
    }, {
      id: Utils.generateId(),
      name: 'Data Analytics & Machine Learning',
      order: 6,
      path: 'data-analytics-machine-learning'
    }]
  },
];
