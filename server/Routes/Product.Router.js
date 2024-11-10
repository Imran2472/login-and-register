import express from 'express';
import { UserAuthorization } from '../Validation/Authorization.js';

const router = express.Router();

router.get('/all', UserAuthorization, (req, res)=>{
    res.json(
        [
            {
            id: 1,
             name: 'Product 1',
             price: 123
            },
            {
            id: 2,
             name: 'Product 2',
             price: 143
            },
            {
            id: 3,
             name: 'Product 3',
             price: 143
            },
            {
            id: 4,
             name: 'Product 4',
             price: 143
            },
        ]
    );
})

export default router;