import {Strategy} from 'passport-discord';
import passport from 'passport';
import { UserModel } from '../mongodb/user.model';
import {envs} from '../../config'

passport.serializeUser((user, done) => { //aqui da el error
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
        callbackURL: '/api/discord/auth-redirect',
        scope: ["identify","email", "guilds"],
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          const user = await UserModel.findOne({ discordId: profile.id });
  
          if (user) return done(null, user);
  
          const newUser = new UserModel({
            discordId: profile.id,
            email:profile.email,
            username: profile.username,
            guilds: profile.guilds,
          });
  
          const savedUser = await newUser.save();
          done(null, savedUser);
        } catch (error: any) {
          console.error(error);
          return done(error  , undefined);
        }
      }
    )
  );