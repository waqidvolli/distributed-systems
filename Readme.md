###NYU Distributed Systems Fall 2016 Project.


#####Project-1:


Implement a server and a client for the service defined in kvstore.thrift. The server should be called kvserver. The client should be called kvclient and should run on the command line. The client should have three subcommands:

*get - Example: ./kvclient -server host:port -get 'my_key' > my_value_file

*set - Example: ./kvclient -server host:port -set 'my_key' 'my_value'

*del - Example: ./kvclient -server host:port -del 'my_key'

Note that the get subcommand should write the value to stdout. The kvclient process should have an exit code of zero on success, 1 if a key isn't found, and 2 on other errors. If errortext is returned from the server, kvclient should write it to stderr.
