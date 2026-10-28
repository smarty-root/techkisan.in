const express=require('express');
const app=express();
require("dotenv").config()
const dbconnect=require("./configs/mongoose-connection")
const cors=require("cors")
const indexRoutes=require("./routes/indexRoute")
const userRoutes=require("./routes/userRoutes")
app.use(cors(
    { origin: ["http://localhost:5173","https://techkisan.com","http://localhost:3001"] ,
        credentials: true  ,
    }
    
));
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use("/",indexRoutes)
app.use("/user",userRoutes)



app.listen(process.env.PORT,()=>console.log(`Server is running on port ${process.env.PORT}`));