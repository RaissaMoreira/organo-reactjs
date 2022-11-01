import "./Team.css";

const Team = (props) => {
  return (
    <section className="team" style={{backgroundColor: props.corSecundaria}}>
      <h3 style={{borderColor: props.corPrimaria}}>{props.name}</h3>
    </section>
  )
}

export default Team;