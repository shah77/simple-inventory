import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import about from  './about';
import inventory from  './inventory';
import addItem from  './addItem';
import itemDetails from './itemDetails';
import editItem from './editItem';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={inventory}/>
            <Route exact path='/about' component={about}/>
            <Route exact path='/items/add' component={addItem}/>
            <Route exact path='/items/edit/:id' component={editItem} />
            <Route exact path='/items/:id' component={itemDetails} />
            
        </Switch>
    </main>
)

export default Main;