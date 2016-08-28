import {FormattedMessage} from 'react-intl';
import Links from './links';
import React from 'react';
import './header.scss';

const Header = () =>
    <section className='header'>
        <section className='main-bar'>
            <section className='app-title'>
                <FormattedMessage id='PORTFOLIO'/>
            </section>
            <Links/>
        </section>
        <section className='section-divider'>

        </section>
    </section>;

Header.displayName = 'Header';

export default Header;
