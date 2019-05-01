function CambiarVocales() {
    var texto = document.getElementById("texto").innerHTML;
    var textoInput = document.getElementById("titulo").value;
    var  textocambiado;
    var textocambiadoInput;
    if(textoInput.length != 0){
        textocambiadoInput = textoACambiar(textoInput,textocambiadoInput);
        document.getElementById("textoCambiadoInput").innerHTML= textocambiadoInput;
    }
    textocambiado = textoACambiar(texto,textocambiado);
    document.getElementById("textocambiado").innerHTML=textocambiado;
    
  }

  function textoACambiar(texto,textocambiado){
    for(i=0;i<texto.length;i++)
    {
      if(texto[i]=='a' || texto[i]=='A')
      {   textocambiado = texto.replace(/a/i,"&#9826");//rombo
          texto = textocambiado;

      }
      if(texto[i]=='e' || texto[i]=='E')
      {   textocambiado = texto.replace(/e/i,"&#9824"); //pica
          texto = textocambiado;

      }
      if(texto[i]=='i' || texto[i]=='I')
      {   textocambiado = texto.replace(/i/i,"&#9829");//corazon
          texto = textocambiado;

      }
      if(texto[i]=='o' || texto[i]=='O')
      {   textocambiado = texto.replace(/o/i,"&#9786");//carita feliz
          texto = textocambiado;

      }
      if(texto[i]=='u' || texto[i]=='U')
      {   textocambiado = texto.replace(/u/i,"&#9785");//carita triste
          texto = textocambiado;

      }
    }
    return textocambiado;
    
  }
