import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store/';
import Header from './common/header/'

import { Globalstyle } from './style.js';
import { Iconfont } from './static/iconfont/iconfont';

class App extends Component {
   render () {
       return (
           <Provider store={store}>
               <div>
                   <Globalstyle />
                   <Iconfont />
                   <Header />
               </div>
           </Provider>
       )
   }
}

export default App;
