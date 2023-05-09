import Joi from "joi"
import { RegexPatterns } from "../../constants/regex-patterns"

export default {
  loginUser: Joi.object({
    email: Joi.string().min(2).max(200).email({}),
    // phone: Joi.string()
    //   .min(12)
    //   .max(12)
    //   .pattern(RegexPatterns.PHONE_NUMBER),
    password: Joi.string().required(),
    // password: Joi.string().required().pattern(RegexPatterns.PASSWORD),
  }),
}
