const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path')
const fs = require('fs')
const bodyParser = require('body-parser')
const { Op } = require("sequelize");
const sequelize = require("./config/bd_config");

const app = express();

//----------------------------------------------------------------------Configuracao de Arquivos Estaticos-------------------------------------------------------------
app.use(express.static(path.join(__dirname, "public")))

app.engine('handlebars', engine({
    defaultLayout: 'main',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    },
}))
app.set('view engine', 'handlebars')


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/views/index.html")
});


//------------------------------------------------------------------------------ persistir modelos --------------------------------------------------------------------
/*
sequelize
    .sync()
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    });*/


app.use((error, req, res, next) => {
    const mensagem = 'Erro: ' + error + error.field;
    console.log(mensagem)
    return res.status(500).send(mensagem);

})



app.listen(8081, function () { console.log("Servidor Rodando na porta 8081!") })