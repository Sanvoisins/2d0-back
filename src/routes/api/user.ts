import { Router, Request, Response, json } from 'express';
import { createUser, getUser } from '../../database/user';

const router = Router();

router.post('/signin', (req: Request, res: Response) => {
    getUser(req.body.email, req.body.password).then(result => {
        if(result) {
            res.status(200).send({success: true})
        } else {
            res.status(403).send({success: false})
        }
    })
});
router.post('/signup', (req: Request, res: Response) => {
    createUser(req.body).then(result => {
        if(result) {
            res.status(200).send({success: true})
        } else {
            res.status(403).send({success: false})
        }
    })
});
export default router;