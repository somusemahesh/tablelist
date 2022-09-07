// import logo from './logo.svg';
import {React,useState} from 'react'
import AdddId from './DisplayFormData/Form/AdddId';
import Table from './DisplayFormData/Table/Table';
import './App.css';

const dummyitem=[
  // {id: "e1",
  // title: "Book Stand",
  // amount: 5000,}
  ]
function App() {

  const [item,setItem] = useState(dummyitem);

  const addItemhandler = (item) =>{

  setItem((prevItem)=>{

      return[item, ...prevItem];
  })
  console.log("APP Data",item)

}
    
  return (
    <div className="App">
    <AdddId onAddItem={addItemhandler}/> 
    <Table itemData={item}/> 
    </div>
  );
}

export default App;
