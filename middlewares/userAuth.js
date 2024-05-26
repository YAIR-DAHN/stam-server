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
        const { id } = decoded
        const user = User.findOne({ where: { id } })
        if (!user) {
            console.log('Invalid token');
            throw new Error('Invalid token')

        }
        req.user = user
        req.id = id
        console.log(`req user this: ${req.user}`);
        req.token = token
    } catch (err) {
        console.log('Invalid token');
        throw new Error('Invalid token')
    }


    return next()
}

export default auth