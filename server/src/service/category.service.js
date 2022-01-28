const CategoryModel = require('../model/category/category.schema')

exports.CreateCategory = async (req) => {
    const doc = new CategoryModel(req.body)
    return doc.save()
}

// exports.FindTest = async (req) => {
//     const doc = await TestModel.findOne({name: req.params.name})
//     return doc
// }