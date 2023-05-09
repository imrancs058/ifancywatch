export interface TokenServiceJwtPayload {
  token: string
  id: string
}

export interface TokenServiceJwtDecodedPayload extends TokenServiceJwtPayload {
  id: string
  token: string
}
