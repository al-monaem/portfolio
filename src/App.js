import './App.css';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Error from './pages/Error';

function App() {

  return (
    <div className='overflow-x-clip'>
      <ToastContainer
        bodyClassName="toastBody"
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <BrowserRouter>
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path="*" Component={Error} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
