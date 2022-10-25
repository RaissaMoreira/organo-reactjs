import InputField from "../InputField";
import "./Form.css";

const Form = () => {
  return (
    <section className="form">
      <form>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <InputField label="Nome" placeholder="Digite seu nome" />
        <InputField label="Cargo" placeholder="Digite seu cargo" />
        <InputField label="Imagem" placeholder="Digite o endereço da imagem" />
        <InputField label="Time" placeholder="Digite seu time" />
      </form>
    </section>
  );
};

export default Form;
