const express = require('express');
const bodyParser = require('body-parser');
const cntrl = require( `./usersCtrl` );

const app = express();
app.use( bodyParser.json() );


app.get('/api/users', cntrl.getAll);
app.get('/api/users/:id', cntrl.getOne);
app.get('/api/admins', cntrl.getAdmins);
app.get('/api/nonadmins', cntrl.noneAdmin);
app.get('/api/user_type/:userType', cntrl.typeUsers);
app.put('/api/users/:userId', cntrl.updateUser);
app.post('/api/users', cntrl.createUser);
app.delete('/api/users/:id', cntrl.deleteUser);

const port = 3000
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );