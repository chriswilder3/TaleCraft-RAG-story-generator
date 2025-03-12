import './App.css'
import Index from './components/index/Index'
import Layout from './Layout';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
function App() {
  
  return (
    <>
      < Router>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route index element={<Index />} />
          </Route>
        </Routes>
      </Router>  
    </>
  )
}

export default App
