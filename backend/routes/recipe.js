const express = require('express');
const router = express.Router();
const recipeCtrl = require('../controllers/recipe');

router.get('/', recipeCtrl.getAllRecipes);
router.post('/', recipeCtrl.createRecipe);
router.get('/:id', recipeCtrl.getOneRecipe);
router.put('/:id', recipeCtrl.editOneRecipe);
router.delete('/:id', recipeCtrl.deleteOneRecipe);

module.exports = router;