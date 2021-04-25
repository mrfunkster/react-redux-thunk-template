import React from 'react';

import './Introduction.css'

const Introduction = () => {
    return (
        <div className="container d-flex flex-column justify-content-center">
            <div className="row">
                <div className="col d-flex flex-column">
                    <div className="technology">
                        <div className="technology-item">
                            <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                                <img src="/template-images/react-logo.png" alt=""/>
                            </a>
                        </div>
                        <div className="technology-item">
                            <a href="https://react-redux.js.org/" target="_blank" rel="noreferrer">
                                <img src="/template-images/redux-logo.png" alt=""/>
                            </a>
                        </div>
                        <div className="technology-item">
                            <a href="https://reactrouter.com/web/guides/quick-start" target="_blank" rel="noreferrer">
                                <img src="/template-images/react-router.svg" alt=""/>
                            </a>
                        </div>
                        <div className="technology-item">
                            <a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/" target="_blank" rel="noreferrer">
                                <img src="/template-images/bootstrap-logo.png" alt=""/>
                            </a>
                        </div>
                    </div>
                    <h1>React/Redux/Thunk App</h1>
                    <p>This template contain basic file structure to create React Application.</p>
                </div>
            </div>
        </div>
    );
};

export default Introduction;