// This is half implemented don't try to run
const update_inventory = async (req,res,db)=>{
    db.select('*').from('shops')
    .where('id','=',req.body.From)
    .then(data=>{
        table_name = data[0].name;
    })
    .catch(error => res.status(404).json("incorrect"))

    db.select('*').from(table_name)
    .where('id','=',req.body.Body)
    .update({
    inventory: req.body.new_data
    })
    .then(data=>{
        res.json(data);
        console.log(data);
    })
    .catch(error => res.status(404).json("incorrect"))
}
module.exports = {
    update_inventory
}