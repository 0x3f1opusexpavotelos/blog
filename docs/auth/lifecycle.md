## Involved parties
resource: photos in google drive
resource owner: entity capable of granting access to a protected rosource
resource server: server hosting the protected resources
client: on behalf of resource owener. providing service
authorization server: the server isssuing access tokens to client

## Authtication vs Authorization

Authtication: you are who you claim to be
Authorizaton: the premission that you have

## authorization code flow

resource owner
return auth code
access token
return access token(+ refresh token)
request resource
return resouce to service
service return


## implict flow

cookie







session(cookied-based)

cookie http 无状态

创建session-id 存储在server
响应session-id
放在cookie中，下次请求携带
session store中找到session id


jwt(token-based)

后端不存储token
server 私钥 signature(header + playload + signature)返回client， 派发public key 到ohter server(都可以检验token)
请求携带token
server 校验token
expired
tamer





