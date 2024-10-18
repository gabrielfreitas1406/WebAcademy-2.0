import Joi from "joi";

export const produtoSchema = Joi.object().keys({
    nome: Joi.string().min(3).max(50).lowercase().required(),
    preco: Joi.number().required(),
    estoque: Joi.number().positive().integer().required().messages({
        'number.positive': "O {#label}  precisa ser positivo. Portanto o valor {#value} não é válido",
    }),
    tags: Joi.array().items(Joi.string())
});

const produto = {
    nome: 'Smartphone Motorola Edge 30',
    preco: 1499,
    estoque: 10,
    tags: ["1","celular"]
};

const {error, value} = produtoSchema.validate(produto, {abortEarly: false});
if(error) console.log(error.details);
console.log(value)

