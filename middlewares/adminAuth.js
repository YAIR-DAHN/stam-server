import sequelize from 'sequelize'
import { User } from '../database/index.js'
import jwt from 'jsonwebtoken'

const auth = (req, res, next) => {
    let token = req.headers['authorization']
    if (!token) {
        console.log('No token provided');
        throw new Error('No token provided')

    }
    try {
        token = token.replace('Bearer ', '')
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const { id, role, email } = decoded

        console.log(`id = ${id}, role = ${role} , email = ${email}, params = ${req.params.id}`);
        const user = User.findOne({ where: { id } })
        if (!user) {
            console.log('Invalid token');
            throw new Error('Invalid token')

        }

        else if (role !== "admin" && role !== "editor" && role !== "מנהל" && role !== "עורך") {
            console.log('user role not match');
            throw new Error('user role not match')

        }
        req.user = user
        req.token = token
        req.id = req.body.id

        console.log(`user = ${user} , token = ${token}`);
    } catch (err) {
        console.log(`Invalid token2 ${err}`);
        throw new Error('Invalid token2')
    }


    return next()
}

export default auth