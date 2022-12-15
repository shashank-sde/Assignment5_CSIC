const {loadUser} = require('./user_model');
const {userid} = require('./user_model2');
const express = require('express');
const app = express();

const port = 3000;
app.listen(port, () => console.log('server is running now...'))

app.get('/', (request, response) => response.send('<body style="background-color:aliceblue"><h1 style="color:purple">Welcome to the LOCAL HOST SERVER</h1><br></br><p>Append the current url with : /users to see the users data present in the database.<br></br>Append the current url with : /users/:id <i> like </i> /users/4 to get the details of user with the ID : 4<br></br>Append the current url with : /users/:id/address<i> like </i> users/2/address to get the address details of the user with ID : 2<br></br>Append the current url with : /users/:id/address/geo <i> like </i> /users/3/address/geo to get the geolocation details of the user with ID : 3<br></br><br></br>You can also play around by changing the id numbers and see how the pages header change<br></br><h1 style="color:green">Happy Dockering :) !!!</h1></body>'));

app.get('/users', (request, response) => {
    response.send("<body><div><h1>The user details present in the JSON file based database are : </h1></div>"
    +"<div><b> User : </b>"+JSON.stringify(loadUser()[0])+"</div><br></br>"
    +"<div><b> User : </b>"+JSON.stringify(loadUser()[1])+"</div><br></br>"
    +"<div><b> User : </b>"+JSON.stringify(loadUser()[2])+"</div><br></br>"
    +"<div><b> User : </b>"+JSON.stringify(loadUser()[3])+"</div><br></br>"
    +"<div><b> User : </b>"+JSON.stringify(loadUser()[4])+"</div><br></br>"
    +"<div><b> User : </b>"+JSON.stringify(loadUser()[5])+"</div><br></br>"
    +"<div><b> User : </b>"+JSON.stringify(loadUser()[6])+"</div><br></br>"
    +"<div><b> User : </b>"+JSON.stringify(loadUser()[7])+"</div><br></br>"
    +"<div><b> User : </b>"+JSON.stringify(loadUser()[8])+"</div><br></br>"
    +"<div><b> User : </b>"+JSON.stringify(loadUser()[9])+"</div><br></br>"
    +"<div><b> User : </b>"+JSON.stringify(loadUser()[10])+"</div><br></br></body>"
    );
});

app.get('/users/:id', (request, response) => {
    let id = request.params.id;
    let str = JSON.stringify(userid()[id].address);
    let comp = JSON.stringify(userid()[id].company);
    response.send("<body><h1>USER DETAILS FETCHED CORRESPONDING TO THE ID YOU HAVE ENTERED : </h1>"+"<div><b> ID :</b> " + userid()[id].id + "</div>"
    + "<div><b> Name :</b> " + userid()[id].name + "</div>"
    + "<div><b> Username : </b>"+userid()[id].username+"</div>"
    + "<div><b> Email : </b>" + userid()[id].email + "</div>"
    + "<div><b> Address : </b>"+str + "</div>"
    + "<div><b> Phone : </b>"+userid()[id].phone + "</div>"
    + "<div><b> website : </b>"+userid()[id].website + "</div>"
    + "<div><b> Company : </b>"+comp+"</div></body>"
    );
});

app.get('/users/:id/:address', (request, response) => {
    let id2 = request.params.id;
    let newadd = userid()[id2].address;
    response.send("<h1>The address of the selected user with " + id2 + " is : </h1>" 
    + "<div><b>Street: </b>" + newadd.street + "</div>"
    + "<div><b>Suite: </b>" + newadd.suite + "</div>"
    + "<div><b>City: </b>" + newadd.city + "</div>"
    + "<div><b>zipcode: </b>" + newadd.zipcode + "</div>"
    + "<div><b>geo: </b>" + JSON.stringify(newadd.geo) + "</div>"
    );
});

app.get('/users/:id/:address/:geo', (request, response) => {
    let id3= request.params.id;
    let newadd2 = userid()[id3].address.geo;
    response.send("<h1>The gelocation details of the user with id : " + id3 + " is : </h1>"
        + "<div><b>The geolocation latitude is : </b>" + newadd2.lat + "</div>"
    +"<div><b>The geolocation longitude is : </b>" + newadd2.lng + "</div>");
});