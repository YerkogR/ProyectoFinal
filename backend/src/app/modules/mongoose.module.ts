import mongoose, { ConnectionOptions } from "mongoose";

function connect(): Promise<typeof mongoose> {
  const mongoUri = 'mongodb+srv://usuario_Prueba:ruZf3wmxatkm6Uck@cluster0.snnnu.mongodb.net';
  const databaseName = 'Clinica';

  const mongooseOptions: ConnectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }  

  return mongoose.connect(mongoUri + '/' + databaseName, mongooseOptions);
}

export default { connect };