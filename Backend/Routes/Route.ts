import express, { NextFunction, Request, Response } from 'express'
import logic from '../Logic/RouteLogic'

const userRouter = express.Router()

// allGroups
userRouter.get(
  '/allGroups',
  async (request: Request, response: Response, next: NextFunction) => {
    response.status(200).json(await logic.allGroups())
  },
)

// meetingsByKey
userRouter.get(
  '/meetingByKey/:id',
  async (request: Request, response: Response, next: NextFunction) => {
    const id = +request.params.id
    response.status(200).json(await logic.meetingsByKey(id))
  },
)

// ADD NEW MEETING
userRouter.post(
  '/newMeeting',
  async (request: Request, response: Response, next: NextFunction) => {
    const NewMeeting = request.body
    console.log(NewMeeting)
    response.status(201).json(await logic.addMeeting(NewMeeting))
  },
)

// TEST ROUTE
userRouter.get(
  '/',
  async (request: Request, response: Response, next: NextFunction) => {
    response.status(200).json('Controller working !!!')
  },
)

export default userRouter
