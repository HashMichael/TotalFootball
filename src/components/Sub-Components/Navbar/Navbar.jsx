import { Moon, Search } from 'lucide-react'
import React, { useState } from 'react'
import './Navbar.css'
import dp from '../../../assets/dp.jpeg'
import logo from '../../../assets/logo_light.png'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [userPic, setUserPic] = useState(dp);

  return (
    <div className='nav_cont'>
      <header>
        <nav>
         <img src={logo} alt="logo" width={30} />
          <h3>
             Total Football
          </h3>
          <ul>
            <li><Link className='link'>Home</Link></li>
            <li><Link className='link'>Leagues</Link></li>
            <li><Link className='link'>Clubs</Link></li>
            <li><Link className='link'>Transfer News</Link></li>
            <li><Link className='link'>Live Scores</Link></li>
            <li><input type="text" placeholder='Search'/> <Search color='#333' size={20}/></li>
            <li><div className="dark_mode"><Moon color='#ddd'/></div></li>
            <li><img src={userPic} alt="dp" width={35} height={35}/></li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Navbar