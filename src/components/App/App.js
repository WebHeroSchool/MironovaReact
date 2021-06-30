import React, {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './App.module.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const App = () => {
  const initialState = {
    items: [
      { id: 1, value: 'Написать новое приложение', isDone: false },
      { id: 2, value: 'Пописать props', isDone: false },
      { id: 3, value: 'Сделать все дела', isDone: false },
    ],
    count: 3,
    hasError: false
  }

const [items, setItems] = useState(initialState.items);
const [count, setCount] = useState(initialState.count);
const [hasError, setEmpty] = useState(initialState.hasError);

useEffect(() => {console.log('componentDidMount')}, []);
useEffect(() => {console.log('componentDidUpdate')}, [items]);

const onClickDone = id => {
   const newItemList = items.map(item => {
     const newItem = {...item};
     if (item.id === id) {
       newItem.isDone = !item.isDone;
     };
     return newItem;
   });
    setItems(newItemList);
 };

const onClickDelete=id=>{
		const newItems = items.filter(item=> item.id !== id);
	  setItems(newItems);
    setCount(count => count - 1);
};

const onClickAdd = value => {
   if (value !== '') {
     const newItemList = [
       ...items,
       {
         value,
         isDone: false,
         id: count + 1
       }
     ];
     setItems(newItemList);
     setCount(count => count + 1);
   } else {
     setEmpty(hasError => !hasError)
   }
 }

    return (
      <div className={styles.wrap}>
        <Card>
          <CardContent>
           <h1 className={styles.title}> Важные дела </h1>
           <InputItem
              onClickAdd={onClickAdd}
              hasError={hasError}
           />
           <ItemList items={items}
              onClickDone={onClickDone}
              onClickDelete={onClickDelete}
           />
           <Footer count={count} />
           </CardContent>
        </Card>
      </div>
      );

};
export default App;
