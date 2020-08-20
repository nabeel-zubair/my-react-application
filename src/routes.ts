/* Route definitions */
import App from './components/App';
import About from './components/About';
import Contact from './components/Contact';

import { AppRoute } from './types';

const Routes: AppRoute[] = [
    {
        name: 'About',
        path: '/about',
        component: About
    },
    {
        name: 'Contact',
        path: '/contact',
        component: Contact
    }
]

export default Routes
