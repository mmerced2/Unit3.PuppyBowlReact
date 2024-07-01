import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import {useState,useEffect} from "react"



// Styled components for the search bar
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
  zIndex: 1,
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));




function SearchAppBar() {
 
  const [searchParam, setSearchParam] = useState('');
  const [players, setAllPlayers] = useState([]);
  const [loading, setLoading]=useState();

  useEffect(() => {
    getAllPlayers();
  }, []); 

  const getAllPlayers = async () => {
    try{
        const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2403-FTB-ET-WEB-PT/players')
        const data = await response.json()
        setAllPlayers(data.data.players)
        setLoading()
        console.log(data.data.players)
    }catch(error){
        console.log(error)
        setLoading()
    }
};

const playersToDisplay = searchParam 
? players.filter((player) =>
    player.name.toLowerCase().includes(searchParam)
    )
: players;

 
  return (
    <AppBar position="static">
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Typography variant="h5" style={{ flexGrow: 0.5 }}>
          Welcome to the PuppyBowl 🐾
        </Typography>
        <Button color="inherit" component={Link} to="/players">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/addplayer">
          Add Player
        </Button>


        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            onChange={(e) => setSearchParam(e.target.value.toLowerCase())}
          />
        </Search>
      </Toolbar>
    </AppBar>
  )
}


export default SearchAppBar