import { Link, useLocation } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCalendarSolid, LiaCogSolid, LiaCogsSolid, LiaMailBulkSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { PiCalendarBold } from "react-icons/pi";
export default function KanbasNavigation() {
  const { pathname } = useLocation();
  return (
    <div id="wd-kanbas-navigation" style={{ width: 120 }}className="list-group rounded-0 position-fixed
    bottom-0 top-0 d-none d-md-block bg-black z-2">
      <a href="https://www.northeastern.edu/" className="list-group-item bg-black border-0 text-center"><img src="/images/NEU.png" width="75px" /></a>
      <Link to="/Kanbas/Account" id="wd-account-link" className={`${pathname.includes("Account") ? " list-group-item text-center border-0 text-danger bg-white" : "list-group-item text-center border-0 text-white bg-black"}`}>
      <FaRegCircleUser className="fs-1 text text-white" style={{fill:pathname.includes("Account") ? 'grey'  : ''}} /><br />Account</Link>


      <Link to="/Kanbas/Dashboard" id="wd-dashboard-link" className={`${pathname.includes("Dashboard") ? " list-group-item text-center border-0 text-danger bg-white" : "list-group-item text-center border-0 text-white bg-black"}`}>
                    
        <AiOutlineDashboard className="fs-1 text-danger" /><br />Dashboard</Link>


      <Link to="/Kanbas/Courses/12" id="wd-course-link" className={`${pathname.includes("Courses") ? " list-group-item text-center border-0 text-danger bg-white" : "list-group-item text-center border-0 text-white bg-black"}`}>
        <LiaBookSolid className="fs-1 text-danger" /><br />Courses</Link>


      <Link to="/Kanbas/Calendar" id="wd-calendar-link" className={`${pathname.includes("Calendar") ? " list-group-item text-center border-0 text-danger bg-white" : "list-group-item text-center border-0 text-white bg-black"}`}> <LiaCalendarSolid className="fs-1 text-danger" /><br />Calendar</Link>


      <Link to="/Kanbas/Inbox" id="wd-inbox-link"className={`${pathname.includes("Inbox") ? " list-group-item text-center border-0 text-danger bg-white" : "list-group-item text-center border-0 text-white bg-black"}`}><LiaMailBulkSolid className="fs-1 text-danger" /><br />Inbox</Link>
      <Link to="/Labs" id="wd-labs-link"className={`${pathname.includes("Labs") ? " list-group-item text-center border-0 text-danger bg-white" : "list-group-item text-center border-0 text-white bg-black"}`}><LiaCogsSolid className="fs-1 text-danger" /><br />Labs</Link>
    </div>
);}
