import './SongRow.css'
import AccessTimeIcon from '@material-ui/icons/AccessTime';


const SongRow = ({track,item,heading}) => {
    

    function change_date_format (date_to_be_converted){
        const months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
        const date = new Date( Date.parse(date_to_be_converted))
        let after_conversion=months[parseInt(date.getMonth())]+" "+date.getDay()+", "+date.getFullYear()
       
        return after_conversion
          
    }

    function to_minutes_and_seconds (total_miliseconds){
        var total_seconds=parseInt(total_miliseconds)/1000
        var minutes = Math.floor(total_seconds/ 60);
        var seconds = total_seconds - (minutes*60)
        var result_duration = minutes+":"+seconds.toFixed(0)
        return result_duration 

    }

    
    return (
        <div className={`song_row ${heading && 'heading_row'}`}>
            <div className='column_1'>
                {heading && <h4 className='heading_element'>TITLE</h4> }
               {!heading && <img src={track?.album.images[2].url} alt='album_img'/>}
                <div className='song_info'>
                <h4>{track?.name}</h4>
                <p>{track?.artists.map((artist)=>artist.name).join(', ')}</p>
                </div>
            </div>

            <div className='column_2'>
                   
                     {heading? <h4 className='heading_element'>ALBUM</h4>: <p className='album_name'>{track?.album.name}</p>}
    
                    
            </div>

            <div className='column_3' >
                
                {heading? <h4 className='heading_element'>DATE ADDED</h4> :  <p className='album_name'>{change_date_format(item?.added_at)}</p>  }
            </div>

            <div className='column_4'>
                {heading? <AccessTimeIcon fontSize='small'/>: <p className='album_name'>{to_minutes_and_seconds(track?.duration_ms)}</p>}
                
                
            </div>
            
        </div>
    )
}

export default SongRow
