import { Router, Request, Response } from 'express';
import {db} from "../mock-db/db";
import {HttpStatus} from "../core/types/http-statuses";


export const testingRouter = Router({});

testingRouter.delete('/all-data', (req: Request, res: Response) => {
    db.blogs=[];
    db.posts=[];
    res.sendStatus(HttpStatus.NoContent);
});