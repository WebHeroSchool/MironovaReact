import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './App.module.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
class App extends React.Component{
  render(){
    const items =[
      {
          value: 'Написать новое приложение',
          isDone:false
      },
      {
          value: 'Пописать props',
          isDone:true
       },
      {
          value: 'Сделать все дела',
          isDone:true
      }
    ];
    return (
      <div className={styles.wrap}>
        <Card>
          <CardContent>
           <h1 className={styles.title}> Важные дела </h1>
           <InputItem />
           <ItemList items={items} />
           <Footer count={2} />
           </CardContent>
        </Card>
      </div>
      );
  }
};
export default App;
