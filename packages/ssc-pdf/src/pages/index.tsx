import * as React from 'react';
import glamorous from 'glamorous';
import {Button} from '@di-pdfs/pdf-base';

const Basic = glamorous.div({
    backgroundColor: 'white',
    color: 'cornflowerblue',
    border: '1px solid lightgreen',
    borderRight: 'none',
    borderBottom: 'none',
    boxShadow: '5px 5px 0 0 lightgreen, 10px 10px 0 0 lightyellow',
    transition: 'all 0.1s linear',
    margin: `3rem 0`,
    padding: `1rem 0.5rem`
});

export default () =>
    <Basic>
        Hello World
        <p>
            Testing importing from a package
            <Button> Button example</Button>
        </p>
    </Basic>;
