import React from 'react'
import { useState } from "react";
import Footer from '../../Components/Footer';
import { Background, BigDiv, Body, Button, DeleteButton, DivInput, DivItem, Header, HeaderTitle, Input, Lista } from "./styles";

function EntradaSaida() {
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

    const [newItem2, setNewItem2] = useState('')
  
    const [arrayDeToDos2, setArrayDeToDos2] = useState([])

    function deleteItem2(id){
      const newArray2 = arrayDeToDos2.filter((item)=>{
        return item.id !== id 
      });
      setArrayDeToDos2(newArray2);
    } 

    function addItemToList2 () {

      console.log(newItem2);
      
      const NewToDo2 = {
        id: Math.floor(Math.random() * 1000),
        value: newItem2,
      };

      setArrayDeToDos2((arrayAntigo2)=> {
        return [...arrayAntigo2, NewToDo2]; 
      });

      setNewItem2('');
    }

  return (
    <Background>
        <BigDiv>  
            <Header>
                <HeaderTitle>ENTRADA DE PRODUTOS</HeaderTitle>
            </Header>
            <Body>
                <DivInput>
                    <Input 
                    onChange={(evento) => setNewItem(evento.target.value)} 
                    type="text" 
                    placeholder="Adicione o Produto..."
                    value= {newItem}
                    
                    ></Input>
                    <Button onClick={addItemToList}>Adicionar</Button>
                </DivInput>
                <Lista> {arrayDeToDos.map((item)=> {
                    return <DivItem key={item.id}> {item.value} <DeleteButton onClick={() => deleteItem(item.id)}> x </DeleteButton></DivItem> 
                })} </Lista>
            </Body>
            <Footer></Footer>
        </BigDiv>
        
        <BigDiv>  
            <Header>
                <HeaderTitle>SAÍDA DE PRODUTOS</HeaderTitle>
            </Header>
            <Body>
                <DivInput>
                    <Input 
                    onChange={(evento) => setNewItem2(evento.target.value)} 
                    type="text" 
                    placeholder="Adicione o Produto..."
                    value= {newItem2}
                        
                    ></Input>
                    <Button onClick={addItemToList2}>Adicionar</Button>
                </DivInput>
                    <Lista> {arrayDeToDos2.map((item)=> {
                        return <DivItem key={item.id}> {item.value} <DeleteButton onClick={() => deleteItem2(item.id)}> x </DeleteButton></DivItem> 
                    })} </Lista>
            </Body>    
            <Footer></Footer>
        </BigDiv>
        

    </Background>


  )
}

export default EntradaSaida