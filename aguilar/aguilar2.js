function escolha (){
    
    while (true)
    {var decisao= prompt ("Qual é a sua decisão?")
    if (decisao == 1) {
        return window.location.href="gameover3aguilar.html"
        break
    }
    else if (decisao == 2) {
        return window.location.href="aguilar3.html"
        break
    }
        alert ("Digite uma opção válida.")
    }
}
escolha()