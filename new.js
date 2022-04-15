const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/' , (req,res) =>{
    res.send("<h1>HUSAIN</h1>");
})

app.post('/bfhl', (req,res) =>{
    var a = {}
    const body = req.body;
    const user = 'husain'
    var odd = [];
    var even = [];
    var status = true;
    el = 0;
    ol = 0;
    for(i=0; i<body.numbers.length; i++){
        if(isNaN(parseInt(body.numbers[i]))){
            status = false;                 
            break;
        }
        if(parseInt(body.numbers[i]%2) == 0){
            even[el++] = parseInt(body.numbers[i]);
        }
        else{
            odd[ol++] = parseInt(body.numbers[i]);
        }
    }
    if(status){
        a = {
            user: user,
            status: status,
            odd: odd,
            even: even
        }
    }
    else{
        a = {
            user: user,
            status: status,
        }   
    }
    res.json(a);
});

var port = process.env.PORT || '3000';

app.listen(port);
