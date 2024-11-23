import EnvironmentVariables from "./EnvironmentVariables";
import HttpClient from "./HttpClient";
import Module from "./Module";
import PathParameters from "./PathParameters";
import QueryParameters from "./QueryParameters";
import WorkingWithObjects from "./WokingWithObjects";
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithArraysAsynchronously from "./WorkingWithArraysAsynchronously";
import WorkingWithObjectsAsynchronously from "./WorkingWithObjectAsynchronously";

export default function Lab5() {
    const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
    return (
      <div id="wd-lab5">
        <h2>Lab 5</h2>
        <div className="list-group">
          <a href={`${REMOTE_SERVER}/lab5/welcome`}          
             className="list-group-item">
             Welcome
          </a>
        </div><hr/>
        <EnvironmentVariables />
        <PathParameters/>
        <QueryParameters/>
        <WorkingWithObjects/>
        <Module/>
        <WorkingWithArrays/>
        <HttpClient/>
        <WorkingWithObjectsAsynchronously/>
        <WorkingWithArraysAsynchronously/>
      </div>
    );
  }
  