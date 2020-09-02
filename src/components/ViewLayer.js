import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import ViewContent from './ViewContent';

export default ({ children, ...props }) => (
    <ViewLayer {...props}>
        <ViewContent>
            <Link to="/">Back</Link>
            {children}
        </ViewContent>
    </ViewLayer>
);

const ViewLayer = styled.div`
    background: ${props => props.backgroundColor};
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    z-index: ${props => props.zIndex};
    color: white;
`;
