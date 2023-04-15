import './App.css'
import Header from './Components/Header/Header'
import Body from './Components/Body/Body'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import QuestionAndAnswers from './Components/Q&A/QuestionAndAnswers'

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Body></Body>
      <QuestionAndAnswers></QuestionAndAnswers>
      <ToastContainer></ToastContainer>

    </div>
  )
}

export default App
