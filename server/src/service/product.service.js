const ProductModel = require('../model/product/product.schema')

exports.CreateProduct = async (req) => {
    const doc = new ProductModel(req.body)
    return doc.save()
}

exports.FindProductByCategory = async (req) => {
    const doc = await ProductModel.find({ 'category.name': req.params.category })
    return doc
}