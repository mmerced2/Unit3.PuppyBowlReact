import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import deletePlayer from "./DeletePlayer";
import CircularProgress from '@mui/material/CircularProgress';


 const AllPlayers = () => {
    const [players, setAllPlayers] = useState([])
    const [loading, setLoading] = useState()
    const navigate = useNavigate()
    const [searchParam, setSearchParam] = useState("");

    
    const filteredPlayers = searchParam ? players.filter((player) =>
        player.name.toLowerCase().includes(searchParam/toLowerCase())
        )
        : players;

    useEffect(()=>{
        async function getData(){
            try{
                const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2403-FTB-ET-WEB-PT/players')
                const data = await response.json()
                setAllPlayers(data.data.players)
                setLoading(false)
                console.log(data.data.players)
            }catch(error){
                console.log(error)
                setLoading(false)
            }
        }
        getData()
    }, [])


    if (loading) {
        return <CircularProgress />;
      }
 
  return (
    <div>
   
  
   <Grid container spacing={3} justify="center" alignItems="center">
 
        {filteredPlayers?.map((player)=>{
            
            return (<div className="player" key={player.id} onClick={()=>navigate(`/player/${player.id}`)}>
                    <Grid item="true" key={player.id} xs={12} sm={12} md={12}  >
                    <Grid item="true" xs={12}>
                    <Card>
                    <CardContent>
                    <CardMedia component="img"  height="150" image={player.imageUrl || "https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/dog-face.jpg"} alt={player.name}/>
                    
                    <Typography gutterBottom variant="h5" component="div">
                     {player.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Breed: {player.breed}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Status: {player.status}
                    </Typography>
                    </CardContent>
                    
                    <Grid container spacing={1} justifyContent="center">
                    <CardActions>

                    <Grid item="true">
                    <Button size="small" key={player.id} onClick={()=>navigate(`/player/${player.id}`)}>View Details </Button>
                    </Grid>
                    <Grid item="true">
                    <Button size="small" onClick={() => deletePlayer(player.id)}>Delete Player</Button>
                    </Grid>
                    </CardActions>
                    </Grid>
                    </Card>
                    </Grid>
                    </Grid>
                </div>
            )        
        })}   </Grid>
          </div>
   
    
  )
}

export default AllPlayers