import { getAllTasks, getSearchedTask } from '@/Api/Task';
import { Spinner } from '@shopify/polaris';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import CreateTask from './CreateTask';
import { MyTasks } from './MyTasks';

export const HomeSection = () => {
  const [searchedTask, setSearchedTask] = useState("")
  console.log(searchedTask)


  const {
    data: allTasks = [],
    isLoading,
    refetch,
  } = useQuery(["allTasks"], () => {
    if (searchedTask.length) {
      return getSearchedTask(searchedTask).catch(err => console.log(err.message))
    }
    else
      return getAllTasks().catch(err => console.log(err.message))
  });

  useEffect(() => {refetch() }, [allTasks, searchedTask])


  console.log(allTasks)
  return (
    <div>
      <CreateTask refetch={refetch} />
      <MyTasks
        allTasks={allTasks} isLoading={isLoading} refetch={refetch}
        searchedTask={searchedTask} setSearchedTask={setSearchedTask}
      />
    </div>
  )
}
