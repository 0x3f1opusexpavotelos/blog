---
title: Auth
---
 authenticate and authorize your users.
---

provide client SDKs and API endpoints

- magic link,
- one-time password (OTP)
- social login
- single sign-on (SSO).


## Auth


## ecosystem and specturm

use  Auth as a standalone product, but it's also built to integrate with the ecosystem.

### Email login

Build email logins for your application or website. [Docs](/docs/guides/auth/auth-email).

### Social login

Provide social logins - everything from Apple, to GitHub, to Slack. [Docs](/docs/guides/auth/social-login).

### Phone logins

Provide phone logins using a third-party SMS provider. [Docs](/docs/guides/auth/phone-login).

### Passwordless login

Build passwordless logins via magic links for your application or website. [Docs](/docs/guides/auth/auth-magic-link).

### Authorization via Row Level Security

Control the data each user can access with Postgres Policies. [Docs](/docs/guides/database/postgres/row-level-security).


### CAPTCHA protection

Add CAPTCHA to your sign-in, sign-up, and password reset forms. [Docs](/docs/guides/auth/auth-captcha).

### Server-Side Auth

Helpers for implementing user authentication in popular server-side languages and frameworks like Next.js, SvelteKit and Remix. [Docs](/docs/guides/auth/server-side).


## About authentication and authorization#


- Authentication means checking that a user is who they claim to be
- Authorization means checking what resources a user is allowed to access.


## Providers

## PKCE
PKCE Oauth protocol that enables secure exchange of refresh and access tokens between an application and the authorization server



PKCE(Proof Key for Code Exchange) is an extension to the OAuth protocol that enables secure exchange of refresh and access tokens between an application (web app, single-page app or mobile app) and the authorization server


 PKCE authorization code flow.

Provider refresh token
A provider refresh token is a refresh token issued by a third-party identity provider

Provider tokens#
A refresh token is a long-lived (in most cases with an indefinite lifetime) token that is meant to be stored and exchanged for a new refresh and access tokens only once.  Once a refresh token is exchanged it becomes invalid, and can't be exchanged again. In practice, though, a refresh token can be exchanged multiple times but in a short time window.



A provider token is a long-lived token issued by a third-party identity provider. These are issued by social login services (e.g., Google, Twitter, Apple, Microsoft) and uniquely identify a user on those platforms.


Row level security policies (RLS)#
Row level security policies are special objects within the Postgres database that limit the available operations or data returned to clients. RLS policies use information contained in a JWT to identify users and the actions and data they are allowed to perform or view



OAuth#
OAuth is a protocol allowing third-party applications to request and receive authorization from their users. It is typically used to implement social login, and serves as a base for enterprise single-sign on in the OIDC protocol. Applications can request different levels of access, including basic user identification information such as name, email address, and user ID.

Replay attack#
A replay attack is when sensitive information is stolen or intercepted by attackers who then attempt to use it again (thus replay) in an effort to compromise a system. Commonly replay attacks can be mitigated with the proper use of nonces.


Session#
A session or authentication session is the concept that binds a verified user identity to a web browser. A session usually is long-lived, and can be terminated by the user logging out. An access and refresh token pair represent a session in the browser, and they are stored in local storage or as cookies.


Single-sign on (SSO)#
Single-sign on allows enterprises to centrally manage accounts and access to applications. They use identity provider software or services to organize employee information in directories and connect those accounts with applications via OIDC or SAML protocols.


OIDC#
OIDC stands for OpenID Connect and is a protocol that enables single-sign on for enterprises. OIDC is based on modern web technologies such as OAuth and JSON Web Tokens. It is commonly used instead of the older SAML protocol.


SAML#
SAML stands for Security Assertion Markup Language and is a protocol that enables single-sign on for enterprises. SAML was invented in the early 2000s and is based on XML technology. It is the de facto standard for enabling single-sign on for enterprises, although the more recent OIDC (OpenID Connect) protocol is gaining popularity.

Time-based one-time password (TOTP)#
A time-based one-time password is a one-time password generated at regular time intervals from a secret, usually from an application in a mobile device (e.g., Google Authenticator, 1Password).


Nonce#
Nonce means number used once. In reality though, it is a unique and difficult to guess string used to either initialize a protocol or algorithm securely, or detect abuse in various forms of replay attacks.

Multi-factor authentication (MFA or 2FA)#
Multi-factor authentication is the process of authenticating a user's identity by using a combination of factors: something users know, something users have or something they are.


JWT signing secret#
JWTs issued by Supabase are signed using the HMAC-SHA256 algorithm. The secret key used in the signing is called the JWT signing secret. You should not share this secret with someone or some thing you don't trust, nor should you post it publicly. Anyone with access to the secret can create arbitrary JWTs.


JSON Web Token (JWT)#
A JSON Web Token is a type of data structure, represented as a string, that usually contains identity and authorization information about a user. It encodes information about its lifetime and is signed with cryptographic key making it tamper resistant.

Access tokens are JWTs and by inspecting the information they contain you can allow or deny access to resources. Row level security policies are based on the information present in JWTs.



Identity provider#
An identity provider is software or service that allows third-party applications to identify users without the exchange of passwords. Social login and enterprise single-sign on won't be possible without identity providers.

Social login platforms typically use the OAuth protocol, while enterprise single-sign on is based on the OIDC or SAML protocols.


Authorization#
Authorization (often abbreviated authz.) is the process of verifying if a certain identity is allowed to access resources. Authorization often occurs by verifying an access token.


Authentication#
Authentication (often abbreviated authn.) is the process of verifying the identity of a user. Verification of the identity of a user can happen in multiple ways:

Asking users for something they know. For example: password, passphrase.
Checking that users have access to something they own. For example: an email address, a phone number, a hardware key, recovery codes.
Confirming that users have some biological features. For example: a fingerprint, a certain facial structure, an iris print.


Access token#
An access token is a short-lived (usually no more than 1 hour) token that authorizes a client to access resources on a server. It comes in the form of a JSON Web Token (JWT).


## `@nuxtjs/supabase`

based on vue3 composables

auth support
supabase-js isomorphic client



[supabase auth method](https://supabase.com/docs/reference/javascript/auth-signinwithpassword)




### Sign in a user through OTP

- Requires either an email or phone number.

- This method is used for passwordless sign-ins where a OTP is sent to the user's email or phone number.

- If the user doesn't exist, signInWithOtp() will signup the user instead. To restrict this behavior, you can set shouldCreateUser in SignInWithPasswordlessCredentials.options to false.

- If you're using an email, you can configure whether you want the user to receive a magiclink or a OTP.



## phone
To send users a one-time code instead of a magic link, modify the magic link email template to include `{{ .Token }}` instead of `{{ .ConfirmationURL }}`

sent via a channel (SMS or WhatsApp).
