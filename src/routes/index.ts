import { Router } from 'express';
import User from './api/user'
import Task from './api/task'

const router = Router()

router.use('/user', User)
router.use('/task', Task)

export default router