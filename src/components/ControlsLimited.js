import React from 'react';

import Controls from './Controls';

export default () => (
    <Controls
        enableZoom={false}
        minAzimuthAngle={-Math.PI}
        maxAzimuthAngle={Math.PI}
        minPolarAngle={Math.PI / 2.5}
        maxPolarAngle={Math.PI / 2.5}
    />
);
