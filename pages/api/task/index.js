import Task from '../../../models/Task';
import dbConnect from '../../../utils/dbConnect';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
    const { method } = req;

    //
    await dbConnect();

    if (method === "POST") {
        try {
            const newTask = await new Task(req.body).save();
            res.status(200).json({
                data : newTask,
                message : "Task added succesfully!"
            })
        } catch (err) {
            res.status(500).json({ message: "Internal server error" });
            console.log(err);
        }
    }   

    if (method === "GET") {
        try {
            const tasks = await Task.find();
            res.status(200).json({ data: tasks });
        } catch (err) {
            res.status(500).json({ message: "internal server error" });
            console.log(err);
        }
    }
}