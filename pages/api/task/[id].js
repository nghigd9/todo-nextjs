import Task from "../../../models/Task";
import dbConnect from "../../../utils/dbConnect";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
    const {method} = req;
    const {id} = req.query;

    await dbConnect();

    if (method === "PUT") {
        try {
            const result = await Task.findByIdAndUpdate(
                id,
                { $set : req.body},
                {new : true}
            )
            res.status(200)
                .json({data :  result, message : "Task updated successfully"});

        } catch(err) {
            console.log(err);
            return res.status(500).json({message : "Internal server error"});
        }
    }

    if (method === "DELETE") {
        try {
            await Task.findByIdAndDelete(id);
            res.status(200).json({message : "Task deleted successfully"});
        } catch (err) {
            console.log(err);
            return res.status(500).json({message : "Internal server error"});
        }
    }
}