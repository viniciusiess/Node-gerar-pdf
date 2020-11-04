var pdf = require("html-pdf");

var nome = "Vinicius"
var conteudo = `

  <h1>Titulo do pdf</h1>
  <p>PDF gerado via node js</p>
  <p>Nome: ${nome}</p>
  <img src='https://media.gettyimages.com/photos/arched-hallway-at-taj-mahal-picture-id1058911866?s=2048x2048>
`

pdf.create(conteudo,{}).toFile("./meupdf.pdf", (err, res) => {
  if(err){
    console.log(err)
  }else{
    console.log(res)
  }
})