# ravelo-apps.com

For the sake of productivity, we are going to build the an application with the following considerations:

* Forget about the domain name
* use heroku to see if the app goes anywhere

# Run locally

```
$ docker run -d -p 27017:27017 -v ~/data/mongo:/data/db --name mongo mongo
```