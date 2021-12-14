function alteraModal(raca){
  document.getElementById("textoTitulo").innerHTML=raca;

  const textoMangalarga="xxxxxxxxxxxx";
  const textoCrioulo="yyyyyyyyyyyyy";
  const textoQuarto="jjjjjjjjjj";
  const textoPuro="lllllllll";
  const textoArabe="iiiiiiii";
  const textoMarchador="qqqqqqqqqqq";
  const textoCampolina="oooooooooo";
  const textoPaint= "uuuuuuuuuu";
  const textoShire="kkkkkkkkk";
  const textoFrisio="bbbbbbbbbb";
  const textoGypsy="nnnnnnnnnnnn";
  const textoBelga="vvvvvvvvvvv";
  switch(raca){ 
    case "Mangalarga":
        document.getElementById("textoModal").innerText=textoMangalarga;
      break;
    case "Crioulo":
        document.getElementById("textoModal").innerText=textoCrioulo;
      break;
    case "Quarto":
        document.getElementById("textoModal").innerText=textoQuarto;
    break;
    case "Puro":
      document.getElementById("textoModal").innerText=textoPuro;
    break;   
    case "Arabe":
      document.getElementById("textoModal").innerText=textoArabe;
    break; 
    case "Marchador":
      document.getElementById("textoModal").innerText=textoMarchador;
    break; 
    case "Campolina":
      document.getElementById("textoModal").innerText=textoCampolina;
    break; 
    case "Paint":
      document.getElementById("textoModal").innerText=textoPaint;
    break;
    case "Shire":
      document.getElementById("textoModal").innerText=textoShire;
    break;  
    case "Frisio":
      document.getElementById("textoModal").innerText=textoFrisio;
    break;  
    case "Gypsy":
      document.getElementById("textoModal").innerText=textoGypsy;
    break;
    case "Belga":
      document.getElementById("textoModal").innerText=textoBelga;
    break;       
  default:"raça não encontrada"
    } 
}