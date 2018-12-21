## Repositories

A repository is an layer communicating with external service. Accordingly, a connection to DB, external API or cache server will be maintained and used from here.

A factory will help us to construct a relevant repository and return it to the service. It will be a common point to request a repository. If you want to mock a repository, this should be the right place to do it.

A simple use-case is you willing to run the application with an in-memory cache.
