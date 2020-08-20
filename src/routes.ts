/* Route definitions */
import App from './components/App';
import About from './components/About';
import Contact from './components/Contact';

import { RouteUI } from './types';

const Routes: RouteUI[] = [
    {
        path: "/",
        component: App
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/contact',
        component: Contact
    }
]

export default Routes
