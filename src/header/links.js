import React from 'react';
import {Link} from 'react-router';

const Links = () =>
    <section className='links'>
        <ul>
            <li>
                <Link to="#/">
                    {'Home'}
                </Link>
            </li>
            <li>
                <Link to="/about">
                    {'About'}
                </Link>
            </li>
            <li>
                <Link to="/projects">
                    {'Projects'}
                </Link>
            </li>
        </ul>
    </section>;

Links.displayName = 'Links';

export default Links;
