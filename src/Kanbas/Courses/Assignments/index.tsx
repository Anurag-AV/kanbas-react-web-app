import { BsGripVertical, BsPlus, BsThreeDotsVertical } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import { FaCheckCircle, FaTrash } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, deleteAssignment,setAssignments } from "./reducer";
import AssignmentDelete from "./AssignmentDelete";
import * as coursesClient from "../client";
import * as assignmentsClient from "./client";
import { useEffect } from "react";
export default function Assignments() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const createAssignmentForCourse = async () => {
    if (!cid) return;
    const assignment = await coursesClient.createAssignmentForCourse(cid);
    dispatch(addAssignment(assignment));
    return assignment._id
  };

  const deleteTheAssignment = async (assignmentId:string) => {
    if (!assignmentId) return;
    const assignment = await assignmentsClient.deleteAssignment(assignmentId);
    fetchAssignments()
    dispatch(deleteAssignment(assignmentId));
  };
  const fetchAssignments = async () => {
    const assignments = await coursesClient.findAssignmentsForCourse(cid as string);
    dispatch(setAssignments(assignments));
  };
  useEffect(() => {
    fetchAssignments();
  }, []);
  return (
    <div id="wd-assignments">
      <div className="d-flex  justify-content-between w-100">
        <div className="input-group float-end w-50">
          <button className="input-group-text bg-white">
            <GoSearch />
          </button>
          <input
            id="wd-search-assignment"
            type="text"
            className="form-control"
            placeholder="Search"
          />
        </div>
        <div className="float-end d-flex">
          {currentUser && currentUser.role === "FACULTY" && (
            <button
              id="wd-add-assignment-group"
              className="text-nowrap btn btn-lg btn-secondary me-1 float-end"
            >
              <BsPlus className="me-1 fs-2" style={{ bottom: "1px" }} />
              Group
            </button>
          )}
          {currentUser && currentUser.role === "FACULTY" && (
            <button
              id="wd-add-assignment"
              className=" text-nowrap btn btn-lg btn-danger me-1 float-end"
              onClick={

                async () => {
                  let aid = await createAssignmentForCourse();
                navigate(
                  "/Kanbas/Courses/" + cid + "/Assignments/"+aid
                );
              }
            }
            >
              <BsPlus className="me-1 fs-2" style={{ bottom: "1px" }} />
              Assignment
            </button>
          )}
        </div>
      </div>
      <br />
      <br />
      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            ASSIGNMENTS
            {currentUser && currentUser.role === "FACULTY" && (
              <BsThreeDotsVertical className="float-end fs-4 me-2" />
            )}
            {currentUser && currentUser.role === "FACULTY" && (
              <BsPlus
                className="float-end me-4  fs-2"
                style={{ bottom: "2px" }}
              />
            )}
            {currentUser && currentUser.role === "FACULTY" && (
              <span className="float-end border border-dark rounded-5 fs-6 p-2 me-4">
                40% of Total
              </span>
            )}
          </div>
          <ul className=" wd-lessons wd-assignment-list list-group rounded-0">
            {assignments
              .filter((assignment: any) => assignment.course === cid)
              .map((assignment: any) => (
                <li className="align-items-center text-nowrap wd-lesson wd-assignment-list-item list-group-item ps-1 d-flex justify-content-between">
                  <div className="d-flex align-items-center">
                    <BsGripVertical className="m-2 fs-3" />
                    {currentUser && currentUser.role === "FACULTY" && (
                      <Link
                        id="wd-assignment-link"
                        className="no-underline"
                        to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                      >
                        <TfiWrite className="ms-2 me-4 fs-4" color="green" />
                      </Link>
                    )}
                    <div>
                      <h5 className="mb-0">
                        <strong>{assignment.title}</strong>
                      </h5>
                      <span className="text-danger fs-6">
                        {assignment.type}{" "}
                      </span>{" "}
                      | <strong className="fs-6"> Not available until </strong>
                      <span className="fs-6 mb-0">
                        {" "}
                        {assignment.availableDate} at {assignment.availableTime}{" "}
                        |{" "}
                      </span>
                      <br />
                      <strong className="fs-6"> Due</strong>{" "}
                      <span className="fs-6">
                        {assignment.dueDate} at {assignment.dueTime} |{" "}
                        {assignment.points}pts
                      </span>
                    </div>
                  </div>
                  {currentUser && currentUser.role === "FACULTY" && (
                    <div className="ms-auto">
                      <FaTrash
                        className="text-danger me-4 mb-1"
                        data-bs-toggle="modal"
                        data-bs-target={`#${assignment._id}`}
                      />
                      <FaCheckCircle
                        style={{ top: "2px" }}
                        className="text-success fs-3 me-4"
                      />
                      <BsThreeDotsVertical className="fs-3" />
                    </div>
                  )}
                  <AssignmentDelete
                    title={assignment.title}
                    id={assignment._id}
                    deleteAssignment={(id) => {
                      deleteTheAssignment(id)
                    }}
                  />
                </li>
              ))}
          </ul>
        </li>
      </ul>{" "}
    </div>
  );
}
