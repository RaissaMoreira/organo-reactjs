import "./InputField.css";

interface InputFieldProps {
  aoAlterado: (valor: string) => void,
  label: string,
  valor: string,
  obrigatorio?: boolean,
  placeholder: string,
  tipo?: 'text' | 'password' | 'date' | 'email' | 'number'
}

const InputField = ({ aoAlterado, label, valor, placeholder, obrigatorio = false, tipo = 'text' }: InputFieldProps) => {
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
          placeholder={ placeholder }
          type={tipo} 
      />
    </div>
  )
}

export default InputField; 