function escolha (){
    
    while (true)
    {var decisao= prompt ("Qual é a sua decisão?")
    if (decisao == 1) {
        return window.location.href="gameover4albu.html"
        break
    }
    else if (decisao == 2) {
        return window.location.href="albu4.html"
        break
    }
        alert ("Digite uma opção válida.")
    }
}
escolha()