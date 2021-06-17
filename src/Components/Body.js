import './Body.css'
import Header from './Header'
import { useDataLayerValue }  from '../DataLayer'
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import SongRow from './SongRow'

const Body = () => {
    const [{response},dispatch] = useDataLayerValue()
    
    function htmlDecode(input) {
        var doc = new DOMParser().parseFromString(input, "text/html");
        return doc.documentElement.textContent;
      }
     
    return (
        <div className='body'>
            <Header/>
            <div className='banner'>
                <img src={response?.images[0]?.url} alt='playlist logo'/>

                <div className='playlist_text_info'>
                    <strong>PLAYLIST</strong>
                    <h2>{response?.name}</h2>
                    <p>{htmlDecode(response?.description)}</p>
                    {/* if possible will do the owner info */}
                </div>        
            </div>
            <div className='song_portion'>
                    <div className='top_icons'>
                        <PlayCircleFilledIcon className='play_icon'/>
                        <FavoriteIcon className='fav_icon'/>
                        <MoreHorizIcon className='more_horizon_icon'/>

                    </div>
        

                    <div className='song_list'>
                            <SongRow heading/>
                          
                            <hr/>
                            { response?.tracks?.items.map((item) =>
                                <SongRow track={item.track} item={item}/> 
                            )}
                    </div>
                            

                
                      

           </div>
            
        </div>
    )
}

export default Body
