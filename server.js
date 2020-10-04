const express = require('express')
const app = express();


app.use(express.static('./dist/AngularTetrisPage'));

app.get('/*',(req,res)=>
{
    res.sendFile('index.html',{root:'dist/AngularTetrisPage'})
});

app.listen(process.env.PORT || 8080);

