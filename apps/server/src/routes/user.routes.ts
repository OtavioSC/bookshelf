import Router from "express"

const userRouter = Router()

userRouter.get("/", (_, res) => {
  res.send("Hello World")
})

export default userRouter
