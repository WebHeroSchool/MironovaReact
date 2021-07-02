import React,{Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Todo from '../Todo/Todo';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';
import ReactContext from '../ReactContext/ReactContext';
import styles from './App.module.css';

const AppLink =(props)=>({
  render:()=>(
      <Link {...props} className={styles.link}/>
    )
  }
)

const App=()=>
  (<Router>
      <div className={styles.wrap}>
        <Card className={styles.sidebar}>
           <MenuList>
              <AppLink to='/'  ><MenuItem>Обо мне</MenuItem></AppLink>
              <AppLink to='/todo' ><MenuItem>Дела</MenuItem></AppLink>
              <AppLink to='/contacts' ><MenuItem>Контакты</MenuItem></AppLink>
              <AppLink to='/reactcontext' ><MenuItem>ReactContext</MenuItem></AppLink>
           </MenuList>
        </Card>
        <Card className={styles.content}>
            <Route path='/' exact component={About}/>
            <Route path='/todo'  component={Todo}/>
            <Route path='/contacts'  component={Contacts}/>
            <Route path='/reactcontext'  component={ReactContext}/>
        </Card>
      </div>
    </Router>);
  export default App;
