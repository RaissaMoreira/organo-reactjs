import "./InputField.css";

const InputField = (props) => {
  const aoDigitar = (event) => {
    props.aoAlterado(event.target.value);
  }

  return (
    <div className="input-field">
      <label>{ props.label }</label>
      <input value={props.valor} onChange={aoDigitar} required={props.obrigatorio} placeholder={ props.placeholder } type="text" />
    </div>
  )
}

export default InputField; 