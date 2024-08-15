import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AppScreen from "./assets/components/appScreen";
import Nav from "./assets/components/nav";
import ApeWithFriendsList from "./assets/components/appListScreen";
import HeroScreen from "./assets/components/heroScreen";
import EarnMoreCoinsScreen from "./assets/components/earnMoreScreen";
import ApeModeScreen from "./assets/components/apeModes";
import DailyRewardsComponent from "./assets/components/earnRewards";
import ComingSoonComponent from "./assets/components/comingSoon";
import InviteFriendsComponent from "./assets/components/inviteFriends";
import AdminLoginComponent from "./assets/components/adminLogin";
import ContentManagementComponent from "./assets/components/contactCM";
import AnalyticsComponent from "./assets/components/analytics";
import AddNewGraphicComponent from "./assets/components/addNewGraphics";
import { Route, Routes, useLocation } from "react-router-dom";
import PasswordRecovery from "./assets/components/passwordRecov";
import TwoFA from "./assets/components/2fac";
import UserManagementComponent from "./assets/components/user/usrMgmt";
import EditUserDetailsComponent from "./assets/components/user/editUser";
import AddUserDetailsComponent from "./assets/components/user/addUser";
import FeedbackComponent from "./assets/components/user/feedback";
import Settings from "./assets/components/user/setting";
import ApeWithFriendsFeatures from "./assets/components/apeWithFriends";
import AddNewGraphicTimerComponent from "./assets/components/addNewGraphics";
import MainMenu from "./assets/components/mainMenu";

function App() {
  const [count, setCount] = useState(0);
  const location = useLocation();

  const showNavbar = location.pathname !== "/dashboard";
  return (
    <>
      {showNavbar && <Nav />}
      <Routes>
        <Route path="/" element={<AppScreen />} />
        <Route path="/signup" element={<HeroScreen />} />
        <Route path="/dashboard" element={<AnalyticsComponent />} />
        <Route path="/login" element={<AdminLoginComponent />} />
        <Route path="/forgetpaswd" element={<PasswordRecovery />} />
        <Route path="/afl" element={<ApeWithFriendsList />} />
        <Route path="/csc" element={<ComingSoonComponent />} />
        <Route path="/emcs" element={<EarnMoreCoinsScreen />} />
        <Route path="/apems" element={<ApeModeScreen />} />
        <Route path="/drc" element={<DailyRewardsComponent />} />
        <Route path="/ifc" element={<InviteFriendsComponent />} />
        <Route path="/contmc" element={<ContentManagementComponent />} />
        <Route path="/addngc" element={<AddNewGraphicComponent />} />
        <Route path="/twofa" element={<TwoFA />} />
        <Route path="/usrmgmt" element={<UserManagementComponent />} />
        <Route path="/edituser" element={<EditUserDetailsComponent />} />
        <Route path="/adduser" element={<AddUserDetailsComponent />} />
        <Route path="/feedback" element={<FeedbackComponent />} />
        <Route path="/setting" element={<Settings />} />
        <Route path="/apefriends" element={<ApeWithFriendsFeatures />} />
        <Route
          path="/addnewgraphtimer"
          element={<AddNewGraphicTimerComponent />}
        />
        <Route path="/mainmenu" element={<MainMenu />} />
      </Routes>
    </>
  );
}

export default App;
