import './App.css'
import HeaderContainer from './components/Header/HeaderContainer'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import {Route, Routes} from 'react-router-dom'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = (props) => {
    return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/profile/:userId?" element={<ProfileContainer/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/dialogs" element={<DialogsContainer/>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/users" element={<UsersContainer/>}/>
                    </Routes>
                </div>
            </div>
    )
}

export default App