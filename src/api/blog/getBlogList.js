import {axiosGet} from "../index";

const GetBlogList = () => {
  return axiosGet('/api/list');
}

export default GetBlogList;
