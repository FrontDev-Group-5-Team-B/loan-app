import "./components/pages/About.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

//pages
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/contatPage/Contact";

//  RootLayouts
import Header from "./components/layouts/Header";

// Buttons
import LogIn from "./components/pages/LogIn";
import SignUp from "./components/pages/SignUp";
import DashBoardContainer from "./components/layouts/DashBoardContainer";
import BorrowerLoanInfo from "./components/dashboard/BorrowerLoanInfo";
import Dashboard from "./components/dashboard/Index.dashboard";
import Borrow from "./components/dashboard/Borrow.dashboard";
import History from "./components/dashboard/History";
import LoanApplication from "./components/dashboard/LoanApplication";
import AdminPage from "./components/pages/admin/AdminPage";
import AddAdmin from "./components/pages/admin/AddAdmin";
import Settings from "./components/dashboard/Settings";
import HelpSupport from "./components/dashboard/HelpSupport";
import Profile from "./components/pages/Profile";
import Notification from "./components/pages/Notification";
import Security from "./components/pages/Security";
import LogOut from "./components/dashboard/LogOut"
import DashCollaInfo from "./components/dashboard/DashCollaInfo";
import DashGInfo from "./components/dashboard/DashGInfo";
import LoansGenerated from "./components/dashboard/LoansGenerated";
import LoansDeclined from "./components/dashboard/LoansDeclined";
import LoansRefunded from "./components/dashboard/LoansRefunded";
import PendingLoans from "./components/dashboard/PendingLoans";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      <Route path="login" element={<LogIn />} />
      <Route path="signup" element={<SignUp />} />

      <Route path="dashboard" element={<DashBoardContainer />}>
        <Route index element={<Dashboard />} />
        <Route path="borrow" element={<Borrow />} />
        <Route path="loan_application" element={<LoanApplication />} />
        <Route path="history" element={<History />} />
        <Route path="admin" element={<AdminPage />} />
        <Route path="add_admin" element={<AddAdmin />} />
        <Route path="borrowerloan_info" element={<BorrowerLoanInfo/>}/>
        <Route path="collateral_info" element={<DashCollaInfo/>}/>.
        <Route path="guarantor_info" element={<DashGInfo/>}/>
        <Route path="loansgenerated" element={<LoansGenerated/>}/>
        <Route path="loansdeclined" element={<LoansDeclined/>}/>
        <Route path="loansrefunded" element={<LoansRefunded/>}/>
        <Route path="pendingloans" element={<PendingLoans />}/>

      </Route>

    

      <Route path="dashboard" element={<DashBoardContainer />}>
        <Route index element={<Dashboard />} />
        <Route path="borrow" element={<Borrow />} />
        <Route path="loan" element={<LoanApplication />} />
        <Route path="history" element={<History />} />
        <Route path="settings" element={<Settings />}>
          <Route index element={<Profile />} />
          <Route path="notification" element={<Notification />} />
          <Route path="security" element={<Security />} />
        </Route>

        <Route path="help" element={<HelpSupport />} />
        <Route path="logout" element={<LogOut/>} />
      </Route>
    </>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
