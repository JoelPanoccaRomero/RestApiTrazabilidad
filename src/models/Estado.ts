import { Schema, model } from 'mongoose';
const  EstadoSchema = new Schema({
    id: {type: Number, required:true, unique:true},
    idSistema: {type:Number, required:true},
    nombre: {type:String, required:true},
    descripcion: {type:String, required:true},
    activo: {type: Boolean, default: true},
    fechaCreacion: {type:Date, default: Date.now()},
    fechaActualizacion: {type:Date},
    usuarioCreacion: {type:String},
    usuarioModificacion: {type:String}
});

export default model("Estado", EstadoSchema);