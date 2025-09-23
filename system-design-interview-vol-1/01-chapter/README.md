# Scale From Zero To Millions of Users

In this chapter we are designing a system capable of scaling from zero to millions of users.

1. Single Server Setup

Initially, we can start with a single server setup. This is the simplest architecture and is easy to manage. However, it has limitations in terms of scalability and fault tolerance.

2. Adding a Database

To handle data storage, we can add a database to our architecture. A relational database like PostgreSQL or MySQL can be used for structured data. For unstructured data, we can consider NoSQL databases like MongoDB or Cassandra.
Web server and database can be hosted on the same server initially but as the user base grows, we should consider separating them. The reason is that both web servers and databases have different resource requirements. Web servers are more CPU and memory intensive, while databases require more disk I/O and memory. Having them on separate servers allows us to scale them independently based on their specific needs.

**Note:**: Vertical scaling (upgrading the existing server) has its limits and can be expensive. Horizontal scaling (adding more servers) is generally more cost-effective and provides better fault tolerance (it provides redundancy).

3. Load Balancing

Load balancers distribute incoming traffic across multiple servers, ensuring no single server becomes a bottleneck. This improves performance and provides redundancy in case one server fails. Popular load balancers include Nginx, HAProxy, and AWS Elastic Load Balancer.
In this case, users connect to the load balancer, which then forwards requests to one of the web servers. Web servers are not reachable directly from the internet anymore, which adds a layer of security. Communication happens over private networks (private IPs).

4. Database Replication
