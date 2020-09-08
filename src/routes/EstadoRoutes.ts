import { Router, Request, Response, NextFunction} from 'express';
import Estado from '../models/Estado';
import Post from '../models/Post';

class EstadoRouter{
    
    router: Router;

    /** Constructor de la clase para inyectar funcionalidad
    **/
    constructor() {
        this.router = Router();
        this.routes();        
    }

    public async getEstados(req: Request, res: Response):Promise<void>{
        console.log("sin parametros",req.params);
        const estados = await Estado.find();
        res.json({estados});
    }

    public async getEstado(req: Request, res: Response):Promise<void>{
        console.log("parametros",req.params);
        const estado = await Estado.findById(req.params.id);
        res.json(estado);
    }

    public async createEstado(req:Request, res:Response): Promise<void>{
        const {id, idSistema, nombre, descripcion, activo} = req.body;
        const newEstado = new Estado({id, idSistema, nombre, descripcion, activo});
        await newEstado.save();
        res.json({status: res.status, data: newEstado});
    }

    public async updateEstado(req: Request, res: Response): Promise<void>{
        console.log("parametros",req.params);
        const estado = await Estado.findByIdAndUpdate(req.params.id, req.body);
        res.json({status: res.status, data:estado});
    }

    public async deleteEstado(req: Request, res:Response):Promise<void>{
        console.log("parametros a eliminar",req.params);
        await Post.findByIdAndDelete(req.params.id);
        res.json({response: 'Estado Eliminado'})
    }
    routes() {
        this.router.get('/', this.getEstados);
        this.router.get('/:id', this.getEstado);
        this.router.post('/', this.createEstado);
        this.router.put('/:id', this.updateEstado);
        this.router.delete('/:id', this.deleteEstado);
    }
}

const estadoRoutes = new EstadoRouter();
export default estadoRoutes.router;