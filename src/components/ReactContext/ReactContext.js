import React, {Component,Fragment} from 'react';

const LevelThree = ({title}) => <h1>{title}</h1>;
const LevelTwo = ({title}) => <LevelThree title={title}/>
const LevelOne = ({title}) => <LevelTwo title={title}/>

class Lesson extends Component{

  render(){
    return(
      <LevelOne title="Hello"/>
    );
  }
}

// const TitleContext = React.createContext(); //создаем наш контекс
//
// const LevelThree = () => (
//   <TitleContext.Consumer> //Всю возвращаемую разметку оборачиваем в Consumer.
//     { title => <h1> {title} </h1> }//Внутри этой обертки доступ ко всему контексту
//   </TitleContext.Consumer>
// );
// const LevelTwo = () => <LevelThree />
// const LevelOne = () => <LevelTwo />
//
// class Lesson extends Component{
//
//   render() {
//     return(
//       <TitleContext.Provider value="Hello">//оборачиваем наш компонент в Provider
//           <LevelOne />//и задаем значения нашего заголовка
//       </TitleContext.Provider>
//     );
//   }
// }
//
// const TitleContext = React.createContext(); //создаем наш контекс
// const LevelThree = () => (
//   <TitleContext.Consumer>
//     { ({ title, subTitle, click }) =>(
//     <Fragment>
//       <h1 onClick={click}> {title} </h1>
//       <h2> {subTitle} </h2>
//     </Fragment>
//    )}
//   </TitleContext.Consumer>
// );
// const LevelTwo = () => <LevelThree />
// const LevelOne = () => <LevelTwo />
//
// class Lesson extends Component{
//
//   render() {
//     return(
//       <TitleContext.Provider value={ {title:"Hello", subTitle:"World!", click:()=>{console.log('Привет')}} }>
//           <LevelOne />
//       </TitleContext.Provider>
//     );
//   }
// }
export default Lesson;
