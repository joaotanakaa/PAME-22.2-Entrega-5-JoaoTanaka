import React from "react";
import { useState } from "react";
import { Background, Button, DeleteButton, DivInput, DivItem, Header, HeaderTitle, Input, Lista } from "./styles";


function WebPage() {
  
    const [newItem, setNewItem] = useState('')
  
    const [arrayDeToDos, setArrayDeToDos] = useState([])

    function deleteItem(id){
      const newArray = arrayDeToDos.filter((item)=>{
        return item.id !== id 
      });
      setArrayDeToDos(newArray);
    } 

    function addItemToList () {

      console.log(newItem);
      
      const NewToDo = {
        id: Math.floor(Math.random() * 1000),
        value: newItem,
      };

      setArrayDeToDos((arrayAntigo)=> {
        return [...arrayAntigo, NewToDo]; 
      });

      setNewItem('');
    }

  return (
    <Background>
      <Header>
        <HeaderTitle>CHECK LIST</HeaderTitle>
      </Header>
      <DivInput>
        <Input 
          onChange={(evento) => setNewItem(evento.target.value)} 
          type="text" 
          placeholder="Adicione sua Tarefa..."
          value= {newItem}
          
        ></Input>
        <Button onClick={addItemToList}>Adicionar</Button>
      </DivInput>
      <Lista> {arrayDeToDos.map((item)=> {
        return <DivItem key={item.id}> {item.value} <DeleteButton onClick={() => deleteItem(item.id)}> x </DeleteButton></DivItem> 
      })} </Lista>


    </Background>


  )
}

export default WebPage;

