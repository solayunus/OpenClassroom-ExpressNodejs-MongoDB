const Recipe = require('../model/recipe');


exports.createRecipe = (req, res, next) => {
    const recipe = new Recipe({
        title: req.body.title,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions,
        difficulty: req.body.difficulty,
        time: req.body.time,
        _id: req.body._id,
    });
    recipe.save().then(
        () => {
            res.status(201).json({
                message: 'Recipe saved successfully!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};



// 
exports.getAllRecipes = (req, res, next) => {
    Recipe.find().then(
        (recipe) => {
            res.status(200).json(recipe);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};

//

exports.getOneRecipe = (req, res, next) => {
    Recipe.findOne({
        _id: req.params.id
    }).then(
        (recipe) => {
            res.status(200).json(recipe);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
};

//
exports.editOneRecipe = (req, res, next) => {
    const recipe = new Recipe({
        _id: req.params.id,
        title: req.body.title,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions,
        difficulty: req.body.difficulty,
        time: req.body.time,
        _id: req.body._id
    });
    Recipe.updateOne({ _id: req.params.id }, recipe).then(
        () => {
            res.status(201).json({
                message: 'Recipes updated successfully!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
}

//
exports.deleteOneRecipe = (req, res, next) => {
    Recipe.deleteOne({ _id: req.params.id }).then(
        () => {
            res.status(200).json({
                message: 'Deleted!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
}