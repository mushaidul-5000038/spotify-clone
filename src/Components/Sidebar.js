import './Sidebar.css'
import SidebarOption from './SidebarOption'
import HomeIcon from '@material-ui/icons/Home'
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import SearchIcon from '@material-ui/icons/Search';
import AddBoxIcon from '@material-ui/icons/AddBox';
import FavoriteIcon from '@material-ui/icons/Favorite';




const Sidebar = () => {
    
    
    return (
        <div className='sidebar'> 
            <img src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg' alt='spotify_sb_logo' className='sidebar_logo'/>
            
            
                <SidebarOption Icon={HomeIcon} title='Home'/>
                <SidebarOption Icon={SearchIcon} title='Search'/>
                <SidebarOption Icon={LibraryMusicIcon} title='Your Library'/>
                <div className='gap'></div>

                <SidebarOption Icon={AddBoxIcon} title='Create Playlist'/>
                <SidebarOption Icon={FavoriteIcon} title='Liked Songs'/>

                <hr/>
                 
                {/* {playlists?.items?.map((playlist) => <SidebarOption title={playlist.name}/>)} */}
                
                 <SidebarOption title='Nightstorms'/> 
                 <SidebarOption title='Discover Weekly'/>
                 <SidebarOption title='Folk and Acoustic Mix'/> 

        
        </div>
    )
}

export default Sidebar
