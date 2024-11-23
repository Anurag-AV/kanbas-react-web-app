import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/enrollments`;

export const unenroll = async (userId: string, courseId: string) => {
  const { data } = await axios.post(`${COURSES_API}/unenroll`,{userId, courseId});
  return data;
};
export const enroll = async (userId: string, courseId: string) => {
  const { data } = await axios.put(`${COURSES_API}/enroll`, {userId, courseId});
  return data;
};

  
