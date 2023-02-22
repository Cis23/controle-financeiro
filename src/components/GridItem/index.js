import React from "react";
import * as C from "./styles";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaTrash,
  FaRegEdit
} from "react-icons/fa";
import { maskCurrency } from "../../utils/masks";
import { dateFormat } from "../../utils/services/formatDate";

const GridItem = ({ item, onDelete, onEdit }) => {
  return (
    <C.Tr>
      <C.Td>{item.desc}</C.Td>
      <C.Td>{maskCurrency(item.amount)}</C.Td>
      <C.Td>{dateFormat(item.date)}</C.Td>
      <C.Td alignCenter>
        {item.expense ? (
          <FaRegArrowAltCircleDown color="red" />
        ) : (
          <FaRegArrowAltCircleUp color="green" />
        )}
      </C.Td>
      <C.Td alignCenter>
        <FaRegEdit onClick={() => onEdit(item.id)} title="Editar"/>
      </C.Td>
      <C.Td alignCenter>
        <FaTrash onClick={() => onDelete(item.id)} title="Deletar"/>
      </C.Td>
    </C.Tr>
  );
};

export default GridItem;
