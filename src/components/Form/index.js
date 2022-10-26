import Button from "../Button";
import DropDownList from "../DropDownList";
import InputField from "../InputField";
import "./Form.css";

const Form = () => {
  const times = [
    "Programação",
    "Front-End",
    "Data Science",
    "Devops",
    "UX e Design",
    "Mobile",
    "Inovação e Gestão"
  ];

  const saveForm = (event) => {
    event.preventDefault();
    console.log('salvo!');
  }

  return (
    <section className="form">
      <form onSubmit={saveForm}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <InputField obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
        <InputField obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" />
        <InputField label="Imagem" placeholder="Digite o endereço da imagem" />
        <DropDownList obrigatorio={true} label="Time" itens={times}/>
        <Button>
          Criar Card
        </Button>
      </form>
    </section>
  );
};

export default Form;
