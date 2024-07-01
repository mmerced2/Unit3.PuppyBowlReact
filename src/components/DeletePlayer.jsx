

const deletePlayer = async (playerId) => {

    
    try {
        const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2403-FTB-ET-WEB-PT/players/${playerId}/`,
            {
                method: 'DELETE',
                headers: { "Content-Type": "application/json" }
            });
        const player = await response.json();
    } catch (err) {
        console.error(
            `Whoops, trouble removing player #${playerId} from the roster!`,
            err
        );
    }
  };

  export default deletePlayer