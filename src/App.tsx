import React, { useEffect, useState } from 'react';
import './App.css';
import List from './components/List'
import Form from './components/Form'

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


interface Sub {
  nick: string
  avatar: string
  subMonths: number
  description?: string
}

interface AppState {
  subs: Array<Sub>
  newSubsNumber: number
}

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([]);
  const [newSubsNumber, setNewSubsNumber] = useState<AppState["newSubsNumber"]>(0)

  useEffect(() => {
    setSubs(INTITIAL_STATE)
  }, [])


  return (
    <div className='App'>
      <h1>midu subs</h1>
      <List subs={subs} />
      <Form />
    </div>
  );
}

export default App;
