import passport from "passport";
import { AuthRepository } from '../../domain/repositories/auth.repository';
import { CustomError, RegisterUser, RegisterUserDto } from "../../domain";
import { Request, Response } from "express";

export class AuthController{

    constructor(private readonly authRepository:AuthRepository){

    }
    static authUser= passport.authenticate('discord');//implictamente tiene un req,res,next
    
    registerUser =async (req: Request,res:Response)=>{//only for testing
        const{email, discordId,username, password,verified}=req.body
        const [error, registerUserDto] = RegisterUserDto.create({
            email:email,
            discordId:discordId||'notgiven',
            password:password,
            username:username,
            verified:verified||false
          });
          if (error) return res.status(400).json({ error });
         new RegisterUser(this.authRepository)
        .execute(registerUserDto!)
        .then(data => res.json(data))
        .catch(error => this.handleError(error, res));
    }
    private handleError = (error: unknown, res: Response) => {
        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({ error: error.message });
        }

        console.log(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}