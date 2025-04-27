import { z } from "zod";

type OAuthProvider = "github" | "google" | "discord"

type TOAuthConfig<T> = {
  clientId: string;
  clientSecret: string;
  provider: OAuthProvider
  scope: string[]
  urls: {
    auth: string
    token: string
    user: string
  },
  userInfo: {
    schema: z.ZodSchema<T>
    parser: (data: T) => { id: string; email: string; name: string }
  }
}



export class OAuthClient<T> {
  private readonly provider: OAuthProvider
  private readonly clientId: string
  private readonly clientSecret: string
  private readonly scopes: string[]
  private readonly urls: {
    auth: string
    token: string
    user: string
  }

  private readonly userInfo: {
    schema: z.ZodSchema<T>
    parser: (data: T) => { id: string; email: string; name: string }
  }

  private readonly tokenSchema = z.object({
    access_token: z.string(),
    token_type: z.string(),
  })

  constructor(OAuthConfig: TOAuthConfig<T>) {
    this.provider = OAuthConfig.provider
    this.clientId = OAuthConfig.clientId
    this.clientSecret = OAuthConfig.clientSecret
    this.scopes = OAuthConfig.scope
    this.urls = OAuthConfig.urls
    this.userInfo = OAuthConfig.userInfo
  }

  private get redirectUrl() {
    return new URL(this.provider, import.meta.env.OAUTH_REDIRECT_BASE)

  }

}
