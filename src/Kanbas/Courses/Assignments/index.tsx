import { BsGripVertical, BsPlus, BsThreeDotsVertical } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { FaCheckCircle, FaCircle, FaPlus } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";
import { Link } from "react-router-dom";
import GreenCheckmark from "../Modules/GreenCheckmark";
export default function Assignments() {
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
        <button
          id="wd-add-assignment-group"
          className="text-nowrap btn btn-lg btn-secondary me-1 float-end"
        >
          <BsPlus className="me-1 fs-2"
          style={{ bottom: "1px" }}/>
          Group
        </button>
        <button
          id="wd-add-assignment"
          className=" text-nowrap btn btn-lg btn-danger me-1 float-end"
        >
          <BsPlus className="me-1 fs-2"
          style={{ bottom: "1px" }}/>
          Assignment
        </button>
        </div>
      </div>
      <br />
      <br />
      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            ASSIGNMENTS 
            <BsThreeDotsVertical className="float-end fs-4 me-2" />
          <BsPlus className="float-end me-4  fs-2"
          style={{ bottom: "2px" }}/>
            <span className="float-end border border-dark rounded-5 fs-6 p-2 me-4"
           >40% of Total</span> 
          </div>
          <ul className=" wd-lessons wd-assignment-list list-group rounded-0">
            <Link
              id="wd-assignment-link"
              className="no-underline"
              to="/Kanbas/Courses/1234/Assignments/123"
            >
              <li className="align-items-center text-nowrap wd-lesson wd-assignment-list-item list-group-item ps-1 d-flex justify-content-between">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="m-2 fs-3" />
                  <TfiWrite className="ms-2 me-4 fs-4" color="green" />
                  <div>
                    <h5 className="mb-0">
                      <strong>A1</strong>
                    </h5>
                    <span className="text-danger fs-6">Multiple Modules </span>{" "}
                    | <strong className="fs-6"> Not available until </strong>
                    <span className="fs-6 mb-0"> May 6 at 12:00am | </span>
                    <br/>
                    <strong className="fs-6"> Due</strong>{" "}
                    <span className="fs-6">May 13 at 11:59pm | 100pts</span>
                  </div>
                </div>
                <div className="ms-auto">
                  <FaCheckCircle
                    style={{ top: "2px" }}
                    className="text-success fs-3 me-4"
                  />
                  <BsThreeDotsVertical className="fs-3" />
                </div>
              </li>
            </Link>
            <Link
              id="wd-assignment-link"
              className="no-underline"
              to="/Kanbas/Courses/1234/Assignments/123"
            >
              <li className="align-items-center text-nowrap wd-lesson wd-assignment-list-item list-group-item ps-1 d-flex justify-content-between">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="m-2 fs-3" />
                  <TfiWrite className="ms-2 me-4 fs-4" color="green" />
                  <div>
                    <h5 className="mb-0">
                      <strong>A2</strong>
                    </h5>
                    <span className="text-danger fs-6">Multiple Modules </span>{" "}
                    | <strong className="fs-6"> Not available until </strong>
                    <span className="fs-6 mb-0"> Jan 6 at 12:00am | </span>
                    <br/>
                    <strong className="fs-6"> Due</strong>{" "}
                    <span className="fs-6">Jan 15 at 11:59pm | 100pts</span>
                  </div>
                </div>
                <div className="ms-auto">
                  <FaCheckCircle
                    style={{ top: "2px" }}
                    className="text-success fs-3 me-4"
                  />
                  <BsThreeDotsVertical className="fs-3" />
                </div>
              </li>
            </Link>
            <Link
              id="wd-assignment-link"
              className="no-underline"
              to="/Kanbas/Courses/1234/Assignments/123"
            >
              <li className="align-items-center text-nowrap wd-lesson wd-assignment-list-item list-group-item ps-1 d-flex justify-content-between">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="m-2 fs-3" />
                  <TfiWrite className="ms-2 me-4 fs-4" color="green" />
                  <div>
                    <h5 className="mb-0">
                      <strong>A3</strong>
                    </h5>
                    <span className="text-danger fs-6">Multiple Modules </span>{" "}
                    | <strong className="fs-6"> Not available until </strong>
                    <span className="fs-6 mb-0"> Aug 3 at 12:00am | </span>
                    <br/>
                    <strong className="fs-6"> Due</strong>{" "}
                    <span className="fs-6">Aug 13 at 11:59pm | 100pts</span>
                  </div>
                </div>
                <div className="ms-auto">
                  <FaCheckCircle
                    style={{ top: "2px" }}
                    className="text-success fs-3 me-4"
                  />
                  <BsThreeDotsVertical className="fs-3" />
                </div>
              </li>
            </Link>
          </ul>
        </li>
      </ul>{" "}
      {/* <h3 id="wd-assignments-title">
          ASSIGNMENTS 40% of Total <button>+</button>
        </h3>
          <ul id="wd-assignment-list">
            <li className="wd-assignment-list-item">
              <a className="wd-assignment-link"
                href="#/Kanbas/Courses/1234/Assignments/123">
                A1 - ENV + HTML
              </a>
              <br />
              Multiple Modules | <strong>Not available until</strong> May 6 at 12:00am |<br /> <strong>Due</strong> May 13 at 11:59pm | 100pts
            </li>
            <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
                href="#/Kanbas/Courses/6240/Assignments/123">
                A1 - CSS+BOOTSTRAP
              </a>
              <br />
              Multiple Modules | <strong>Not available until</strong> May 6 at 12:00am |<br /> <strong>Due</strong> May 13 at 11:59pm | 100pts
            </li>
            <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
                href="#/Kanbas/Courses/5800/Assignments/123">
                A1 - Javascript + REACT
              </a>
              <br />
              Multiple Modules | <strong>Not available until</strong> May 6 at 12:00am |<br /> <strong>Due</strong> May 13 at 11:59pm | 100pts
            </li>
          </ul> */}
    </div>
  );
}
