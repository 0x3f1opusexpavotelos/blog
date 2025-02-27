


se Supabase Auth as a standalone product, but it's also built to integrate with the Supabase ecosystem.

## bun

## pnpm


## monorepo



## Project management

### CLI

Use our CLI to develop your project locally and deploy to the Supabase Platform. [Docs](/docs/reference/cli).

### Management API

Manage your projects programmatically. [Docs](/docs/reference/api).

## Client libraries

Official client libraries for [JavaScript](/docs/reference/javascript/start), [Flutter](/docs/reference/dart/initializing) and [Swift](/docs/reference/swift/introduction).
Unofficial libraries are supported by the community.

## Feature status

Supabase Features are in 4 different states - Private Alpha, Public Alpha, Beta and Generally Available.

### Private alpha

Features are initially launched as a private alpha to gather feedback from the community. To join our early access program, send an email to product-ops@supabase.io.

### Public alpha

The alpha stage indicates that the API might change in the future, not that the service isn’t stable. Even though the [uptime Service Level Agreement](https://supabase.com/sla) does not cover products in Alpha, we do our best to have the service as stable as possible.

### Beta

Features in Beta are tested by an external penetration tester for security issues. The API is guaranteed to be stable and there is a strict communication process for breaking changes.

### Generally available

In addition to the Beta requirements, features in GA are covered by the [uptime SLA](https://supabase.com/sla).

| Product        | Feature                    | Stage           | Available on self-hosted                    |
| -------------- | -------------------------- | --------------- | ------------------------------------------- |
| Database       | Postgres                   | `GA`            | ✅                                          |
| Database       | Vector Database            | `GA`            | ✅                                          |
| Database       | Auto-generated Rest API    | `GA`            | ✅                                          |
| Database       | Auto-generated GraphQL API | `GA`            | ✅                                          |
| Database       | Webhooks                   | `beta`          | ✅                                          |
| Database       | Vault                      | `public alpha`  | ✅                                          |
| Platform       |                            | `GA`            | ✅                                          |
| Platform       | Point-in-Time Recovery     | `GA`            | 🚧 [wal-g](https://github.com/wal-g/wal-g)  |
| Platform       | Custom Domains             | `GA`            | N/A                                         |
| Platform       | Network Restrictions       | `beta`          | N/A                                         |
| Platform       | SSL enforcement            | `GA`            | N/A                                         |
| Platform       | Branching                  | `public alpha`  | N/A                                         |
| Platform       | Terraform Provider         | `public alpha`  | N/A                                         |
| Platform       | Read Replicas              | `private alpha` | N/A                                         |
| Platform       | Log Drains                 | `public alpha`  | ✅                                          |
| Studio         |                            | `GA`            | ✅                                          |
| Studio         | SSO                        | `GA`            | ✅                                          |
| Realtime       | Postgres Changes           | `GA`            | ✅                                          |
| Realtime       | Broadcast                  | `GA`            | ✅                                          |
| Realtime       | Presence                   | `GA`            | ✅                                          |
| Realtime       | Broadcast Authorization    | `public beta`   | ✅                                          |
| Realtime       | Presence Authorization     | `public beta`   | ✅                                          |
| Storage        |                            | `GA`            | ✅                                          |
| Storage        | CDN                        | `GA`            | 🚧 [Cloudflare](https://www.cloudflare.com) |
| Storage        | Smart CDN                  | `GA`            | 🚧 [Cloudflare](https://www.cloudflare.com) |
| Storage        | Image Transformations      | `GA`            | ✅                                          |
| Storage        | Resumable Uploads          | `GA`            | ✅                                          |
| Storage        | S3 compatibility           | `public alpha`  | ✅                                          |
| Edge Functions |                            | `beta`          | ✅                                          |
| Edge Functions | Regional Invocations       | `beta`          | ✅                                          |
| Edge Functions | NPM compatibility          | `beta`          | ✅                                          |
| Auth           |                            | `GA`            | ✅                                          |
| Auth           | Email login                | `GA`            | ✅                                          |
| Auth           | Social login               | `GA`            | ✅                                          |
| Auth           | Phone login                | `GA`            | ✅                                          |
| Auth           | Passwordless login         | `GA`            | ✅                                          |
| Auth           | SSO with SAML              | `GA`            | ✅                                          |
| Auth           | Authorization via RLS      | `GA`            | ✅                                          |
| Auth           | CAPTCHA protection         | `GA`            | ✅                                          |
| Auth           | Server-side Auth           | `beta`          | ✅                                          |
| CLI            |                            | `GA`            | ✅ Works with self-hosted                   |
| Management API |                            | `GA`            | N/A                                         |
| Client Library | JavaScript                 | `GA`            | N/A                                         |
| Client Library | Flutter                    | `beta`          | N/A                                         |
| Client Library | Swift                      | `beta`          | N/A                                         |

- ✅ = Fully Available
- 🚧 = Available, but requires external tools or configuration
