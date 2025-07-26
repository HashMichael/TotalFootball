import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from './App.jsx'
import Home from './components/Home/Home.jsx'
import Clubs from './components/Clubs/Clubs.jsx'
import Favorites from './components/Favorites/Favorites.jsx'
import { Leagues } from './components/Leagues/Leagues.jsx'
import LiveScores from './components/LiveScores/LiveScores.jsx'
import Players from './components/Players/Players.jsx'
import TransferNews from './components/TransferNews/TransferNews.jsx'
import ClubDetails from './components/ClubDetails/ClubDetails.jsx'
import PlayerDetails from './components/PlayerDetails/PlayerDetails.jsx'

const router = createBrowserRouter([
  {path: '/', element: <Home/>},
  {path: '/clubs', element: <Clubs/>},
  {path: '/favorites', element: <Favorites/>},
  {path: '/leagues', element: <Leagues/>},
  {path: '/livescores', element: <LiveScores/>},
  {path: '/players', element: <Players/>},
  {path: '/transfernews', element: <TransferNews/>},
  {path: '/clubs/:id', element: <ClubDetails/>},
  {path: '/players/:id', element: <PlayerDetails/>}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
