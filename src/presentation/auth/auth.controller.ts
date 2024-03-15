import passport from "passport";

export class AuthController{
    static authUser= passport.authenticate('discord');//implictamente tiene un req,res,next
}