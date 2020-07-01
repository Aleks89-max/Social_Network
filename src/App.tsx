import React from 'react';
import './App.css';
import Header from "./Cmponents/Header/Header";
import Dialogs from "./Cmponents/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import Profile from "./Cmponents/Content/Profile";
import News from "./Cmponents/News/News";
import Music from "./Cmponents/Music/Music";
import Settings from "./Cmponents/Settings/Settings";
import Navbar from "./Cmponents/NavBar/Navbar";
import {StateType} from "./Redux/State";
type AppPropsType = {
    state: StateType
    addPost: (message:string) => void
}

function App( props: AppPropsType ) {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>

                <Header/>
                <Navbar/>

                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <Dialogs data = {props.state.dialogsPage} />}/>
                    <Route path='/profile' render={() => <Profile posts = {props.state.profilePage} addPost={props.addPost} />}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>

                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
