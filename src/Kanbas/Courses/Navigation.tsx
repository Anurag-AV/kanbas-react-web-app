import { Link, useLocation, useParams } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
export default function CoursesNavigation() {
  const { pathname } = useLocation();
  const { cid } = useParams();
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  return (

<div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
  {links.map((link)=>(
    <Link to ={`${pathname.split(cid?cid:"")[0]}${cid}/${link}`}  id="wd-course-home-link"
        className={`list-group-item border border-0 ${pathname.includes(link) ? 
        " active " :
         "text-danger"}`}> {link} </Link>
  ))}
  </div>
);}
