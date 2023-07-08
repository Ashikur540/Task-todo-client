import { createNewTask } from "@/Api/Task";
import { Box, Form, TextField, Toast } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";

import { useCallback, useState } from "react";

const CreateTask = ({ refetch }) => {
    const [text, setText] = useState("Type your task here...");
    // // useEffect(() => { }, [text])


    const handleChange = useCallback(
        (newValue) => setText(newValue),
        [],

    );
    const handleClearButtonClick = useCallback(() => setText(''), []);

    const handleAddTask = useCallback((e) => {

        let taskTitle = e.target.name.value;
        console.log(taskTitle);
        const taskData = {
            taskTitle, completed: false,
        }
        createNewTask(taskData)
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    <Toast content="Task added successfully"></Toast>
                    refetch()
                }
            })
            .catch(err => {
                console.log(err.message)
            })

    }, []);
    // console.log(text)
    return (
        <Box className="max-w-2xl mx-auto min-h-max">
            <Form onSubmit={handleAddTask}>

                <TextField
                    name="name"
                    label="Task name"
                    value={text}
                    onChange={handleChange}
                    autoComplete="off"
                    clearButton
                    onClearButtonClick={handleClearButtonClick}
                />

                <Box className="pt-4 pb-12">
                    <button type="submit">Submit</button>
                </Box>
            </Form>
        </Box>
    );
};

export default CreateTask;
