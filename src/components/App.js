import React from 'react';
import '../css/index.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Register from '../auth/register';
import Login from '../auth/login';
import Home from './Home';
import Navbar from './Navbar'
import Dashboard from './Dashboard';

class App extends React.Component {
        
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    {/* <h1>Fundoo App</h1> */}
                    {/* <Navbar /> */}
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route path="/register" component={Register} />
                        <Route path="/login" component={Login} />
                        <Route path="/dashboard" component={Dashboard}/>
                    </Switch>
                   
                </div>
            </BrowserRouter>
        );
    }
}

export default App;