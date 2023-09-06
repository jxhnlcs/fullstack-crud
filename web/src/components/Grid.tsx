import React from "react";
import axios, { AxiosError } from "axios";
import styled from "styled-components";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";

interface User {
  id: number;
  nome: string;
  email: string;
  fone: string;
  data_nascimento: string;
}

interface GridProps {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
  setOnEdit: React.Dispatch<React.SetStateAction<User | null>>;
}

interface ThProps {
  onlyWeb?: boolean;
}

interface TdProps {
  onlyWeb?: boolean;
  alignCenter?: boolean;
}

const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1120px;
  margin: 20px auto;
  word-break: break-all;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th<ThProps>` 
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

export const Td = styled.td<TdProps>`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width : "auto")};

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

const Grid: React.FC<GridProps> = ({ users, setUsers, setOnEdit }) => {
  const handleEdit = (item: User) => {
    setOnEdit(item);
  };

  const handleDelete = async (id: number) => {
    try {
      const response = await axios.delete(`http://localhost:8800/${id}`);
      const newArray = users.filter((user) => user.id !== id);

      setUsers(newArray);
      toast.success(response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<unknown>;
        if (axiosError.response) {
          toast.error(axiosError.response.data as string);
        } else {
          toast.error("Erro desconhecido ao fazer a requisição.");
        }
      } else {
        toast.error("Erro desconhecido ao processar a requisição.");
      }
    }

    setOnEdit(null);
  };

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Nome</Th>
          <Th>Email</Th>
          <Th onlyWeb>Fone</Th>
          <Th></Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {users.map((item) => (
          <Tr key={item.id}>
            <Td width="30%">{item.nome}</Td>
            <Td width="30%">{item.email}</Td>
            <Td width="20%" onlyWeb>
              {item.fone}
            </Td>
            <Td alignCenter width="5%">
              <FaEdit onClick={() => handleEdit(item)} />
            </Td>
            <Td alignCenter width="5%">
              <FaTrash onClick={() => handleDelete(item.id)} />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default Grid;