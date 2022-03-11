function Result () {

    //nome do aluno
    var nomeAluno = document.getElementById("nome");
    var nome = nomeAluno.value;

    // notas
    var notaDoPrimeiroBi = parseFloat(document.getElementById("1b").value);
    var notaDoSegundoBi = parseFloat(document.getElementById("2b").value);
    var notaDoTerceiroBi = parseFloat(document.getElementById("3b").value);
    var notaDoQuartoBi = parseFloat(document.getElementById("4b").value);
    var notaFinal = document.getElementById("notafinal");
    var soma = (notaDoPrimeiroBi + notaDoSegundoBi + notaDoTerceiroBi + notaDoQuartoBi) / 4;
    
       if (soma > 7) {
    notaFinal.innerHTML = "Olá, " + nome + " Você foi Aprovado(a) sua média foi "
      + 
       soma.toFixed(1)
        }
      else {
    
     notaFinal.innerHTML = "Olá, " + nome + 
      " Você foi Reprovado(a) sua média foi " 
       + soma.toFixed(1)
        }
    }
    
    
    