import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
const todoItem=['Изучить новый материал','Выполнить ДЗ','Прочить книгу'];
const App = () => (<div>
   <h1> Важные дела </h1>
   <InputItem />
   <ItemList todoItem={todoItem} />
   <Footer count={2} />
</div>
);
export default App;
