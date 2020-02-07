import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

class App extends React.Component{
     Abc = () =>{
     return<div>Hello</div>
     }
    render(){
        return(
            
            <div className="divBack">{this.Abc()}Hello World</div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('app'));