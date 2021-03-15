const express = require('express');
const connectDB = require('./config/db')
const path = require('path')


//connect to db
connectDB();

//init middleware
app.use(express.json({extented:false}));

//Define Routes

app.use('/api/users' , require('./Routes/users'));
app.use('/api/auth' , require('./Routes/auth'));
app.use('/api/contacts' , require('./Routes/contacts'));

//serve static assets in production
if(process.env.NODE_ENV === 'production'){

    //set static folder
    app.use(express.static('client/build') );

    app.get('*' , (req, res)=>res.sendFile(path.resolve(__dirname , 'client' , 'build' , 
    'index.html')));
}

const PORT = process.env.PORT || 5000;

app.listen(PORT , ()=>console.log(`server is started at port ${PORT}`))