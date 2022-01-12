function escolha (){
    
    while (true)
    {var decisao= prompt ("Qual é a sua decisão?")
    if (decisao == 1) {
        return window.location.href="albu2.html"
        break
    }
    else if (decisao == 2) {
        return window.location.href="gameover2albu.html"
        break
    }
        alert ("Digite uma opção válida.")
    }
}
escolha()