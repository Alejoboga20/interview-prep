# Design a Rate Limiter

A rate limiter is a system that controls the rate of incoming requests to a service or API. It helps prevent abuse, ensures fair usage, and protects the service from being overwhelmed by too many requests in a short period of time.

1. Understand the problem and establish a design scope

- What kind of rate limiter do we need?: We're designing a rate limiter on the server side
- What kind of throttling do we need?: We need to support different types of throttling.
- At what scale do we need to operate?: We need to support a large number of users and requests.
- Will the system work in a distributed environment?: Yes, the system will work in a distributed environment.
- Is the rate limiter a separated service or a library?: Up to you, but a separated service is more flexible.
- Do we need to inform users when they are being rate limited?: Yes, we need to inform users when they are being rate limited.

Additional requirements:

- Accurately limit excessive requests.
- Low latency.
- Use as little memory as possible.
- Distributed system support.
- Exception handling (show appropriate error messages).
- High fault tolerance.

2. Propose a high-level design

We need to implement the limiter on the server side. We create a Rate Limiter middleware that will intercept incoming requests and check if the user has exceeded their allowed request rate. If they have, we return an error response. If not, we allow the request to proceed.

![alt text](image.png)

Usually rate limiting is implemented within a component called API Gateway. The API Gateway is the entry point for all incoming requests to the service. It is responsible for routing requests to the appropriate service, as well as handling authentication, authorization, and rate limiting.
