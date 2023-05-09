import Joi from "joi"
import { RegexPatterns } from "../../constants/regex-patterns"

export default {
  updateUsername: Joi.object({ username: Joi.string().pattern(RegexPatterns.USERNAME).required() }),
  updateProfile: Joi.object({
    name: Joi.string().pattern(RegexPatterns.NAME),
    email: Joi.string().min(2).max(200).email(),
    phone: Joi.string().pattern(RegexPatterns.PHONE_NUMBER),
    address: Joi.string(),
  }),
}
