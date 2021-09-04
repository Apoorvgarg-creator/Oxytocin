const shop_adder = async (req,res,db)=>{
    db('shops')
    .insert({
        id:req.body.From,
        name:req.body.Body
    })
    .then(data=>{
        res.json(data[0]);
    })

    console.log("done");
}

const shop_db_adder = async(req,db)=>{
    db.schema.withSchema('public').createTable( req.body.Body , function (table) {
    table.text('id');
    table.text('name');
    table.text('inventory');
    })
    .catch(err => console.log(err))
    console.log("completed")
}

module.exports = {
    shop_adder,
    shop_db_adder
}