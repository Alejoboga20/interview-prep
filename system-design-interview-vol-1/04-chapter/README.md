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
