import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';

import ioSocket from './util/io';
import GlobalStyles from './components/GlobalStyles';
import DeveloperTools from './components/DeveloperTools';
import Zone from './views/Zone';
import Kiosk from './views/Kiosk';
import Pedestal from './views/Pedestal';

const rootElement = document.getElementById('root');

const App = () => {
    const [roomLog, setRoomLog] = useState([]);
    const roomLogRef = useRef([]);
    const [io, setIO] = useState();
    useEffect(() => {
        ioSocket.on('connect', setIO(ioSocket));
        ioSocket.on('message', message => {
            console.log(roomLogRef.current, message);
            roomLogRef.current = [...roomLogRef.current, message];
            setRoomLog(roomLogRef.current);
        });
    }, []);

    return (
        <>
            <GlobalStyles />
            <DeveloperTools />
            <HashRouter>
                <Route
                    component={({ history }) => {
                        // reconcile React Router history by making it available globally in the 3D menu
                        window.appHistory = history;
                        return <Zone io={io} />;
                    }}
                />
                <Route
                    path="/pedestal/:userId"
                    component={() => (
                        <Pedestal color="rgb(0, 168, 224, 0.75)" />
                    )}
                />
                <Route
                    path="/kiosk1/:userId"
                    component={() => (
                        <Kiosk color="orange" io={io} roomLog={roomLog} />
                    )}
                />
                <Route
                    path="/kiosk2/:userId"
                    component={() => (
                        <Kiosk color="blue" io={io} roomLog={roomLog} />
                    )}
                />
                <Route
                    path="/kiosk3/:userId"
                    component={() => (
                        <Kiosk color="green" io={io} roomLog={roomLog} />
                    )}
                />
                <Route
                    path="/kiosk4/:userId"
                    component={() => (
                        <Kiosk
                            color="rgb(180, 180, 0)"
                            io={io}
                            roomLog={roomLog}
                        />
                    )}
                />
            </HashRouter>
        </>
    );
};

ReactDOM.render(<App />, rootElement);
