const app = require("./index")
const connect = require("./configs/db")


app.listen(2345, async (req, res) => {
    try {
        await connect();
        console.log("listening to port 2345");
    } catch (error) {
        console.log(error.message);
    }
})