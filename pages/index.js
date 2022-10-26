import styles from '../styles/Home.module.css';
import { useState } from 'react';
import axios from 'axios';

import Button from '@atlaskit/button';
import TextField from '@atlaskit/textfield';
import EditFilledIcon from '@atlaskit/icon/glyph/edit-filled';
import TrashIcon from '@atlaskit/icon/glyph/trash';

// const url = 'http://localhost:3000/api/task';
const url = 'https://todo-nextjs-pi.vercel.app/';

export default function Home(props) {
    const [tasks, setTasks] = useState(props.tasks);
    const [task, setTask] = useState({ task: '' });

    const handleInputChange = (e) => {
        let curValue = e.target.value;
        curValue === ''
            ? setTask({ task: '' })
            : setTask((prev) => ({ ...prev, task: curValue }));
    };

    const addTask = async (e) => {
        try {
            if (task._id) {
                //update taks
                const { data } = await axios.put(url + '/' + task._id, {
                    task: task.task,
                });
                let originalTasks = [...tasks];
                const index = originalTasks.findIndex(
                    (t) => t._id === task._id
                );
                let left = originalTasks.slice(0, index);
                let right = originalTasks.slice(index + 1);
                let newTasks = [...left, data.data, ...right];
                setTasks(newTasks);
                setTask({ task: '' });
                console.log(data.message);
            } else {
                //add new task
                const { data } = await axios.post(url, task);
                setTasks((prev) => [...prev, data.data]);
                setTask({ task: '' });
            }
        } catch (err) {
            console.log(err);
        }
    };

    const editTask = async (id) => {
        let curTask = tasks.filter((t) => t._id === id)[0];
        setTask(curTask);
    };

    const deleteTask = async (id) => {
        try {
            const { data } = await axios.delete(url + '/' + id);
            setTasks((prev) => prev.filter((task) => task._id !== id));
            console.log(data.message);
        } catch (err) {
            console.log(err);
        }
    };

    const checkBoxClick = async (id) => {
        try {
            let curTask = tasks.filter((t) => t._id === id)[0];
            const { data } = await axios.put(url + '/' + id, {
                compledted: !curTask.compledted,
            });
            console.log(data);
            let originalTasks = [...tasks];
            const index = originalTasks.findIndex((t) => t._id === id);
            let left = originalTasks.slice(0, index);
            let right = originalTasks.slice(index + 1);
            let newTasks = [...left, data.data, ...right];
            setTasks(newTasks);
            console.log(data.message);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <form className={styles.form_container}>
                    <TextField
                        className={styles.main_input}
                        onChange={handleInputChange}
                        elemAfterInput={
                            <Button
                                appearance="primary"
                                onClick={addTask}
                                isDisabled={task.task === ''}
                            >
                                {task._id ? 'Update' : 'Add'}
                            </Button>
                        }
                        value={task.task}
                    ></TextField>
                </form>
                <div className={tasks.length ? styles.tasks_container : ''}>
                    {tasks.map((task) => (
                        <div className={styles.task_item} key={task._id}>
                            <input
                                type="checkbox"
                                checked={task.compledted}
                                onClick={() => checkBoxClick(task._id)}
                            />
                            <p
                                className={
                                    task.compledted
                                        ? styles.task_text +
                                          ' ' +
                                          styles.line_through
                                        : styles.task_text
                                }
                            >
                                {' '}
                                {task.task}
                            </p>
                            <span
                                onClick={() => editTask(task._id)}
                                className={styles.task_icon}
                            >
                                <EditFilledIcon />
                            </span>
                            <span
                                onClick={() => deleteTask(task._id)}
                                className={styles.task_icon}
                            >
                                <TrashIcon />
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export const getServerSideProps = async () => {
    const { data } = await axios.get(url);
    return {
        props: {
            tasks: data.data,
        },
    };
};
