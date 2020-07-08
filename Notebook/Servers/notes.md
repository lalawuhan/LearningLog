Background

- the number is a unique resource key generated on the client.
  The key can be time-generated, or it can be a hash of time, session ID, and some other factors to guarantee uniqueness of the value across your client audience. The server can then generate its own auto-incremented index, distinct from 10292829 or whatever.

# auto-incremented id

- issue with sequential id is that once you delete an item, it is no longer sequential

# UUUID

A universal unique identifier (UUID) is a standard of generating identifiers, standardized by the Open Software Foundation (OSF).

The intent of UUIDs is to be able to generate unique identifiers in a distributed system without central coordination point.

### Version 1 UUID

Version 1 UUID is meant for generating time-based UUIDs. They also accept 48 bit long identifier (281,474,976,710,655 available values). In many cases, it makes sense to use a machine MAC Address as an identifier. Sometimes if we use several UUID generators on the same system, we can use configured identifiers. Having a unique identifier in a distributed environment is critical. That will guarantee conflict-free ids.

### Version 4 UUID

Version 4 UUID is meant for generating UUIDs from truly-random or pseudo-random numbers. UUID v4 are not giving us guaranteed unique numbers; they are somewhat practically unique.

Probability of UUID v4 duplicates: Only after generating 1 billion UUIDs every second for the next 100 years, the probability of creating just one duplicate would be about 50%.

uuid libraries :
Smaller one : https://github.com/ai/nanoid

Issues

- The problem with UUIDs is that they are very big in size and don’t index well. When your dataset increases, the index size increases as well and the query performance takes a hit.

# shortid package

- https://www.npmjs.com/package/shortid
- creates short non-sequential url-friendly unique ids. Perfect for url shorteners, MongoDB and Redis ids, and any other id users might see.

test

```
const shortid = require('shortid');

console.log(shortid.generate());
// PPBqWA9

```

use in my code :

````
users.insert({
  _id: shortid.generate(),
  name: '...',
  email: '...'
});
```* drawbacks : maybe a library like this is unnecccessary, I could create a similar version that is smaller
# hashids

https://www.npmjs.com/package/hashids

- similar to short id, but focused on the reverse lookup of a number
````
