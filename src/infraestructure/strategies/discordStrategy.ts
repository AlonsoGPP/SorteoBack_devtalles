import {Strategy} from 'passport-discord';
import passport from 'passport';
import { UserDocument, UserModel } from '../../data/mongodb/models/user.model'
import {envs} from '../../config'

import { UserRepositoryImpl } from '../repositories/user.repository.impl';
import { UserDatasourceImpl } from '../datasources/user.datasource.impl';
import { RegisterUser } from '../../domain';
import { AuthRepositoryImpl } from '../repositories/auth.repository.impl';
import { AuthDatasourceImpl } from '../datasources/auth.datasource-mongo.impl';
import { RegisterUserDto } from '../../domain/dtos/register-user.dto';

passport.serializeUser((user, done) => { 
    done(null, user.id); 
});                                                                                                              
passport.deserializeUser(async (id,done)=>{
    try{
        const findUser= await UserModel.findById(id);
        if(!findUser) throw new Error('Usuario no encontrado');
        done(null,findUser);
    }catch(err){
        done(err, null);
    }
});
passport.use(//modificar scopes de  acuerdo a requerimientos
    new Strategy(
      {
        clientID: envs.DISCORD_CLIENT_ID,
        clientSecret: envs.DISCORD_CLIENT_SECRET,
        callbackURL: '/api/auth/discord-redirect',
        scope: ["identify","email", "guilds"],
      },
      async (accessToken, refreshToken, profile, done) => {
        const userRepository= new UserRepositoryImpl(new UserDatasourceImpl(UserModel));
        try {
          const user = await userRepository.getOne({ discordId: profile.id });
            //TODO:validar que el usuario este en guild indicado en env
          if (user) return done(null, user);//caso donde el usuario ya existe
          // const newUser = new UserModel({
          //   discordId: profile.id,
          //   email:profile.email,
          //   username: profile.username,
          //   guilds: profile.guilds,
          // });
          const newUser = new UserModel({
            email:profile.email,
            discordId:profile.id,
            username:profile.username,
            verified:true 
          });
  
          // const savedUser = await userRepository.create(newUser); // en este caso sucede registro
          //const savedUser= await new RegisterUser(new AuthRepositoryImpl(new AuthDatasourceImpl())).execute(registerUserDto!);
          done(null, newUser);
        } catch (error: any) {
          console.error(error);
          return done(error  , undefined);
        }
      }
    )
  );