import React from "react";
import styled from "styled-components";

const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border: 5px;
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

const Form = ({onEdit}) => {
  const ref = ureRef();
  
  return (
    <FormContainer ref={ref}>
      <InputArea>
      <Label>Nome</Label>
      <Input name="nome"></Input>
      </InputArea>
    </FormContainer>
  );
};

export default Form;

function ureRef() {
  return;
}
