import { useState } from "react";
import { IColaborador } from "../../shared/interfaces/IColaborador";
import Button from "../Button";
import DropDownList from "../DropDownList";
import InputField from "../InputField";
import "./Form.css";

interface FormProps {
  aoColaboradorCadastrado: (colaborador: IColaborador) => void,
  times: string[],
  obrigatorio?: boolean
}

const Form = (props: FormProps) => {
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [imagem, setImagem] = useState('');
  const [time, setTime] = useState('');
  const [data, setData] = useState('');

  const saveForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time,
      data
    });

    setNome('');
    setCargo('');
    setImagem('');
    setTime('');
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
          obrigatorio={true}
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          valor={imagem}
          aoAlterado={valor => setImagem(valor)}
          />
        <InputField
          obrigatorio={true}
          label="Data de entrada no Time"
          placeholder=""
          valor={data}
          tipo='date'
          aoAlterado={valor => setData(valor)}
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
