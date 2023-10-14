const express = require('express');
const router  = express.Router();

const propertyController = require('../controllers/property');
const authMiddleware = require('../middleware/auth');

router.post('/property/addProperty',authMiddleware.authenticate,propertyController.postAddProperty);

router.put('/property/editProperty/:id',authMiddleware.authenticate,propertyController.putUpdateProperty);

router.get('/property/PropertyList',authMiddleware.authenticate,propertyController.getPopertyList);

router.get('/property/propertyDetails/:id',authMiddleware.authenticate,propertyController.getProperty);

router.delete('/property/deleteProperty/:id',authMiddleware.authenticate,propertyController.deleteProperty);

module.exports = router;