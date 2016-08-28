import './home.scss';
import React, {PropTypes} from 'react';
import Header from '../header';

const HomeContainer = props =>
    <section className='home-container'>
        <Header/>
        <section className='app-body'>
            {props.children}
        </section>
    </section>;

HomeContainer.displayName = 'HomeContainer';
HomeContainer.propTypes = {
    children: PropTypes.node,
    params: PropTypes.object,
    routes: PropTypes.array
};

export default HomeContainer;
