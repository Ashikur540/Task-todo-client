import instance from "@/axios";

export const getAllTasks = async () => {
    try {
        const res = await instance.get("/tasks");
        // console.log(res);
        return res;
    } catch (error) {
        console.log(error.message)
    }
}
export const getSearchedTask = async (searchKey) => {
  try {
      const res = await instance.get(`/tasks?name=${searchKey}`);
      // console.log(res);
      return res;
  } catch (error) {
      console.log(error.message)
  }
}
// create task 
export const createNewTask = async (taskData) => {
    try {
      const url = `/tasks`;
      const response = await instance.post(url, taskData);
      // console.log(response)
      return response;
    } catch (error) {
      console.log(error.message);
    }
  };

  export const deleteTask = async (id) => {
    try {
        const url = `/tasks/${id}`;
        const res = await instance.delete(url, { data: { id } });
        // console.log(res);
        return res;
      } catch (error) {
        console.log(error.message);
      }
  };

  export const completeTask = async (id,) => {
    try {
        const url = `/tasks/${id}`;
        const res = await instance.patch(url);
        // console.log(res);
        return res;
      } catch (error) {
        console.log(error.message);
      }
  };


  export const editTask=async(id,modifiedData)=>{
    try {
      const url = `/tasks/${id}`;
      const res = await instance.put(url,modifiedData);
      // console.log(res);
      return res;
    } catch (error) {
      console.log(error.message);
    }
  }