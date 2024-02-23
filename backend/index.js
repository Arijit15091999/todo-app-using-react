const express = require("express");
const { createTodos, updateTodos } = require("./types.js");
const { TodoModel } = require("./db.js");

const PORT = 3000;

const app = express();
app.use(express.json());

app.post("/todo", async function (req, res) {
    const createPayload = req.body;
    const parsedPayload = createTodos.safeParse(createPayload);

    if (!parsedPayload.success) {
        res.status(411).json({
            "msg" :"you sent wrong inputs",
        })
        return;
    }

    //put todes in mogo db

    await TodoModel.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false,
    });

    res.status(200).json({
        msg:"created sucessfully"
    })
    
})

app.get("/todos", async function (req, res) {
    const todos = await TodoModel.find({});
    // console.log(todos);
    res.json({
        todos: todos,
    });
})

app.put("/completed", async function (req, res) {
    // const updatePayload = req.body;
    // const parsedPayload = updateTodos.safeParse(updatePayload);

    // res.json(
    //     parsedPayload
    // );

    // if (!parsedPayload.success) {
    //     if (!parsedPayload.success) {
    //         res.status(411).json({
    //             "msg" :"you sent wrong inputs",
    //         })
    //         return;
    //     }
    // }
    // update the data

    await TodoModel.findOneAndUpdate({
        _id: req.body.id,
    }, {
        completed: true,
    });

    res.json({
        msg: "todo marked completed",
    });
})



app.listen(PORT, function () {
    console.log(`server is running on port ${PORT}`);
})