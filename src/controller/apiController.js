const db = require('../../database/models')


const STATUS_SUCCESS = 'success'
const STATUS_ERROR = 'error'
const STATUS_NOT_FOUND = 'not_found'

module.exports = {
    getUsers(req, res) {
        db.User.findAll()
            .then(users => {
                res
                    .status(200)
                    .json({ 
                        meta: {
                            totalUsers: users.length
                        },
                        data: users,
                        status: STATUS_SUCCESS
                    })
            })
            .catch(error => {
                res
                    .status(500)
                    .json({
                        status: STATUS_ERROR,
                        error,
                    })
            })
        
    },
    getUser(req, res) {
        const { id } = req.params

        db.User.findByPk(id)
            .then(user => {
                
                if (!user) {
                    return res.status(404)
                    .json({
                        status: STATUS_NOT_FOUND
                    })
                    
                }

                res.status(200)
                    .json({
                        data: user,
                        status: STATUS_SUCCESS
                    })
            })
            .catch(error => {
                res
                    .status(500)
                    .json({
                        status: STATUS_ERROR,
                        error
                    })
            })
    },
    createUser(req, res) {
        const body = req.body
        
        db.User.create(body)
            .then(user => {
                res.status(201)
                    .json({
                        data: user,
                        status: STATUS_SUCCESS
                    })
            })
            .catch(error => {
                res
                    .status(500)
                    .json({
                        status: STATUS_ERROR,
                        error
                    })
            })
    },
    updateUser(req, res) {
        const body = req.body

        db.User.update(body, {
            where: {
                id: req.params.id
            }
        })
            .then(() => {

                db.User.findByPk(req.params.id)
                    .then(user => {
                        res.status(201)
                            .json({
                                data: user,
                                status: STATUS_SUCCESS
                            })
                })

            })  
    },
    destroyUser(req, res) {
        db.User.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(() => {
                res.status(200)
                    .json({
                        status: STATUS_SUCCESS
                    })
            })
            .catch(error => {
                res
                    .status(500)
                    .json({
                        status: STATUS_ERROR,
                        error
                    })
            })
    }
}