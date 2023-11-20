const { HttpStatusCode } = require("../helpers/http");

const CategoriesRepository = require("../repositories/CategoriesRepository");

class CategoryController {
  async index(request, response) {
    const categories = await CategoriesRepository.findAll();

    response.json(categories);
  }

  async store(request, response) {
    const { name } = request.body;

    if (!name) {
      return response
        .status(HttpStatusCode.BAD_REQUEST)
        .json({ error: "Name is required" });
    }

    const category = await CategoriesRepository.create({ name });

    return response.status(HttpStatusCode.CREATED).json(category);
  }

  async update(request, response) {
    const { id } = request.params;
    const { name } = request.body;

    if (!name) {
      return response
        .status(HttpStatusCode.BAD_REQUEST)
        .json({ error: "Name is required" });
    }

    const category = await CategoriesRepository.update(id, { name });

    response.status(HttpStatusCode.CREATED).json(category);
  }

  async delete(request, response) {
    const { id } = request.params;

    await CategoriesRepository.delete(id);

    response.sendStatus(HttpStatusCode.NO_CONTENT);
  }
}

module.exports = new CategoryController();
