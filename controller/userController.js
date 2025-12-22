const users = require("../config/connectionDB.js") 

const getAll = (req, res)=>{
  res.send(users)
}

const getOne = (req, res)=>{
  const {id} = req.params
  const user = users.find(u => u.id == id)

  if (!user){
    return res.status(404).json({message: "User not found"})
  }
  res.json(user)
}

const postUser = (req, res)=>{
  const {id, username, age} = req.body

  if(!id || !username || !age){
    return res.status(400).json({message: "Missing fiel"})
  }

  users.push({ id, username, age })
  res.status(201).json(users)
}

const putUser = (req, res)=>{
  const {id} = req.params
  const {username, age} = req.body

  const index = users.findIndex(u => u.id == id)

  if(index == -1){
    return res.status(404).json({message: "User not found"})
  } 
  users[index] = {id:id, username, age}
  res.json(users)
}

const deleteUser = (req, res)=>{
  const {id} = req.params
  const index = users.findIndex(u => u.id == id)
  if(index == -1){
    return res.status(404).json({message: "User not found"})
  }
  users.splice(index, 1)
  res.json(users)

}


module.exports = {getAll, getOne, postUser, putUser, deleteUser}