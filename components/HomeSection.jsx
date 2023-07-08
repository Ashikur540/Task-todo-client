import { getAllTasks } from '@/Api/Task';
import { Spinner } from '@shopify/polaris';
import { useQuery } from '@tanstack/react-query';
import CreateTask from './CreateTask';
import { MyTasks } from './MyTasks';

export const HomeSection = () => {
    const {
        data: allTasks = [],
        isLoading,
        refetch,
      } = useQuery(["allTasks"], () => getAllTasks().catch(err => console.log(err.message)));

    if (isLoading) return <Spinner size="large" />
    console.log(allTasks)
    // useEffect(()=>{},[allTasks])
  return (
    <div>
        <CreateTask refetch={refetch}/>
        <MyTasks allTasks={allTasks} isLoading={isLoading} refetch={refetch}/>
    </div>
  )
}
