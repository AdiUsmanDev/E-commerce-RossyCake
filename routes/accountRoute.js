const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController');
const auth = require('../middleware/auth');

router.get('/getting', auth, accountController.getProfile);
router.put('/updating', auth, accountController.updateProfile);
router.delete('/deleting', auth, accountController.deleteProfile);


module.exports = router;
