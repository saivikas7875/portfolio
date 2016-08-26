import React, {Component} from 'react';

export default class PreviewIndex extends Component {

    render() {

        return (
            <html>
                <head>
                    <title>{'Portfolio'}</title>
                    <link rel='icon'/>
                </head>
                <body>
                    <div className='content'></div>
                    <script
                        src='server.js'
                        type='text/javascript'
                    >
                    </script>
                </body>
            </html>
        );

    }

}

PreviewIndex.displayName = 'PreviewIndex';
