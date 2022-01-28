const CategoryService = require('../../service/category.service')

exports.CreateCategory = async (req, res) => {
    const category = await CategoryService.CreateCategory(req)
    return res.status(200).json({ data: category })
}