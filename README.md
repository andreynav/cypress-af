# General Notes

The project is for Cypress automation framework practice testing

## Running project

To run JSON server, open console and enter the following command:

```console
docker run -d --rm -p 80:80 --name json-s -v ~/Documents/docker/json-server:/data/ clue/json-server --watch
```

To run Cypress, open console and enter the following command:

```console
npx cypress open 
```