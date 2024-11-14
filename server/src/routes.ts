import { Router, Request, Response } from 'express';

const router = Router();

//ROTAS USER
router.get('/teste', (req: Request, res: Response) => {
    return res.json({ok: true})
})

export {router};
