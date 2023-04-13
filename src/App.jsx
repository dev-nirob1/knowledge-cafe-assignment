import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Body from './Components/Body/Body'
import QuestionAndAnswers from './Components/Q&A/QuestionAndAnswers'

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Body></Body>
      <QuestionAndAnswers></QuestionAndAnswers>
    </div>
  )
}

export default App
