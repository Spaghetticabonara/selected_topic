const ProductService = require('../../service/product.service')

exports.CreateProduct = async (req, res) => {
    const product = await ProductService.CreateProduct(req)
    return res.status(200).json({ data: product })
}

exports.FindProductByCategory = async (req, res) => {
    const product = await ProductService.FindProductByCategory(req)
    return res.status(200).json({ data: product })
}