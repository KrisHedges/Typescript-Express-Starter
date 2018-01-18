import * as express from "express";
import * as bodyParser from "body-parser";
import { Request, Response } from "express";

class App {

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  public app: express.Application;

  private config(): void {
      this.app.use(bodyParser.json());
      this.app.use(bodyParser.urlencoded({ extended: false}));
  }
  private routes(): void {
      const router = express.Router();

      router.get('/', (req: Request, res: Response) => {
        res.status(200).send({
            message: "You can post a JSON Object containing a 'message' key to this URL to get it echoed back to you."
        })
      });

      router.post('/', (req: Request, res: Response) => {
        const data = req.body;
        if (data.message){
          res.status(200).send({message: "Your message: " + data.message});
        } else {
          res.status(500).send({ error: "You needed to send a JSON object with a 'message' key " })
        }
      });

  this.app.use('/', router)
  }
}

export default new App().app;