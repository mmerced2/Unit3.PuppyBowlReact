import { useParams ,  useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';



const SinglePlayer = () => {
    const [player, setPlayer] = useState({})
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const { id } = useParams()
    const navigate = useNavigate();

    useEffect(() => {
        async function getData() {
            try {
                const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2402-FTB-ET-WEB-PT/players/${id}`)
                const data = await response.json()
                if (!response.ok) {
                    throw new Error("Player not found")
                }
                setPlayer(data.data.player)
                setLoading(false)
            } catch (error) {
                console.log(error)
                setLoading(false)
                setError(error.message)
            }
        }
        getData()
    }, [])


    return (
        <>
            {error ? (
                <h1>{error}</h1>
            ) : player ? (
                <>
             <Card>
                    <CardContent>
                    <CardMedia component="img"  height="300" width="200" image={player.imageUrl || "https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/dog-face.jpg"} alt={player.name}/>
                    
                    <Typography gutterBottom variant="h5" component="div">
                     {player.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Breed: {player.breed}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Status: {player.status}
                    </Typography>
                    <Typography variant='body2' color="text.secondary">
                    Created At: {player.createdAt}
                    </Typography>
                    <Typography variant='body2' color="text.secondary">
                    Updated At: {player.updatedAt}
                    </Typography>
                    </CardContent>
                    
                    <Grid container spacing={1} justifyContent="center">
                    <CardActions>

                    <Grid item>
                    <Button variant="contained" color="primary" onClick={() => navigate(-1)}>Back to All Players</Button>
                    </Grid>
                    </CardActions>
                    </Grid>
      
                    
                    </Card>
                </>



            ) : (
                <h1>Loading....</h1>
            )}
        </>
    )
}
export default SinglePlayer
