const Joi = require('joi');
const books = require('../files/books');

const orderSchema = Joi.object()
  .options({ abortEarly: false })
  .keys({
    books: Joi.array()
      .min(1)
      .items(
        Joi.object().keys({
          id: Joi.number()
            .valid(books.map(book => book.id))
            .required(),
          quantity: Joi.number()
            .min(1)
            .required()
        })
      )
      .required(),
    firstName: Joi.string()
      .min(4)
      .max(50)
      .required(),
    lastName: Joi.string()
      .min(5)
      .max(50)
      .required(),
    email: Joi.string()
      .email()
      .max(100)
      .required(),
    phoneNumber: Joi.string()
      .regex(/^(50|51|53|57|60|66|69|72|73|78|79|88)\d{7}$/)
      .required(),
    address: Joi.string().required(),
    city: Joi.string().required(),
    zipCode: Joi.string()
      .regex(/\d{2}-\d{3}/)
      .required()
  });

module.exports = orderSchema;
