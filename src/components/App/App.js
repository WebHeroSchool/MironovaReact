import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './App.module.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
class App extends React.Component{
  state={
    items: [
      {
          value: 'Написать новое приложение',
          isDone:false,
          id:1
      },
      {
          value: 'Пописать props',
          isDone:false,
          id:2
       },
      {
          value: 'Сделать все дела',
          isDone:false,
          id:3
      }
    ],
    count:3,
    hasError:false
  };
  onClickDone = id => {
     const newItemList = this.state.items.map(item => {
       const newItem = {...item};
       if (item.id === id) {
         newItem.isDone = !item.isDone;
       };
       return newItem;
     });
     this.setState({items: newItemList});
   };
onClickDelete=id=>{
		const newItems = this.state.items.filter(item=> item.id !== id);
		this.setState({items: newItems})
};
onClickAdd=value=>{
if(value!==''){
  this.setState(state=>({
      items:[
        ...state.items,
        {
          value,
          isDone:false,
          id:state.count+1
        }
      ],
      count:state.count+1,
      hasError:false
    }));
}
else{
      this.setState(state =>
        ({
          hasError: true
        }));
    }
}
  render(){
    return (
      <div className={styles.wrap}>
        <Card>
          <CardContent>
           <h1 className={styles.title}> Важные дела </h1>
           <InputItem
              onClickAdd={this.onClickAdd}
              hasError={this.state.hasError}
           />
           <ItemList items={this.state.items}
              onClickDone={this.onClickDone}
              onClickDelete={this.onClickDelete}
           />
           <Footer count={this.state.count} />
           </CardContent>
        </Card>
      </div>
      );
  }
};
export default App;
