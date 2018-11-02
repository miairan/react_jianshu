import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import store from './store/';
import Header from './common/header/';
import Student from './common/student';

import { Globalstyle } from './style.js';
import { Iconfont } from './static/iconfont/iconfont';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            grade: '二'
        };
        this.changeGrade = this.changeGrade.bind(this);
    }
   render () {
       return (
           <Provider store={store}>
               <Fragment>
                   <Globalstyle />
                   <Iconfont />
                   <input ref="grade" onChange={()=>this.changeGrade()} />
                   <Header />
                   <Student grade={this.state.grade} />
               </Fragment>
           </Provider>
       )
   }

    changeGrade () {
        let grade = this.refs.grade.value;
        this.setState((prevState)=> {
            if (prevState!==grade) {
                return {
                    grade
                }
            } else {
                return {
                    grade: 'aa'
                }
            }
        })
    }
}

export default App;
