import { Router, Request, Response, json } from 'express';
import { createTask, completeTask, deleteTask, getTaskByUser } from '../../database/task'

const router = Router();

router.get('/:idUser', (req: Request, res: Response) => {
    getTaskByUser(parseInt(req.params.idUser)).then(result => {
        res.status(200).send({success: true, data: result})
    });
});
router.post('/:idUser', (req: Request, res: Response) => {
    createTask(parseInt(req.params.idUser), req.body).then(result => {
        res.status(200).send({success: true, data: result})
    });
});
router.put('/:idTask', (req: Request, res: Response) => {
    completeTask(parseInt(req.params.idTask)).then(result => {
        res.status(200).send({success: true, data: result})
    })
});
router.delete('/:idTask', (req: Request, res: Response) => {
    deleteTask(parseInt(req.params.idTask)).then(result => {
        res.status(200).send({success: true, data: result})
    })
});
export default router;