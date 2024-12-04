import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const { pathname } = useLocation();
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      <Link to={`/Kanbas//Signin`} className={`${pathname.includes("Signin") ? 
        "list-group-item active border border-0" :
         "list-group-item text-danger border border-0"}`} > Signin  </Link> 
      <Link to={`/Kanbas//Signup`}  className={`${pathname.includes("Signup") ? 
          "list-group-item active border border-0" :
           "list-group-item text-danger border border-0"}`}> Signup  </Link> 
      <Link to={`/Kanbas//Profile`} className={`${pathname.includes("Profile") ? 
          "list-group-item active border border-0" :
           "list-group-item text-danger border border-0"}`}> Profile </Link> 
      {currentUser && currentUser.role === "ADMIN" && (
       <Link to={`/Kanbas/AccountUsers`} className={`list-group-item border border-0 ${pathname.includes("Users")?"active":"" }`}> Users </Link> )}
    </div>

);}
