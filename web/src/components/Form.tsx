import axios, { AxiosError } from "axios";
import React, { useEffect, useRef} from "react";
import styled from "styled-components";
import { toast, ToastContainer, ToastContent } from "react-toastify";

interface User {
  id: number;
  nome: string;
  email: string;
  fone: string;
  data_nascimento: string;
}

interface FormProps {
  getUsers: () => void;
  onEdit: User | null;
  setOnEdit: (user: User | null) => void;
}

const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

const Label = styled.label``;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
`;

const Form: React.FC<FormProps> = ({ getUsers, onEdit, setOnEdit }) => {
  const ref = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    if (onEdit) {
      const user = ref.current;

      if (user) {
        user.nome.value = onEdit.nome;
        user.email.value = onEdit.email;
        user.fone.value = onEdit.fone;
        user.data_nascimento.value = onEdit.data_nascimento;
      }
    }
  }, [onEdit]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const user = ref.current;

    if (
      !user ||
      !user.nome.value ||
      !user.email.value ||
      !user.fone.value ||
      !user.data_nascimento.value
    ) {
      return toast.warn("Preencha todos os campos!") as ToastContent;
    }

    try {
      if (onEdit) {
        await axios.put(`http://localhost:3333/${onEdit.id}`, {
          nome: user.nome.value,
          email: user.email.value,
          fone: user.fone.value,
          data_nascimento: user.data_nascimento.value,
        });
        toast.success("Usuário editado com sucesso!") as ToastContent;
      } else {
        await axios.post("http://localhost:3333", {
          nome: user.nome.value,
          email: user.email.value,
          fone: user.fone.value,
          data_nascimento: user.data_nascimento.value,
        });
        toast.success("Usuário criado com sucesso!") as ToastContent;
      }

      if (user) {
        user.nome.value = "";
        user.email.value = "";
        user.fone.value = "";
        user.data_nascimento.value = "";
      }

      setOnEdit(null);
      getUsers();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<unknown>;
        if (axiosError.response) {
          toast.error(axiosError.response.data as string) as ToastContent;
        } else {
          toast.error("Erro desconhecido ao fazer a requisição.") as ToastContent;
        }
      } else {
        toast.error("Erro desconhecido ao processar a requisição.") as ToastContent;
      }
    }
  };

  return (
    <>
      <FormContainer ref={ref} onSubmit={handleSubmit}>
        <InputArea>
          <Label>Nome</Label>
          <Input name="nome" />
        </InputArea>
        <InputArea>
          <Label>E-mail</Label>
          <Input name="email" type="email" />
        </InputArea>
        <InputArea>
          <Label>Telefone</Label>
          <Input name="fone" />
        </InputArea>
        <InputArea>
          <Label>Data de Nascimento</Label>
          <Input name="data_nascimento" type="date" />
        </InputArea>

        <Button type="submit">SALVAR</Button>
      </FormContainer>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
    </>
  );
};

export default Form;