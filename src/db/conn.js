const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://username:123123123@cluster0.v9eosf0.mongodb.net/mernstack?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log(`connection successful`);
}).catch((e) => {
    console.log(`no connection` + e);
})