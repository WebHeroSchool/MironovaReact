import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
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
  <div>
   <h1> Важные дела </h1>
   <InputItem />
   <ItemList items={items} />
   <Footer count={2} />
</div>);
}
export default App;
