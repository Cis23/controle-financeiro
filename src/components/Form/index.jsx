import React, { useState } from "react";
import * as C from "./styles";
import { maskCurrency, clearCurrency } from "../../utils/masks";

const Form = ({ handleAdd, initialValues }) => {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [isExpense, setExpense] = useState(initialValues.expense || false);

  const generateID = () => Math.round(Math.random() * 1000);

  const handleSave = () => {
    if (!desc || !amount) {
      alert("Informe a descrição e o valor!");
      return;
    } else if (amount < 1) {
      alert("O valor tem que ser positivo!");
      return;
    }

    const transaction = {
      id: generateID(),
      desc: desc,
      amount: clearCurrency(amount),
      date: date,
      expense: isExpense,
    };

    handleAdd(transaction);

    setDesc("");
    setAmount("");
  };

  const handleEdit = () => {

  }

  return (
    <>
      <C.Container>
        <Form action>

        </Form>
        <C.InputContent>
          <C.Label>Descrição</C.Label>
          <C.Input 
            value={desc || (initialValues.desc !== '' ? initialValues.desc : "")} 
            onChange={(e) => setDesc(e.target.value)} 
          />
        </C.InputContent>
        <C.InputContent>
          <C.Label>Valor</C.Label>
          <C.Input
            value={amount || (initialValues.amount !== '' ? maskCurrency(initialValues.amount) : "")}
            onChange={(e) => setAmount(maskCurrency(e.target.value))}
          />
        </C.InputContent>
        <C.InputContent>
          <C.Label>Data do Lançamento</C.Label>
          <C.Input
            type="date"
            value={date || (initialValues.date !== '' ? initialValues.date : "")}
            onChange ={(e) => setDate(e.target.value)}
          />
        </C.InputContent>
        <C.RadioGroup>
          <C.Label> 
            <C.Input
              type="radio"
              id="rIncome"
              name="group1"
              checked={initialValues.expense ? true : false}
              onChange={(e) => {
                setExpense(!isExpense)
              }}
            />
            Entrada
          </C.Label>
          <C.Label>
            <C.Input
              type="radio"
              id="rExpenses"
              name="group1"
              checked={initialValues.expense ? true : false}
              onChange={(e) => {
                setExpense(!isExpense)
              }}
            />
            Saída
          </C.Label>
        </C.RadioGroup>
        
        <C.Button onClick={handleSave}>SALVAR</C.Button>

      </C.Container>
    </>
  );
};

export default Form;
