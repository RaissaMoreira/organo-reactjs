import "./InputField.css";

const InputField = (props) => {
  return (
    <div className="input-field">
      <label>{ props.label }</label>
      <input required={props.obrigatorio} placeholder={ props.placeholder } type="text" />
    </div>
  )
}

export default InputField;