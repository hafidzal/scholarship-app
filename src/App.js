import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.scss';
import Header from './components/Header';
import Welcome from './components/Welcome';
import ScolarshipProgram from './components/ScolarshipProgram';
import PartnerUniversity from './components/PartnerUniversity';
import Timeline from './components/Timeline';
import ApplicationClosed from './components/ApplicationClosed';
import FAQ from './components/FAQ';

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <ScolarshipProgram />
      {/* <PartnerUniversity /> */}
      <Timeline />
      {/* <ApplicationClosed /> */}
      <FAQ />
    </div>
  );
}

export default App;
