import React, { useState } from "react";
import Form from "../Form";
import GridItem from "../GridItem";
import Modal from "../Modal";
import * as C from "./styles";
const Grid = ({ itens, setItens }) => {

  const onDelete = (ID) => {
    const newArray = itens.filter((transaction) => transaction.id !== ID);
    setItens(newArray);
    localStorage.setItem("transactions", JSON.stringify(newArray));
  };

  const [valuesEdit, setValuesEdit] = useState(null)

  const onEdit = (ID) => {
    const index = itens.findIndex(item => item.id === ID);

    if(index >= 0){
      const values = itens.find(item => item.id === ID);
      setValuesEdit(values);
      handleOpenModal();
      console.log(itens[index])
    }
    // localStorage.setItem("transactions", JSON.stringify(itens));
  }
  const [openModal,setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(true);
  }
  const handleCloseModal = () => {
    setOpenModal(false);
  }
  return (
    <>
      <C.Table>
        <C.Thead>
          <C.Tr>
            <C.Th width={40}>Descrição</C.Th>
            <C.Th width={40}>Valor</C.Th>
            <C.Th width={25}>Data</C.Th>
            <C.Th width={20} alignCenter>
              Tipo
            </C.Th>
            {/* <C.Th width={10}></C.Th> */}
          </C.Tr>
        </C.Thead>
        <C.Tbody>
          {itens?.map((item, index) => (
            <GridItem key={index} item={item} onDelete={onDelete}  onEdit={onEdit}/>
          ))}
        </C.Tbody>
      </C.Table>

      { openModal ? (
          <Modal onClose={handleCloseModal}>
            <Form
              initialValues={valuesEdit}
            />
          </Modal>
        ) : false
      }
    </>
  );
};

export default Grid;
