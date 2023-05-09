import Joi from "joi"
import { RegexPatterns } from "../../constants/regex-patterns"

export default {
  registerUser: Joi.object({
    name: Joi.string().required().pattern(RegexPatterns.NAME),
    email: Joi.string().min(2).max(200).email({}),
    phone: Joi.string().min(12).max(12).pattern(RegexPatterns.PHONE_NUMBER).required(),
    password: Joi.string().required().pattern(RegexPatterns.PASSWORD),
  }),
  registrationVerification: Joi.object({
    phone: Joi.string().min(12).max(12).pattern(RegexPatterns.PHONE_NUMBER).required(),
    code: Joi.number().min(10000).max(99999).required(),
  }),
}
