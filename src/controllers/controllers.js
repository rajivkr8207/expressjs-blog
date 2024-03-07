const Blog = require('../models/models')

const Home = async (req,res)=>{
    try {
        const seeblog = await Blog.find();
        res.render('index', {seeblog: seeblog})
    } catch (error) {
        console.log(`Error hai bhai: ${error}`)
    }
}

const NewBlog = (req,res)=>{
    try {
        res.render('newblog')
    } catch (error) {
        console.log(`Error hai bhai: ${error}`)
    }
    
}

const DeleteBlog = async (req,res)=>{
    try {
        await Blog.findByIdAndDelete(req.params.id)
        res.redirect('/')
    } catch (error) {
        console.log(`Error hai bhai: ${error}`)
    }
    
}

const AddNewBlog = (req,res)=>{
    try {
        const addblog = new Blog({
            title: req.body.title,
            description: req.body.description,
            author: req.body.author
        })
        addblog.save().then(()=>{
            res.redirect('/')
        })
    } catch (error) {
        console.log(`Error hai bhai: ${error}`)
    }
    
}

const EditBlog = async (req,res)=>{
    try {
        const editbg  = await Blog.findById({_id:req.params.id})

        res.render('editblog', {editbg:editbg})
    } catch (error) {
        console.log(`Error hai bhai: ${error}`)
    }
}
const EditpostBlog = async (req,res)=>{
    try {
        const updateblog = await Blog.findByIdAndUpdate(req.params.id,req.body,{new:true})

        if(!updateblog){
            res.send("error")
        }else{
            res.redirect('/')
        }
    } catch (error) {
        console.log(`Error hai bhai: ${error}`)
    }
}
const ReadBlog =  async (req,res)=>{
    try {
        const showblog = await Blog.findOne({_id:req.params.id})
        if(!showblog){
            res.redirect('/')
        }
        res.render('readblog', {showblog:showblog})
    } catch (error) {
        console.log(`Error hai bhai: ${error}`)
    }
}
module.exports = {Home, NewBlog, AddNewBlog, EditBlog, ReadBlog, DeleteBlog, EditpostBlog}