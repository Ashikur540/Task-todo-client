import { completeTask, deleteTask } from "@/Api/Task";
import { Button, Icon, Text, Toast } from "@shopify/polaris";
import {
    ComposeMajor,
    DeleteMinor,
    TickMinor
} from '@shopify/polaris-icons';
import { useCallback, useEffect, useState } from 'react';
import { EditModal } from "./EditModal";

export const TaskCard = ({ task, refetch, toggleModal, open, taskInfo, setTaskInfo }) => {
    const { taskTitle, _id, completed } = task;
    const [active, setActive] = useState(false);


    useEffect(() => {
        setTaskInfo(task);
    }, [task]);
    // for toast
    const toggleActive = useCallback(() => setActive((active) => !active), []);




    const modalHandler = (task) => {
        toggleModal();
        setTaskInfo(task)
        // console.log(taskInfo, task?.taskTitle, open)

    }




    // modal acrtivator
    const activator = <Button icon={ComposeMajor} onClick={() => modalHandler(task)}></Button>;


    const handleDeleteTask = (id) => {
        deleteTask(id).then(data => {
            // console.log(data);
            if (data.acknowledged) {
                toggleActive()
                active ? (
                    <Toast content="Message sent" onDismiss={toggleActive} />
                ) : null;

                alert("task Deletion successfull")
                refetch()
            }
        })
    }
    const handleCompleteTask = (id) => {

        completeTask(id).then(data => {
            // console.log(data);
            if (data.acknowledged) {
                toggleActive()
                active ? (
                    <Toast content="Message sent" onDismiss={toggleActive} />
                ) : null;
                alert("task completed")
                refetch()
            }
        })
    }
    return (
        <>

            <div className="flex justify-between mt-4 bg-white shadow-md px-6 py-3.5 rounded-md">
                <Text variant="headingSm" as="h6" >
                    {completed ? <span style={{ textDecoration: 'line-through' }}>
                        {taskTitle} ✔
                    </span>
                        :
                        <span>{taskTitle}❌</span>
                    }
                </Text>

                <div className="flex gap-4 justify-center">
                    {!completed && <Button icon={TickMinor} onClick={() => handleCompleteTask(_id)}></Button>}
                    <>
                        {activator}
                    </>
                    {open && <EditModal taskInfo={taskInfo} toggleModal={toggleModal} open={open} />}
                    <button onClick={() => handleDeleteTask(_id)}><Icon source={DeleteMinor} color="critical" /></button>

                </div>


            </div >

        </>
    )
}
