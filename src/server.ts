import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';

// import routes
import indexRoutes from './routes/indexRoutes';
import PostRouter from './routes/PostRoutes';
import UserRoutes from './routes/UserRoutes';
import EstadoRoutes from './routes/EstadoRoutes'

// Server Class
class Server {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    public config(): void {
        // Settings
        this.app.set('port', process.env.PORT || 4000);
        // middlewares
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
        this.app.use(helmet());
        this.app.use(compression());
        this.app.use(cors());
    }

    public routes(): void {
        const router: express.Router = express.Router();

        this.app.use('/', indexRoutes);
        this.app.use('/api/posts', PostRouter);
        this.app.use('/api/users', UserRoutes);
        this.app.use('/api/estados', EstadoRoutes)
    }

    public start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Servidor corriendo en el puerto', this.app.get('port'));
        });
    }
}

export { Server } ;