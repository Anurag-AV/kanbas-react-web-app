import { FaAlignJustify, FaCheckCircle } from "react-icons/fa";
import CancelCircle from "../Modules/CancelCircle";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { LuImport } from "react-icons/lu";
import { MdDoNotDisturbAlt, MdLabelImportantOutline } from "react-icons/md";
import { TfiAnnouncement, TfiTarget } from "react-icons/tfi";
import { IoBarChartSharp, IoNotificationsOutline } from "react-icons/io5";
import { AiOutlineLineChart } from "react-icons/ai";
import { LiaFileImportSolid } from "react-icons/lia";
import { BiImport } from "react-icons/bi";
export default function CourseStatus() {
  return (
    <div id="wd-course-status" style={{ width: "300px" }}>
      <h2>Course Status</h2>
      <div className="d-flex">
        <div className="w-50 pe-1">
          <button  id="wd-view-progress" className="btn btn-lg btn-secondary w-100 text-nowrap ">
            <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish </button>
        </div>
        <div className="w-50">
          <button id="wd-view-progress" className="btn btn-lg btn-success w-100">
            <FaCheckCircle className="me-2 fs-5" /> Publish </button>
        </div>
      </div><br />
      <button id="wd-view-progress" className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <BiImport className="me-2 fs-5" /> Import Existing Content </button>
      <button id="wd-view-progress" className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons </button>
        <button id="wd-view-progress" className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <TfiTarget className="me-2 fs-5" /> Choose Home Page </button>
        <button id="wd-view-progress" className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <IoBarChartSharp className="me-2 fs-5" /> View Course Stream </button>
        <button id="wd-view-progress" className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <TfiAnnouncement className="me-2 fs-5" /> New Anouncement </button>
        <button id="wd-view-progress" className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <AiOutlineLineChart className="me-2 fs-5" /> New Analysis </button>
        <button id="wd-view-progress" className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <IoNotificationsOutline className="me-2 fs-5" /> View Course Notifications </button>
    </div>

  );
}
