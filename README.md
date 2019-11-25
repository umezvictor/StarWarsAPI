Introduction
Welcome to the Star Wars API. This documentation is intended to help developers learn how to use the resources provided by this API. It shows you how to consume the resources using http requests. All requests are made or returned in JSON format. Please read carefully.

Getting Started
Let's try making our first API request. Using Postman or any other HTTP client of your choice, make a GET request to http://starwarsapitest.herokuapp.com/api/list-all-comments
Below is the response gotten

{
"id": 1,
"ipaddress": "154.113.98.190",
"created_at": "Sun, 24 Nov 2019",
"substring": "I love this great movie"
}

Root URL
The root URL for this API is http://starwarsapitest.herokuapp.com/api/

Authentication
No authentication is required to use this API. It is a completely open API. So, feel free to use to it.

Resources
Movies
This is a list of all Star Wars Movies

Endpoint
/list-all-movies/ --- returns all Star Wars in chronological order of their release dates
Request Type: GET

Sample request
http://starwarsapitest.herokuapp.com/api/list-all-movies/

Sample response
{
"title": "A New Hope", 
"episode_id": 4,
"opening_crawl": "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle,
Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, 
the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.
\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
"director": "George Lucas",
"producer": "Gary Kurtz, Rick McCallum",
"release_date": "1977-05-25",
"characters": [
"https://swapi.co/api/people/1/",
"https://swapi.co/api/people/2/",
"https://swapi.co/api/people/3/",
],
"planets": [
"https://swapi.co/api/planets/2/",
"https://swapi.co/api/planets/3/",
],
"starships": [
"https://swapi.co/api/starships/2/",
"https://swapi.co/api/starships/3/",
],
"vehicles": [
"https://swapi.co/api/vehicles/4/",
"https://swapi.co/api/vehicles/6/",
],
"species": [
"https://swapi.co/api/species/5/",
"https://swapi.co/api/species/3/",
], "created": "2014-12-10T14:23:31.880000Z",
"edited": "2015-04-11T09:46:52.774897Z",
"url": "https://swapi.co/api/films/1/"
}

Comments
These are comments by anonymous people. The request must be made in JSON format

Endpoints
/add-comments/ --- Adds a new comment (POST request)
/list-all-comments/ --- lists all comments in reverse chronological order (GET requets)
Sample request
http://starwarsapitest.herokuapp.com/api/list-all-comments

Sample response
{
"id": 1,
"ipaddress": "154.113.98.190",
"created_at": "Sun, 24 Nov 2019",
"substring": "I love this great movie"
}

Characters
These are the Characters (people) featured in the movies.
Request Type: GET

Endpoint
/get-characters/
This endpoint accepts two types of parameters:

Sort parameter -- sorts by height. Returns all characters in ascending order of their geight.
Example: http://starwarsapitest.herokuapp.com/api/get-characters/?search=male -- returns all male characters

Filter parameter -- filters by gender.
Example: http://starwarsapitest.herokuapp.com/api/get-characters/?height=165 -- returns all charcters in ascending order of their heights

Sample Request
http://starwarsapitest.herokuapp.com/api/get-characters/?search=female

Sample response
{
"name": "Leia Organa",
"height": "150",
"mass": "49",
"hair_color": "brown",
"skin_color": "light",
"eye_color": "brown",
"birth_year": "19BBY",
"gender": "female",
"homeworld": "https://swapi.co/api/planets/2/",
"films": [
"https://swapi.co/api/films/2/",
"https://swapi.co/api/films/6/",
"https://swapi.co/api/films/3/",
"https://swapi.co/api/films/1/",
"https://swapi.co/api/films/7/"
],
"species": [
"https://swapi.co/api/species/1/"
],
"vehicles": [
"https://swapi.co/api/vehicles/30/"
],
"starships": [],
"created": "2014-12-10T15:20:09.791000Z",
"edited": "2014-12-20T21:17:50.315000Z",
"url": "https://swapi.co/api/people/5/"
},
}
Meta structure
This is a summary of the response above

"meta": {
"totalCharacters": 2,
"totalHeight": "315cm",
"totalHeightInCentimetres": "315cm",
"totalHeightInFeetAndInch": "10ft and 124.02inches"
}

HTTP Response codes
200 -- Returned when resource is successfully fetched
201 --- Returned when a new resource is successfully created
400 --- Returned when a request url syntax is malformed, has wrong parameters or if the request body format is invalid
404 --- Returned when requested resource is not found


To read the full documentation, visit https://starwarsapitest.herokuapp.com
