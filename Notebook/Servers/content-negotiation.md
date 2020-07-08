One of the things HTTP can do is called content negotiation. The Accept request header is used to tell the server what type of document the client would like to get. Many servers ignore this header, but when a server knows of various ways to encode a resource, it can look at this header and send the one that the client prefers.

The URL https://eloquentjavascript.net/author is configured to respond with either plaintext, HTML, or JSON, depending on what the client asks for. These formats are identified by the standardized media types text/plain, text/html, and application/json.

Send requests to fetch all three formats of this resource. Use the headers property in the options object passed to fetch to set the header named Accept to the desired media type.

Finally, try asking for the media type application/rainbows+unicorns and see which status code that produces.

Here's an example, the Accept header my browser sends:
`Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8,application/json`
It would be a little easier to read with some spaces:
`Accept: text/html, application/xhtml+xml, application/xml;q=0.9, */*;q=0.8, application/json`
Here's a quick reference for how to interpret the Accept header:

The q indicates quality, a measure of preference.
The default quality is 1.0, the highest preference.
Each q and the media type it references are delimited by a semicolon.

````
let bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
            ```
````

//TODO: add a user interface :choose
//TODO: add a database :choose https://www.npmjs.com/package/redis // read documentation : https://try.redis.io/
//TODO: status changes, res.end,
//TODO: look up node serverside logging, ]
//TODO: create simple defined messages to explain erros, 4-5
//TODO: to force an error try catch : https://zellwk.com/blog/express-errors/
// look up redis and how you could use them as a db
//html accept header if you are dealing with forms, add a condition when receiving the thing
//http content negotiation,
//allows me to send a status code, message and any custom properties
