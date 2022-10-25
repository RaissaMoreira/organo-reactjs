import "./InputField.css";

const InputField = (props) => {
  console.log(props);
  return (
    <div className="input-field">
      <label>{ props.label }</label>
      <input placeholder={ props.placeholder } type="text" />
    </div>
  )
}

export default InputField;