const express = require('express')
const router = express.Router()

//item Model
const Item = require('../../modules/Item')

//@route Get api/items
//@desc Get All Items
// @acess Public
router.get('/',(req,res)=>{
    Item.find()
        .sort({date:-1})
        .then(items => res.json(items))
})

//@route POST api/items
//@desc creat a post    
// @acess Public
router.post('/',(req,res)=>{
  const newItem= new Item({
      name: req.body.name
  })
  //saved to db
  newItem.save().then(item => res.json(item))
})

//@route DELETE api/items
//@desc Delete an item    
// @acess Public
router.delete('/:id',(req,res)=>{
    Item.findById(req.params.id)
        .then(item => item.remove().then(()=> res.json({success : true})))
        .catch(err => res.status(404).json({success:false}))

  })

module.exports = router