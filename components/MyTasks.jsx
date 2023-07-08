import { Text } from '@shopify/polaris';
import { useCallback, useState } from 'react';
import { EditModal } from './EditModal';
import { TaskCard } from './TaskCard';
export const MyTasks = ({ allTasks, refetch }) => {
    const [open, setOpen] = useState(false);
    const toggleModal = useCallback(() => setOpen((open) => !open), []);
    const [taskInfo, setTaskInfo] = useState()

    return (
        <>

            <div className="max-w-2xl  mx-auto justify-end">
                <Text variant="headingLg" as="h5" alignment="center" className="mb-4">
                    Tasks Created by you are here
                </Text>



                {
                    !allTasks.length ? <h1 className='text-4xl text-center font-semibold'>No task availabe</h1>
                        :
                        allTasks?.map(task => (
                            <TaskCard task={task} key={task?._id} refetch={refetch} toggleModal={toggleModal} open={open} taskInfo={taskInfo} setTaskInfo={setTaskInfo}/>
                        ))
                }

                {open && <EditModal taskInfo={taskInfo} toggleModal={toggleModal} open={open} refetch={refetch}/>}
            </div>
        </>
    )
}
