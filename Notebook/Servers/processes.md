//The next thing you could do is save the file when the server exits

SIGTERM
The SIGTERM signal is sent to a Node.js process to request its termination. Unlike the SIGKILL signal, it can be listened on or ignored by the process.

This allows the process to be shut down in a nice manner, by releasing the resources it allocated, like file handlers or database connections. This way of shutting down applications is called graceful shutdown.

Essentially, the following steps need to happen before performing a graceful shutdown:

The applications get notified to stop (received SIGTERM).
The applications notify the load balancers that they aren’t ready for newer requests.
The applications finish all the ongoing requests.
Then, it releases all of the resources (like a database connection) correctly.
The application exits with a "success" status code (process.exit()).

//
SIGTERM is normally sent by a process monitor to tell Node.js to expect a successful termination. If you're running systemd or upstart to manage your Node application, and you stop the service, it sends a SIGTERM event so that you can handle the process shutdown.

SIGINT is emitted when a Node.js process is interrupted, usually as the result of a control-C (^-C) keyboard event. You can also capture that event and do some work around it.
