import {axiosGet} from "../index";

const GetBlog = (name) => {
  return axiosGet(`/api/blog/${name}`);
}
export default GetBlog;
