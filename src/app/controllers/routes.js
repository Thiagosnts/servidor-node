
var json={'dados':'123'}

module.exports =app =>  { 
    app.get('/',(req,res) => 
        res.status(200).send(json)
    );

    app.get('/qrcode',(req,res) => 
        res.sendfile('src/static/qrcode.html')
    );

    app.get('/acesso',(req,res) => 
        res.sendfile('src/static/ConectCar.html') 
    );
}


function ativar(){
alert("ok")

}