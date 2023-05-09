import Joi from "joi"
import { RegexPatterns } from "../../constants/regex-patterns"

export default {
  request: Joi.object({ csv: Joi.string().required().pattern(RegexPatterns.NAME) }),
  registrationVerification: Joi.object({
    phone: Joi.string().min(12).max(12).pattern(RegexPatterns.PHONE_NUMBER).required(),
    code: Joi.number().min(10000).max(99999).required(),
  }),
}
