function escolha (){
    
    while (true)
    {var decisao= prompt ("Qual é a sua decisão?")
    if (decisao == 1) {
        return window.location.href="andrade3.html"
        break
    }
    else if (decisao == 2) {
        return window.location.href="gameover3andrade.html"
        break
    }
        alert ("Digite uma opção válida.")
    }
}
escolha()