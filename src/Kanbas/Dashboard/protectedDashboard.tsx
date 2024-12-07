import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import * as userClient from "../Account/client";
import { useEffect, useState } from "react";
export default function ProtectedDashboard({ children }: { children: any }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [courses,setCourses] = useState<any[]>([]) 
  const getData = async ()=>{
    const eligibleCourses = await userClient.findCoursesForUser(currentUser._id)
    setCourses(eligibleCourses)
  }
  useEffect(()=>{getData()},[])
  const { cid } = useParams();
  if (courses.length > 1){if (courses.some(course=>course._id == cid)) {
    return children;
  } else {
    return <Navigate to="/Kanbas/Dashboard" />;
  }}
 


}
