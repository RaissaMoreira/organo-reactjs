import { IColaborador } from "../../shared/interfaces/IColaborador";
import Colaborador from "../Colaborador";
import "./Team.css";

interface TeamProps {
  corPrimaria: string,
  name: string,
  colaboradores: IColaborador[],
  corSecundaria: string
}

const Team = (props: TeamProps) => {
  return (
    props.colaboradores.length > 0 ? <section className="team" style={{backgroundColor: props.corSecundaria}}>
      <h3 style={{borderColor: props.corPrimaria}}>{props.name}</h3>
      <div className="colaboradores">
        {props.colaboradores.map(colaborador => 
          <Colaborador 
            corDeFundo={props.corPrimaria} 
            key={colaborador.nome} 
            nome={colaborador.nome} 
            cargo={colaborador.cargo} 
            imagem={colaborador.imagem} 
          />)}
      </div>
    </section> : <></>
  )
}

export default Team;