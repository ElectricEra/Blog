import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Navbar } from './components/organisms';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <div>
                    <Navbar />
                    {/* <Route exact path="/" component={Header}/> */}
                </div>
            </Router>
        )
    }    
}

ReactDOM.render(<App />, document.getElementById('app'));
