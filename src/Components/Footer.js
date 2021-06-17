import './Footer.css'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import VolumeUp from '@material-ui/icons/VolumeUp';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer_left'>
            <img src='https://upload.wikimedia.org/wikipedia/en/c/c2/Radwimps_Your_Name_Album_Cover.jpg' alt='album_pic'/>
            <div className='song_info'>
            <h4 className='song_title'>Dream Lanterns</h4>
            <p className='album_title'>RADWIMPS</p>
            </div>
            </div>

            <div className='footer_center'>
            
            <ShuffleIcon className='except_play_icon'/>
            <SkipPreviousIcon className='except_play_icon'/> 
            <PlayCircleFilledIcon  fontSize='large' className='play_icon'/> 
            <SkipNextIcon className='except_play_icon'/> 
            <RepeatIcon className='except_play_icon'/> 
          
            
            </div>

            <div className='footer_right'>
            <Grid container spacing={2}>
                <Grid item>
                    <QueueMusicIcon className='except_play_icon'/>
                </Grid>
                <Grid item>
                    <VolumeUp className='except_play_icon'/>
                </Grid>
                <Grid item xs>
                    <Slider/>
                </Grid>      
            </Grid>
            
            </div>
            
            
        </div>
    )
}

export default Footer
