# Learning from Practical Microservices: Building Event-Driven Architectures with Event Souricng and CQRS

## Chapter 1: First Pass

Learning a few things along the way, and struggling through the setup of the application. In my rush to copy things over, i realized that it was missing a few things since the `mount-route.js` file was not referenced anywhere. I eventually found the resources for the book. https://pragprog.com/titles/egmicro/practical-microservices/

### Getting to a working server, pg. 16

I had to install a few things that were required in the files, and then modify the config object, it was not sharing a correct connection string. What I have in this commit is working however. I also needed to install postgres and change the postgres instance's password, via `ALTER USER postgres with PASSWORD 'postgres'` and make sure that the connection string is using the user:password scheme.
