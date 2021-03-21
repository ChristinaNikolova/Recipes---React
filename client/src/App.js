import {Route, Switch, Redirect} from 'react-router-dom';

import Footer from './components/shared/Footer/Footer';
import Home from './components/Home/Home';
import Header from './components/shared/Header/Header';
import CategoriesList from './components/Category/CategoriesList/CategoriesList';

import './App.css';

function App() {
    return (
        <div className="app">
            <Header/>
            <Switch>
                <Route path='/' exact>
                    <Redirect to='/home'></Redirect>
                </Route>
                <Route path='/home' component={Home}></Route>
                <Route path='/categories' component={CategoriesList}></Route>
            </Switch>
            <Footer/>
        </div>
    );
}

export default App;
