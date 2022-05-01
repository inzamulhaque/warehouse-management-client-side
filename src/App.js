import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import SignUp from './components/SignForms/SignUp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignIn from './components/SignForms/SignIn';
import ResetPass from './components/SignForms/ResetPass';

function App() {
  return (
    <div className="bg-white dark:bg-black min-h-screen flex flex-col justify-between">
      <div>
        <Header />

        {/* add routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/resetpass" element={<ResetPass />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>

        <ToastContainer />
      </div>

      <Footer />
    </div>
  );
}

export default App;
