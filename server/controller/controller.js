

const read = (req, res) => {
 const db = req.app.get("db");

 db.get_inventory()
    .then(products => {
     res.status(200).json(products)
    })
         .catch(err => {
             res.status(500).json("err in read")
 })
}

const post = (req, res) => {
    const db = req.app.get("db");
    const {name, price, img} = req.body;

    db.create_product([name, price, img]).then(() => res.status(200).json("all good"))
    .catch(err => {
        res.status(500).json("error in post method")
    })
}

const remove = (req, res) => {
    const db = req.app.get("db");
    const {id} = req.params;

    db.delete_product(id).then(() => res.status(200)).catch(err => {
        res.status(500).json("error in remove method")
    })}

// const update = (req, res) => {
//     const db = req.app.get("db");

// }

module.exports = {
    read,
    post,
    remove
}