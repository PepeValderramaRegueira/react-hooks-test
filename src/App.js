import React from 'react';

// Components
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'

export default function App() {

  return (
    <div className="app">
      {ComponentA()}
      {ComponentB()}
    </div>
  )
}
