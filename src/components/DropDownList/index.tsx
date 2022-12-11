import './DropDownList.css';

interface DropDownListProps {
  aoAlterado: (valor: string) => void,
  label: string,
  obrigatorio: boolean,
  valor: string,
  itens: string[]
}

const DropDownList = (props: DropDownListProps) => {
  return (
    <div className='dropDrown-list'>
      <label>{props.label}</label>
      <select 
        value={props.valor} 
        onChange={event => props.aoAlterado(event.target.value)} 
        required={props.obrigatorio}>
        <option value=""></option>
        {props.itens.map(item => {
          return <option key={item}>{ item }</option>
        })}
      </select>
    </div>
  )
}

export default DropDownList;