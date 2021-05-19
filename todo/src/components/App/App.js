import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import './App.css';
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
  <div className="wrap">
   <h1 className="wrap__title"> Важные дела </h1>
   <InputItem />
   <ItemList items={items} />
   <Footer count={2} />
</div>);
}
export default App;
