import {Request, Response} from 'express';
import User from './user';
import bcrypt from 'bcryptjs';
import logger from './logger'



const registerUser = async (req: Request, res: Response) => {
    logger.debug('Step 1- Initializing user registration');

    try{
        const salt = await bcrypt.genSaltSync(10);
        const password = await req.body.password;
        

        const newUser = new User({
            userName: req.body.userName,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: bcrypt.hashSync(password,salt),
            phoneNumber: req.body.phoneNumber,
            gender: req.body.gender
        });

        User.create(newUser,(error,createdUser) => {
            logger.debug('Step- 2 Registering the new user');
            if (error){
                logger.error(error.message);
                res.status(400).json({status:"error", statusCode:400, message:error.message});


                
            }
            else{
                const message = createdUser.firstName + ' ' + createdUser.lastName + ' is registered successfully!';
                logger.debug('Step 3: ' + message);
                res.status(201).json({ status: "success", statusCode: 201, message: message });
            }


        });
    } catch(error) {
        console.log(error);
        res.status(400).json({status: "error", statusCode: 400, message: error.message});
        
    }

}

export default registerUser;
