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
import RequireAuth from './components/RequireAuth/RequireAuth';
import RequireAuthMyItems from './components/RequireAuth/RequireAuthMyItems';
import AddItem from './components/AddItem/AddItem';
import ManageItems from './components/ManageItems/ManageItems';
import AllItems from './components/AllItems/AllItems';
import UpdateItem from './components/UpdateItem/UpdateItem';
import UpdateQty from './components/UpdateQty/UpdateQty';
import MyItems from './components/MyItems/MyItems';
import NotFound from './components/NotFound/NotFound';
import Orders from './components/Orders/Orders';
import ShowOrders from './components/Orders/ShowOrders';
import Blogs from './components/Blogs/Blogs';

function App() {
  return (
    <div className="bg-white dark:bg-black min-h-screen flex flex-col justify-between">
      <div>
        <Header />

        {/* add routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/alltems" element={<AllItems />} />
          <Route path="/manageitems" element={<RequireAuth>
            <ManageItems />
          </RequireAuth>} />
          <Route path="/additem" element={<RequireAuth>
            <AddItem />
          </RequireAuth>} />
          <Route path="/inventory/:id" element={<RequireAuth>
            <UpdateItem />
          </RequireAuth>} />
          <Route path="/inventoryQty/:id" element={<RequireAuth>
            <UpdateQty />
          </RequireAuth>} />
          <Route path="/oders" element={<RequireAuth>
            <Orders />
          </RequireAuth>} />
          <Route path="/showorders" element={<RequireAuth>
            <ShowOrders />
          </RequireAuth>} />
          <Route path="/myitems" element={<RequireAuthMyItems>
            <MyItems />
          </RequireAuthMyItems>} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/resetpass" element={<ResetPass />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <ToastContainer />
      </div>

      <Footer />
    </div>
  );
}

export default App;