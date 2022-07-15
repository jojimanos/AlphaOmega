import { MongoClient } from 'mongodb';
import nextConnect from 'next-connect';

const client = new MongoClient('mongodb+srv://kanoenaaws:kanoenaaws@cluster0.ztqz6m1.mongodb.net/?retryWrites=true&w=majority', 

{useNewUrlParser: true,
  useUnifiedTopology: true});

async function database(req, res, next) {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db('evangelio');
  return next();
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;  