import './home.scss';
import React, {PropTypes} from 'react';
import {FormattedMessage} from 'react-intl';

const HomeContainer = props =>
    <section className='home-container'>
        <section className='app-title'>
            <FormattedMessage id='PORTFOLIO'/>
        </section>
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
