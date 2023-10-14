const sequelize = require('../util/database');

const Property = require('../models/property');
const User = require('../models/user');



const postAddProperty = async (req, res, next) =>
{
    const t = await sequelize.transaction();
    const role = req.body.role;
    const name = req.body.fname;
    const picture = Buffer.from(req.body.picture);
    const location = req.body.location;
    const price = req.body. price;
    const description = req.body.description;
    const userId = req.user.id;

    try {
                await Property.create({
                    role : role,
                    name : name,
                    picture : picture,
                    location : location,
                    price : price,
                    description : description,
                    userId : userId,
                    transaction: t

                })
                    console.log('property added');
                    await t.commit();
                    res.status(200).json({
                    success: "true",
                    message : 'Successfully added property'})
            } 
                    catch(err){
                        await t.rollback();
                        console.log(err)};
                    
}

const putUpdateProperty = async(req, res, next) => {

    const id = req.params.id;
    const role = req.body.role;
    const name = req.body.fname;
    const picture = Buffer.from(req.body.picture);
    const location = req.body.location;
    const price = req.body. price;
    const description = req.body.description;
    const userId = req.user.id;

    try{
    const prod = await Property.findByPk(id)
    const response = prod.update({
                    role : role,
                    name : name,
                    picture : picture,
                    location : location,
                    price : price,
                    description : description,
                    userId : userId
    })
    res.status(200).json({
        success: true,
        message: "Details updated",
        data: response})
    }
    catch(err){
        res.status(401).json({
            success: false,
            message: "Details update failed",
        })
    }
    
}

const getPopertyList = async(req, res, next) => {
    try{
    const property = await Property.findAll({where : {userId : req.user.id}})
    
    return res.status(200).json({
        success: true,
        message: "Property List",
        propertyList: property,
    })
}
catch(err)
{
    res.status(401).json({
        success: false,
        message: "No list"
    })
}
}

const getProperty = async(req, res, next) => {

    try{
        const property = await Property.findAll({where : {id : req.params.id}})
        
        return res.status(200).json({
            success: true,
            message: "Property details",
            property: property[0],
        })
    }
    catch(err)
    {
        res.status(401).json({
            success: false,
            message: "No such property"
        })
    }
}

const deleteProperty = async(req,res, next) => {
    
    try{
        const t = await sequelize.transaction();
        const response = await Property.destroy({where : {id:req.params.id, userId: req.user.id}, transaction: t})
        console.log("DESTROYED PROPERTY");
        await t.commit();
        res.status(200).json({
            success: true,
            message: "Property deleted",
           })

    }

    catch(err){
        console.log(err);
        res.status(401).json({
            success: false,
            message: "deletion Failed",
        })
    }

}

module.exports = {
    postAddProperty,
    putUpdateProperty,
    getPopertyList,
    getProperty,
    deleteProperty
}