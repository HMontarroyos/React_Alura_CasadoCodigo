import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Sobre from '../src/Pages/Sobre';
import Livros from '../src/Pages/Livros';
import Autores from '../src/Pages/Autores';
import NotFound from '../src/Pages/NotFound';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path='/' exact={true} component={App}/>
            <Route path='/sobre' component={Sobre}/>
            <Route path='/livros' component={Livros}/>
            <Route path='/autores' component={Autores}/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>,
document.getElementById('root'));

/*
Para definirmos que uma rota só pode ser acessada pelo caminho exato passado no path, 
podemos adicionar um parâmetro exact=[true], evitando esse tipo de problema. Pensando nisso, 
adicionaremos esse parâmetro na rota */
serviceWorker.unregister();
