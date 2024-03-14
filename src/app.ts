

// import { envs } from "./config";
// import { MongoDatabase } from "./data/mongodb";
import { AppRoutes } from "./presentation/routes";
import { Server } from "./presentation/server";
import { MongoDatabase } from "./data";
import { envs } from "./config";

(()=>{
 main();
})()
async function main(){
await MongoDatabase.connect({
    mongoUrl: envs.MONGO_URL,
    dbName: envs.MONGO_DB_NAME
});

//todo: inicio de nuestro server
new Server({
    port:3000 ,
    routes: AppRoutes.routes
    
}).start();

}