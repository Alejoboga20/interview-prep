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

To improve read performance and provide redundancy, we can set up database replication. In a master-slave setup, the master database handles all write operations, while read operations can be distributed across multiple slave databases. This reduces the load on the master database and improves read performance. In case the master database fails, one of the slaves can be promoted to become the new master. It also provides data redundancy, ensuring that data is not lost in case of a failure.

5. Caching

A cache is a temporary storage area that holds frequently accessed data in memory, allowing for faster retrieval. It can also store results of expensive database queries or computations, reducing the load on the database and improving overall system performance. Popular caching solutions include Redis and Memcached.

- Consider using a cache when data is read frequently but updated infrequently. Examples include user session data, product catalogs, and configuration settings.
- Use an `eviction policy` to manage cache size and ensure that the most relevant data is retained. Common eviction policies include Least Recently Used (LRU) and First In First Out (FIFO).

**Note: Single Point of Failure (SPOF)**: Any component in the architecture that, if it fails, will bring down the entire system. In our architecture, the load balancer and the master database are potential SPOFs. To mitigate this, we can set up multiple load balancers in an active-passive or active-active configuration and implement database replication.

6. Content Delivery Network (CDN)

A CDN is a network of distributed servers that deliver web content to users based on their geographic location. It helps reduce latency and improve load times by caching static assets (like images, CSS, JavaScript) closer to the user's location. Popular CDN providers include Cloudflare, Akamai, and AWS CloudFront.

**Note: Decoupling**: Decoupling components in the architecture allows for independent scaling, easier maintenance, and improved fault tolerance. For example, using a message queue (like RabbitMQ or AWS SQS) to decouple the web servers from background processing tasks allows each component to scale independently based on its specific needs.

## Message Queues

Message queues are used to decouple components in a system, allowing them to communicate asynchronously. They can help improve system performance and reliability by offloading tasks that don't need to be processed immediately.

## Logging, Metrics, and Automation

As the system grows, it's important to implement logging and monitoring to track system performance and identify issues. Tools like ELK Stack (Elasticsearch, Logstash, Kibana), Prometheus, and Grafana can be used for this purpose.

7. Database Scaling

Databases can be scaled vertically (upgrading the existing server) or horizontally (adding more servers). Horizontal scaling can be achieved through sharding, where data is partitioned across multiple database servers based on a shard key. This allows for better distribution of data and load, improving performance and scalability. A hash function can be used to determine which shard a particular piece of data belongs to.
When implementing sharding, it's important to choose a shard key that evenly distributes data and minimizes cross-shard queries. Cross-shard queries can be complex and slow, so they should be avoided when possible.

## Summary on How to Scale a System

1. Keep web tier stateless: This allows for easy scaling by adding or removing web servers as needed.
2. Build redundancy at every tier: Ensure that there are no single points of failure in the architecture.
3. Cache data as much as you can.: This reduces the load on the database and improves performance.
4. Support multiple data centers: This improves availability and reduces latency for users in different geographic locations.
5. Host static assets in CDN: This improves load times and reduces the load on the web servers.
6. Scale your data tier by sharding.
7. Monitor everything: Implement logging and monitoring to track system performance and identify issues.
