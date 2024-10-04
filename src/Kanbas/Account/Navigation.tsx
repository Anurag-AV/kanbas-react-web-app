import { Link, useLocation } from "react-router-dom";
export default function AccountNavigation() {
  const { pathname } = useLocation();
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      <Link to={`/Kanbas/Account/Signin`} className={`${pathname.includes("Signin") ? 
        "list-group-item active border border-0" :
         "list-group-item text-danger border border-0"}`} > Signin  </Link> 
      <Link to={`/Kanbas/Account/Signup`}  className={`${pathname.includes("Signup") ? 
          "list-group-item active border border-0" :
           "list-group-item text-danger border border-0"}`}> Signup  </Link> 
      <Link to={`/Kanbas/Account/Profile`} className={`${pathname.includes("Profile") ? 
          "list-group-item active border border-0" :
           "list-group-item text-danger border border-0"}`}> Profile </Link> 
           
    </div>

);}
