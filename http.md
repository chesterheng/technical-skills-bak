# HTTP

## What is HTTP?

- Hyper Text Transfer Protocol
- Communication between web servers & clients
- HTTP Requests / Responses
- Loading pages, form submit, Ajax calls

## HTTP is stateless

- Every request is completely independent
- Similar to transactions
- Programming, Local Storage, Cookies, Sessions are used to create enhanced user experiences

## What is HTTPS?

- Hyper Text Transfer Protocol Secure
- Data send is encrypted
- SSL / TLS
- Install certificate on web host

## HTTP methods

- GET: retrieve data from the server
- POST: submit data to the server
- PUT: update data already on the server
- DELETE: delete data from the server

## HTTP header fields 

- method | path | protocol
- HTTP headers ad Name: Value
- General header
  - Request URL
  - Request Method
  - Status Code
  - Remote Address
  - Referrer Policy
- Response
  - Server
  - Set-Cookie
  - Content-Type
  - Content-Length
  - Date
- Request
  - Cookies
  - Accept-xxx
  - Content-Type
  - Content-Length
  - Authorization
  - User-Agent
  - Referrer

## HTTP status codes

- 1xx: informational
  - request received / processing
- 2xx: success
  - successfully received, understood and accepted
- 3xx: redirect
  - further action must be taken / redirect
- 4xx: client error
  - request does not have what it needs
- 5xx: server error 
  - server failed to fulfil an apparent valid request
- Examples
  - 200: OK
  - 201: OK created
  - 301: Moved to new URL
  - 304: Not modified (Cached version)
  - 400: Bad request
  - 401: Unauthorized
  - 404: Not found
  - 500: Internal server error

## HTTP/2

- Major revision of HTTP
- Under the hood changes
- Respond with more data
- Reduce latency by enabling full request and response multiplexing
- Fast, efficient & secure

## Reference

- [HTTP Crash Course & Exploration](https://www.youtube.com/watch?v=iYM2zFP3Zn0)