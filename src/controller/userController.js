const users = require("../config/connectionDB.js") 

const getAll = (req, res)=>{
  res.status(200).send(users)
}

const getOne = (req, res, next)=>{
  const {id} = req.params
  const user = users.find(u => u.id == id)

  if (!user){
    const error = new Error("User not found!")
    error.statusCode = 404
    return next(error)
  }

  res.status(200).json(user)
}

const postUser = (req, res, next)=>{
  const {name, age} = req.body 

  if(!name || !age){
    const error = new Error("Missing field")
    error.statusCode = 400
    return next(error)
  }

  users.push({ name, age })

  res.status(201).json({message: "User created successfully✅"})
}

const putUser = (req, res, next)=>{
  const {id} = req.params
  const {name, age} = req.body

  if(!name || !age){
    const error = new Error("Missing field")
    error.statusCode = 400
    return next(error)
  }

  const index = users.findIndex(u => u.id == id)

  if(index == -1){
    const error = new Error ("User not found")
    error.statusCode = 404
    return next(error)
  } 

  users[index] = {id:id, name, age}

  res.status(200).json({message: "User updated successfully✅", data: users[index]})
}

const deleteUser = (req, res, next)=>{
  const {id} = req.params
  const index = users.findIndex(u => u.id == id)

  if(index == -1){
    const error = new Error("User not found!")
    error.statusCode = 404
    return next(error)
  }

  users.splice(index, 1)

  res.status(200).json({message: "User has been deleted!"})
}


module.exports = {getAll, postUser, putUser, deleteUser, getOne}

