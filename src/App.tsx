import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import List from './components/List'
import Form from './components/Form'
import { Sub } from './types';

const INTITIAL_STATE = [
  {
    nick: 'dapelu',
    subMonths: 3,
    avatar:'https://i.pravatar.cc/150?u=dapelu',
    description: 'Dapelu hace de moderador a veces'
  },
  {
    nick: 'luis',
    subMonths: 7,
    avatar:'https://i.pravatar.cc/150?u=kikesaba',
  }
]


interface AppState {
  subs: Array<Sub>
  newSubsNumber: number
}

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([]);
  // const [newSubsNumber, setNewSubsNumber] = useState<AppState["newSubsNumber"]>(0)
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setSubs(INTITIAL_STATE)
  }, [])

  const handleNewSub = (newSub: Sub) => {
    setSubs(subs => [...subs, newSub])
  }


  return (
    <div className='App' ref={divRef}>
      <h1>Followers</h1>
      <List subs={subs} />
      <Form onNewSub={handleNewSub}/>
    </div>
  );
}

export default App;
