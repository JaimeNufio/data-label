const express = require('express')
const cors = require('cors')
const fs = require('fs');
const app = express()

const port = 3000

app.use(cors())
app.use(express.json())

app.get('/fetchimage',async(req,res)=>{
  try{

    if (!req.query.url) return
    let file = req.query.url
    let filename = file.substr(file.lastIndexOf('\\') + 1)
    console.log("Get file located at:",file,'filename:',filename)

    await res.sendFile(req.query.url)

  }catch(err){
    console.log(err)
  }
})

app.get("/images",async(req,res)=>{
  try{

    if (!req.query.url) return

    let imageList = []
    await fs.readdir(req.query.url, (err, files) => {



      files = files.filter((img)=>{
        let ext = img.split('.').pop()
        return ['jpeg','jpg','png','gif'].includes(ext) 
      })
      res.json({images:files})
    });

  }catch(err){ 
    console.log(err); 
  }
})

app.get("/folders",async(req,res)=>{
  try{

    if (!req.query.url) return

    const getDirectories = source =>
    fs.readdirSync(req.query.url, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name)

    console.log("Folders:")
    console.log(getDirectories())
    res.json({'classes':getDirectories()})

  }catch(err){ 
    console.log(err); 
  }
})

app.post("/move",async(req,res)=>{
  try{

    if (!req.query.url) return

    const getDirectories = source =>
    fs.readdirSync(req.query.url, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name)

    console.log("Folders:")
    console.log(getDirectories())
    res.json({'classes':getDirectories()})

  }catch(err){ 
    console.log(err); 
  }
})

app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`)
})