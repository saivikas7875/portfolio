import about from './about';
import home from './home';
import projects from './projects';

export default {
    ...home,
    childRoutes: [
        ...about,
        ...projects
    ]
};
