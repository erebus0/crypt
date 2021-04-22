
import express, {Application, Request, Response, NextFunction} from 'express';

const app: Application = express();

app.get('/',(req: Request, res: Response) => {
    res.send('Application is running');
});

const port: number = 5000;
app.listen(port, () => {
    return console.log(`server is running on port - ${port}`); 
});
