import "./InputField.css";

interface InputFieldProps {
  aoAlterado: (valor: string) => void,
  label: string,
  valor: string,
  obrigatorio: boolean,
  placeholder: string,
}

const InputField = ({ aoAlterado, label, valor, placeholder, obrigatorio = false }: InputFieldProps) => {
  const aoDigitar = (event: React.ChangeEvent<HTMLInputElement>) => {
    aoAlterado(event.target.value);
  }

  return (
    <div className="input-field">
      <label>{ label }</label>
      <input 
          value={valor} 
          onChange={aoDigitar} 
          required={obrigatorio} 
          placeholder={ placeholder } type="text" />
    </div>
  )
}

export default InputField; 