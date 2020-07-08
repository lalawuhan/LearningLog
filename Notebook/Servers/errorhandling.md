Some companies like Google is using the following error response for their APIs:

```
{
 "error": {
  "errors": [
   {
    "domain": "global",
    "reason": "invalidParameter",
    "message": "Invalid string value: 'asdf'. Allowed values: [mostpopular]",
    "locationType": "parameter",
    "location": "chart"
   }
  ],
  "code": 400,
  "message": "Invalid string value: 'asdf'. Allowed values: [mostpopular]"
 }
}
```

Facebook
For Facebook the error response is different as well:

```
{
  "error": {
    "message": "Message describing the error",
    "type": "OAuthException",
    "code": 190,
    "error_subcode": 460,
    "error_user_title": "A title",
    "error_user_msg": "A message",
    "fbtrace_id": "EJplcsCHuLu"
  }
}
```

Spotify

```
{
  "error" : {
    "status" : 502,
    "message" : "Bad gateway."
  }
}
```

```
return res.send({
      httpStatus: HttpStatus.UNAUTHORIZED,
      message: error.message
    });
```

```
// app.use((req, res, next) => {
//   const err = new Error(`${req.method} ${req.url} Not Found`);
//   err.status = 404;
//   next(err);
// });
// app.use((req, res) => {
//   console.error(err);
//   res.statusCode = err.status || 500;
//   res.end({
//     error: {
//       message: err.message,
//       status: err.status,
//     },
//   });
// });
```

Previous Polka code

```
// const polka = require("polka");
// const app = polka({
//   onError: (err, req, res) => {
//     console.error(err);
//     // res.statusCode = err.status || 500;
//     res.end(
//       JSON.stringify({
//         error: {
//           message: err.message,
//           status: err.status,
//         },
//       })
//     );
//   },
// });
```
