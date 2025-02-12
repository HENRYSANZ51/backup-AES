const handlerHttpError = require("../utils/handlerHttpError");
const { contact } = require("../models");

const showMessage = async (req, res) => {
  try {
    const data = await contact.find({});
    if (!data.length) {
      handlerHttpError(res, "No tiene mensajes aún!", 404);
    }
    res.status(200).json(data);
  } catch (error) {
    handlerHttpError(res, "Algo inesperado ha pasado", 404);
  }
};
const registerFrom = async (req, res) => {
  try {
    const { name, email, phone, title, content } = req.body;

    const data = new contact({
      name,
      email,
      phone,
      title,
      content,
    });

    await data.save();
    res.status(201).json({ message: "mensaje recibido!" });
  } catch (error) {
    handlerHttpError(res, "Algo inesperado ha pasado", 404);
  }
};

module.exports = {
  showMessage,
  registerFrom,
};
