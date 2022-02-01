import './App.scss';
import React from "react";
import { Routes, Route } from 'react-router-dom'
import { FooterHours } from './footerHours/FooterHours';
import { FooterDays } from './footerDays/FooterDays';
import { Header } from './header/Header';
import { MainContent } from './mainContent/MainContent';
import { TomorrowContent } from './tomorrowContent/TomorrowContent';
import { WelcomeModal } from './welcomeModal/WelcomeModal';

function App() { 
    return (
        <div className="app">
            <WelcomeModal></WelcomeModal>
            <Header/>
                <main>
                    <Routes>
                        <Route path='/' element={<MainContent/>}/>
                        <Route path='/7days' element={<TomorrowContent/>}/>
                    </Routes>
                </main>
                <Routes>
                    <Route path='/' element={<FooterHours/>}/>
                    <Route path='/7days' element={<FooterDays/>}/>
                </Routes>
        </div>
    );
}
export default App;
