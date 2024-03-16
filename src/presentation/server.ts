import express, { Router } from 'express';
import '../infraestructure/strategies/discordStrategy';
import passport  from 'passport';
import session from 'express-session'
import cors from 'cors';
interface Options{
  port?: number;
  routes: Router
  
}


export class Server {

  public readonly app = express();
  private readonly port: number;
  private readonly routes: Router;


  constructor( options: Options ) {
    const { port = 3100, routes } = options;

    this.port = port;
    this.routes=routes;

  }


  async start() {

    //Middleware
    this.app.use(cors())
    this.app.use(express.json());
    this.app.use(express.urlencoded({extended:true})); //x-www-urlencoded
    this.app.use(session({secret: "secret" , saveUninitialized:false,resave: false}));
    this.app.use(passport.initialize());
    this.app.use(passport.session());
    this.app.use((req, res, next) => {
      this.app.locals.user = req.user;
      next();
    });
    
    //usar rutas definidas
   this.app.use(this.routes);


    // Escuchar el puerto
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${ this.port }`);
    })

  }

}