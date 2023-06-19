# General Notes

The project is for Cypress automation framework practice testing

## Running tests

To run JSON server, go to the ROOT of the project and enter the following command to the console:

```console
docker run -d --rm -p 80:80 --name json-s -v $(pwd)/json-server:/data/ clue/json-server --watch
```

To run Cypress, open console and enter the following command:

```console
npx cypress open 
```