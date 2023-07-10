import { editTask } from '@/Api/Task';
import { Modal } from '@shopify/polaris';
import { useState } from "react";
export const EditModal = ({ toggleModal, open, taskInfo,refetch }) => {
    const { taskTitle, completed, _id } = taskInfo
    const [modifiedTask, setModifiedTask] = useState(taskTitle && taskTitle)


    const handleEditTask = () => {
        const modifiedData = {
            taskTitle: modifiedTask,
            completed,
        }
        editTask(_id, modifiedData)
            .then(data => {
                // console.log(data);
                if(data.success){
                    alert("Task modified successfully");
                    refetch()
                    toggleModal()
                }
            }).catch(err => console.log(err.message))
    }
    return (
        <>
            <Modal
                activator={toggleModal}
                open={open}
                onClose={toggleModal}
                title="Edit your task name"
                primaryAction={{

                    content: 'Modify',
                    onAction: handleEditTask,
                }}
                secondaryActions={[
                    {
                        content: 'cancel',
                        onAction: toggleModal,
                    },
                ]}
            >
                <Modal.Section>
                    <input type="text" name="taskName" className='px-5 py-2.5 rounded-md shadow bg-slate-200 text-black w-full' value={modifiedTask} onChange={(e) => setModifiedTask(e.target.value)} />
                </Modal.Section>
            </Modal>
        </>
    )
}
