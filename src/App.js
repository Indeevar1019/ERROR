import { createBrowserRouter,RouterProvider} from "react-router-dom";
import CustomerRegistration from "./components/Customer/CustomerRegistration";
import Card from "./components/UI/Card";
import classes from './components/Customer/CustomerRegistration.module.css';
import Header from "./components/Layout/Header";
import RetailerLogin from "./components/Retailer/RetailerLogin";
import CustomerLogin from "./components/Customer/CustomerLogin";
import RetailerSignUP from "./components/Retailer/RetailerSignup";
//import AuthProvider from "./contexts/AuthContext";
import { AuthContextProvider } from "./contexts/AuthContext";

import { Container } from "react-bootstrap";
import { UserAuthContextProvider } from "./contexts/UserAuthContext";
import Retailer from "./components/Retailer/Retailer";
import ProtectedRoute from "./components/Retailer/ProtectedRout";
import { Crud } from "./components/Crud";

const router=createBrowserRouter([
  {path:'/',element:<Header/>},
  {path:'/customer', element:<CustomerLogin/>},
  {path:'/retailer',element:<RetailerLogin/>},
  {path:'/customerregistration',element:<CustomerRegistration/>},
  {path:'/retailerhome',element:<ProtectedRoute><Retailer/></ProtectedRoute>},
  {path:'/retailersignup',element:<RetailerSignUP/>},
  {path:'/addcustomer',element:<RetailerSignUP/>},
  {path:'/crud',element:<Crud/>}
]);
  // {path:'/products/:productId',element:<ProductDetail/>};


function App() {
  return (
    <div>
      <AuthContextProvider>
      <RouterProvider router={router}>
          </RouterProvider>
          </AuthContextProvider>
          
          
    </div>
  );
}

export default App;


{/* <AuthContextProvider>
<RouterProvider router={router}>
  <Container className="d-flex align-items-center justify-content-center" style={{minHeight:"100vh"}}>
    <div className="w-100" style={{maxWidth:"400px"}}>
    <RetailerSignUP></RetailerSignUP>
    </div>
    </Container>
    </RouterProvider>
    </AuthContextProvider> */}

 {/* <AuthProvider>

      


        </AuthProvider> */}
