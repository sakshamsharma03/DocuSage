import express from "express";
import cors from "cors"
import multer from "multer"

const app=express();
const upload=multer({dest:"uploads/"})

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// mongoose.connect("mongodb+srv://sharmasaksham0309:e4swc49jmhtwHZ56@cluster0.r9dwucm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
//     {
        
//     }
// ).then(()=>console.log("DB Connected")).catch((err)=>(console.log(err)))
 

// app.get("/",(req,res)=>{
//     res.send("chlra hai bhai");

// })
// app.post("/create",async (req,res)=>
// {
//     const {name,email,password}=req.body;
//     let user=await User.findOne({email});
//     if(user) return res.status(500).send("Already Registered");

//     bcrypt.genSalt(10,(err,salt)=>
//     {
//         bcrypt.hash(password,salt, async (err,hash)=>
//         {
//             const newUser= await User.create({
//                 name,email,password:hash,
//             }).then(console.log("successfull")).catch((console.error()));
            
//           let token = jwt.sign({email:email},"secret");
//           res.cookie("token",token);
//           res.send("registered");
//         })
//     })
// })

// app.post("login",async (req,res)=>
// {
    
// })
 app.get("/",(req,res)=>
{
    res.send("Server is Working")
})
const data=[];
app.post("/upload", upload.single("file"), (req, res) => {
    const prompt = req.body.prompt;
    const file = req.file;
    
    if (!prompt || !file) {
      return res.status(400).send("Missing prompt or file");
    }
  
    console.log("Received prompt:", prompt);
    console.log("Received file:", file);
  
    // Process the file and prompt as needed
    res.send("File and prompt successfully uploaded");
  });
  

app.listen(process.env.PORT || 4000);