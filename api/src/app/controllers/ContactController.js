const { HttpStatusCode } = require("../helpers/http");
const ContactsRepository = require("../repositories/ContactsRepository");

class ContactController {
  async index(request, response) {
    const { orderBy } = request.query;
    const contacts = await ContactsRepository.findAll(orderBy);

    return response.json(contacts);
  }

  async show(request, response) {
    const { id } = request.params;

    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      return response
        .status(HttpStatusCode.NOT_FOUND)
        .json({ error: "User not found" });
    }

    return response.json(contact);
  }

  async store(request, response) {
    const { name, email, phone, category_id } = request.body;

    const contactExists = await ContactsRepository.findByEmail(email);

    if (!name) {
      return response
        .status(HttpStatusCode.BAD_REQUEST)
        .json({ error: "Name is required" });
    }

    if (contactExists) {
      return response
        .status(HttpStatusCode.BAD_REQUEST)
        .json({ error: "This e-mail is already in use" });
    }

    const contact = await ContactsRepository.create({
      name,
      email,
      phone,
      category_id,
    });

    return response.status(HttpStatusCode.CREATED).json(contact);
  }

  async delete(request, response) {
    const { id } = request.params;

    await ContactsRepository.delete(id);

    return response.status(HttpStatusCode.NO_CONTENT).send();
  }

  async update(request, response) {
    const { id } = request.params;
    const { name, email, phone, category_id } = request.body;

    const contactById = await ContactsRepository.findById(id);

    if (!contactById) {
      return response
        .status(HttpStatusCode.NOT_FOUND)
        .json({ error: "User not found" });
    }

    if (!name) {
      return response
        .status(HttpStatusCode.BAD_REQUEST)
        .json({ error: "Name is required" });
    }

    const contactByEmail = await ContactsRepository.findByEmail(email);

    if (contactByEmail && contactByEmail.id !== id) {
      return response
        .status(HttpStatusCode.BAD_REQUEST)
        .json({ error: "This e-mail is already in use" });
    }

    const updatedContact = await ContactsRepository.update(id, {
      name,
      email,
      phone,
      category_id,
    });

    return response.json(updatedContact);
  }
}
module.exports = new ContactController();
