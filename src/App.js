import React from 'react';

/* --- UI Framework --- */
import 'bootstrap/dist/css/bootstrap.min.css'

/* --- Styling --- */
import './App.css'

/* --- Components --- */
import {Switch, Route} from 'react-router-dom'
import Navbar from './components/ui/navbar/navbar'
import IndexPage from './components/pages/index/index-page'
import FoodsIndex from './components/pages/foods-index/foods-index'
import FoodsDetail from './components/pages/foods-detail/foods-detail'
import Footer from './components/ui/navbar/footer'


function App() {
    return (
    <>
        <Navbar/>
        <Switch>
            <Route path="/" exact component={IndexPage}/>
            <Route path="/alimentos" exact component={FoodsIndex}/>
            <Route path="/alimento/:foodId" component={FoodsDetail}/>
        </Switch> 
        <Footer/>
    </>
    )
}

export default App;
