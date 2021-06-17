import './App.css';
import {useEffect,useState} from 'react'
import Login from './Components/Login'
import {getTokenFromUrl} from './Components/Spotify'
import SpotifyWebApi from "spotify-web-api-js"
import { useDataLayerValue} from './DataLayer'
import Player from './Components/Player';

export const spotify = new SpotifyWebApi()

function App() {

  const [{ user,token},dispatch]=useDataLayerValue()

  useEffect(()=>{
     const hash = getTokenFromUrl()
     window.location.hash=""
    const _token =hash.access_token
    
    if(_token){
      
      console.log(_token)
      dispatch({
        type:'SET_TOKEN',
        token:_token
      })

      spotify.setAccessToken(_token)
      spotify.getMe().then((user) => {
        
        dispatch({
          type: 'SET_USER',
          user: user,
        })

      })
      //4GpBODwgLjOwL6JcBunQcr
      // 37i9dQZF1DX4aYNO8X5RpR
      spotify.getPlaylist('4GpBODwgLjOwL6JcBunQcr').then((response)=>{
        dispatch({
          type:'SET_PLAYLIST',
          response:response
        })
      })
    }
     console.log('This is a user ->',user?.id)
  
  },[dispatch])

  return (
    <div className="App">
      
      {
        token? (
         <Player spotify={spotify}/>
        )
        : (
        <Login/>
        )
      }
    </div>
  );
}

export default App;
