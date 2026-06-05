// La responsabilidad de characters es mapear los personajes y pasarlos a card

function Characters({ characters }) {

    // Validamos que characters no este vacio ni undefined
    if(!characters || characters.length === 0){
        return (
            <>
            <p> No se encontraron personajes. Intenta cargar otra pagina o verifica la conexion.</p>
            </>
        )
    }

  return (
    <div className='row' >
        {/* El map de react no lleva llaves, lleva parentesis */}
        { characters.map((character) => (
            <div key={character.id} className="col mb-5" >
                <div className="card character-card" >
                <img src={character.image} alt={character.name} />
                <div className="card-body" >
                    <h5 className="card-title" > {character.name} </h5>
                    <p className="card-text"> {character.status} </p>
                    <p className="card-text"> {character.species} </p>
                    <p className="card-text"> {character.location.name} </p>
                </div>
                </div>
            </div>
        )) }
    </div>
  )
}

export default Characters