import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './App.module.css';
// const todoItem=['Изучить новый материал','Выполнить ДЗ','Прочить книгу'];
const App = () => {
  const items =[
    {
        value: 'Написать новое приложение'
    },
    {
        value: 'прописать props'
     },
    {
        value: 'сделать все дела'
    }
  ];
  return (
  <div className={styles.wrap}>
   <h1 className={styles.title}> Важные дела </h1>
   <InputItem />
   <ItemList items={items} />
   <Footer count={2} />
</div>);
}
export default App;
