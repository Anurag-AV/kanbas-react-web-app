import { Link, useLocation } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
export default function CoursesNavigation() {
  const { pathname } = useLocation();
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      <Link to="/Kanbas/Courses/1234/Home" id="wd-course-home-link"
        className={`${pathname.includes("Home") ? 
        "list-group-item active border border-0" :
         "list-group-item text-danger border border-0"}`}> Home </Link><br />
      <Link to="/Kanbas/Courses/1234/Modules" id="wd-course-modules-link"
        className={`${pathname.includes("Modules") ? 
          "list-group-item active border border-0" :
           "list-group-item text-danger border border-0"}`}> Modules </Link><br />
      <Link to="/Kanbas/Courses/1234/Piazza" id="wd-course-piazza-link"
        className={`${pathname.includes("Piazza") ? 
          "list-group-item active border border-0" :
           "list-group-item text-danger border border-0"}`}> Piazza </Link><br />
      <Link to="/Kanbas/Courses/1234/Zoom" id="wd-course-zoom-link"
        className={`${pathname.includes("Zoom") ? 
          "list-group-item active border border-0" :
           "list-group-item text-danger border border-0"}`}> Zoom </Link><br />
      <Link to="/Kanbas/Courses/1234/Assignments" id="wd-course-quizzes-link"
        className={`${pathname.includes("Assignments") ? 
          "list-group-item active border border-0" :
           "list-group-item text-danger border border-0"}`}> Assignments </Link><br />
      <Link to="/Kanbas/Courses/1234/Quizzes" id="wd-course-assignments-link"
        className={`${pathname.includes("Quizzes") ? 
          "list-group-item active border border-0" :
           "list-group-item text-danger border border-0"}`}> Quizzes </Link><br />
      <Link id="wd-course-grades-link"  to="/Kanbas/Courses/1234/Grades"
      className={`${pathname.includes("Grades") ? 
        "list-group-item active border border-0" :
         "list-group-item text-danger border border-0"}`}>Grades</Link><br/>
      <Link to="/Kanbas/Courses/1234/People" id="wd-course-people-link"
        className={`${pathname.includes("People") ? 
          "list-group-item active border border-0" :
           "list-group-item text-danger border border-0"}`} > People </Link><br />
    </div>

    // <div id="wd-courses-navigation">
    //   <Link id="wd-course-home-link"    to="/Kanbas/Courses/1234/Home">Home</Link><br/>
    //   <Link id="wd-course-modules-link" to="/Kanbas/Courses/1234/Modules">Modules
    //     </Link><br/>
    //   <Link id="wd-course-piazza-link"  to="/Kanbas/Courses/1234/Piazza">Piazza</Link><br/>
    //   <Link id="wd-course-zoom-link"    to="/Kanbas/Courses/1234/Zoom">Zoom</Link><br/>
    //   <Link id="wd-course-quizzes-link" to="/Kanbas/Courses/1234/Assignments">
    //       Assignments</Link><br/>
    //   <Link id="wd-course-assignments-link" to="/Kanbas/Courses/1234/Quizzes">Quizzes
    //     </Link><br/>
    //   <Link id="wd-course-grades-link"  to="/Kanbas/Courses/1234/Grades">Grades</Link><br/>
    //   <Link id="wd-course-people-link"  to="/Kanbas/People">People</Link><br/>
    // </div>
);}
