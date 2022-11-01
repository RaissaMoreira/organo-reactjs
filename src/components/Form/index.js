import { useState } from "react";
import Button from "../Button";
import DropDownList from "../DropDownList";
import InputField from "../InputField";
import "./Form.css";

const Form = (props) => {
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [imagem, setImagem] = useState('');
  const [time, setTime] = useState('');

  const saveForm = (event) => {
    event.preventDefault();
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time
    })
  }

  return (
    <section className="form">
      <form onSubmit={saveForm}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <InputField 
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterado={valor => setNome(valor)}
        />
        <InputField
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          valor={cargo}
          aoAlterado={valor => setCargo(valor)}
          />
        <InputField
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          valor={imagem}
          aoAlterado={valor => setImagem(valor)}
          />
        <DropDownList
          obrigatorio={true}
          label="Time"
          itens={props.times}
          valor={time}
          aoAlterado={valor => setTime(valor)}
        />
        <Button>
          Criar Card
        </Button>
      </form>
    </section>
  );
};

export default Form;
