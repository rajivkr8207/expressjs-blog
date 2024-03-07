const express = require('express')
const controllers = require('../controllers/controllers')
const router = express.Router()


router.route('/').get(controllers.Home)
router.route('/newblog').get(controllers.NewBlog)
router.route('/').post(controllers.AddNewBlog)
router.route('/edit/:id').get(controllers.EditBlog)
router.route('/:id').get(controllers.ReadBlog)
router.route('/delete/:id').get(controllers.DeleteBlog)
router.route('/edit/:id').post(controllers.EditpostBlog)




module.exports = router