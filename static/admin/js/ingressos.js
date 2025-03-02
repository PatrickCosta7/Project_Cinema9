
var qtdIngressos = "  ";
var contador = 0;

document.getElementById('entrada').readOnly = true;
document.getElementById('entryRS').readOnly = true;

// -------------------------------------------------------------  Coluna A, B, N e O --------------------------------------------------------------
function aa1(element){
    if (qtdIngressos.includes("A1 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "A1 ";
        contador++;
        console.log(contador);
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("A1 ") == false){
        qtdIngressos = qtdIngressos + "A1 ";
        contador++;
        console.log(contador);
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("A1 ") == true){
        qtdIngressos = qtdIngressos.replace("A1 ", "" );
        contador--;
        console.log(contador);
        addMoney();
        setValor();
    }
};

function ba1(element){
    if (qtdIngressos.includes("B1 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "B1 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("B1 ") == false){
        qtdIngressos = qtdIngressos + "B1 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("B1 ") == true){
        qtdIngressos = qtdIngressos.replace("B1 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};

function na1(element){
    if (qtdIngressos.includes("N1 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "N1 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("N1 ") == false){
        qtdIngressos = qtdIngressos + "N1 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("N1 ") == true){
        qtdIngressos = qtdIngressos.replace("N1 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};

function oa1(element){
    if (qtdIngressos.includes("O1 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "O1 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("O1 ") == false){
        qtdIngressos = qtdIngressos + "O1 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("O1 ") == true){
        qtdIngressos = qtdIngressos.replace("O1 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};






// -------------------------------------------------------------  Coluna C --------------------------------------------------------------





function ca1(element){
    if (qtdIngressos.includes("C1 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "C1 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("C1 ") == false){
        qtdIngressos = qtdIngressos + "C1 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("C1 ") == true){
        qtdIngressos = qtdIngressos.replace("C1 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ca2(element){
    if (qtdIngressos.includes("C2 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "C2 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("C2 ") == false){
        qtdIngressos = qtdIngressos + "C2 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("C2 ") == true){
        qtdIngressos = qtdIngressos.replace("C2 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ca3(element){
    if (qtdIngressos.includes("C3 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "C3 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("C3 ") == false){
        qtdIngressos = qtdIngressos + "C3 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("C3 ") == true){
        qtdIngressos = qtdIngressos.replace("C3 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ca4(element){
    if (qtdIngressos.includes("C4 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "C4 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("C4 ") == false){
        qtdIngressos = qtdIngressos + "C4 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("C4 ") == true){
        qtdIngressos = qtdIngressos.replace("C4 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ca5(element){
    if (qtdIngressos.includes("C5 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "C5 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("C5 ") == false){
        qtdIngressos = qtdIngressos + "C5 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("C5 ") == true){
        qtdIngressos = qtdIngressos.replace("C5 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ca6(element){
    if (qtdIngressos.includes("C6 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "C6 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("C6 ") == false){
        qtdIngressos = qtdIngressos + "C6 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("C6 ") == true){
        qtdIngressos = qtdIngressos.replace("C6 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ca7(element){
    if (qtdIngressos.includes("C7 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "C7 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("C7 ") == false){
        qtdIngressos = qtdIngressos + "C7 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("C7 ") == true){
        qtdIngressos = qtdIngressos.replace("C7 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ca8(element){
    if (qtdIngressos.includes("C8 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "C8 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("C8 ") == false){
        qtdIngressos = qtdIngressos + "C8 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("C8 ") == true){
        qtdIngressos = qtdIngressos.replace("C8 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ca9(element){
    if (qtdIngressos.includes("C9 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "C9 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("C9 ") == false){
        qtdIngressos = qtdIngressos + "C9 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("C9 ") == true){
        qtdIngressos = qtdIngressos.replace("C9 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ca10(element){
    if (qtdIngressos.includes("C10 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "C10 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("C10 ") == false){
        qtdIngressos = qtdIngressos + "C10 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("C10 ") == true){
        qtdIngressos = qtdIngressos.replace("C10 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ca11(element){
    if (qtdIngressos.includes("C11 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "C11 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("C11 ") == false){
        qtdIngressos = qtdIngressos + "C11 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("C11 ") == true){
        qtdIngressos = qtdIngressos.replace("C11 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ca12(element){
    if (qtdIngressos.includes("C12 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "C12 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("C12 ") == false){
        qtdIngressos = qtdIngressos + "C12 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("C12 ") == true){
        qtdIngressos = qtdIngressos.replace("C12 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ca13(element){
    if (qtdIngressos.includes("C13 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "C13 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("C13 ") == false){
        qtdIngressos = qtdIngressos + "C13 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("C13 ") == true){
        qtdIngressos = qtdIngressos.replace("C13 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ca14(element){
    if (qtdIngressos.includes("C14 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false ){
        qtdIngressos = "C14 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("C14 ") == false){
        qtdIngressos = qtdIngressos + "C14 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("C14 ") == true){
        qtdIngressos = qtdIngressos.replace("C14 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};






// -------------------------------------------------------------  Coluna D --------------------------------------------------------------






function da1(element){
    if (qtdIngressos.includes("D1 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "D1 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("D1 ") == false){
        qtdIngressos = qtdIngressos + "D1 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("D1 ") == true){
        qtdIngressos = qtdIngressos.replace("D1 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function da2(element){
    if (qtdIngressos.includes("D2 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "D2 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("D2 ") == false){
        qtdIngressos = qtdIngressos + "D2 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("D2 ") == true){
        qtdIngressos = qtdIngressos.replace("D2 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function da3(element){
    if (qtdIngressos.includes("D3 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "D3 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("D3 ") == false){
        qtdIngressos = qtdIngressos + "D3 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("D3 ") == true){
        qtdIngressos = qtdIngressos.replace("D3 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function da4(element){
    if (qtdIngressos.includes("D4 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "D4 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("D4 ") == false){
        qtdIngressos = qtdIngressos + "D4 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("D4 ") == true){
        qtdIngressos = qtdIngressos.replace("D4 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function da5(element){
    if (qtdIngressos.includes("D5 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "D5 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("D5 ") == false){
        qtdIngressos = qtdIngressos + "D5 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("D5 ") == true){
        qtdIngressos = qtdIngressos.replace("D5 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function da6(element){
    if (qtdIngressos.includes("D6 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "D6 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("D6 ") == false){
        qtdIngressos = qtdIngressos + "D6 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("D6 ") == true){
        qtdIngressos = qtdIngressos.replace("D6 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function da7(element){
    if (qtdIngressos.includes("D7 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "D7 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("D7 ") == false){
        qtdIngressos = qtdIngressos + "D7 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("D7 ") == true){
        qtdIngressos = qtdIngressos.replace("D7 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function da8(element){
    if (qtdIngressos.includes("D8 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "D8 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("D8 ") == false){
        qtdIngressos = qtdIngressos + "D8 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("D8 ") == true){
        qtdIngressos = qtdIngressos.replace("D8 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function da9(element){
    if (qtdIngressos.includes("D9 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "D9 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("D9 ") == false){
        qtdIngressos = qtdIngressos + "D9 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("D9 ") == true){
        qtdIngressos = qtdIngressos.replace("D9 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function da10(element){
    if (qtdIngressos.includes("D10 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "D10 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("D10 ") == false){
        qtdIngressos = qtdIngressos + "D10 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("D10 ") == true){
        qtdIngressos = qtdIngressos.replace("D10 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function da11(element){
    if (qtdIngressos.includes("D11 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "D11 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("D11 ") == false){
        qtdIngressos = qtdIngressos + "D11 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("D11 ") == true){
        qtdIngressos = qtdIngressos.replace("D11 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function da12(element){
    if (qtdIngressos.includes("D12 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "D12 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("D12 ") == false){
        qtdIngressos = qtdIngressos + "D12 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("D12 ") == true){
        qtdIngressos = qtdIngressos.replace("D12 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function da13(element){
    if (qtdIngressos.includes("D13 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "D13 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("D13 ") == false){
        qtdIngressos = qtdIngressos + "D13 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("D13 ") == true){
        qtdIngressos = qtdIngressos.replace("D13 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function da14(element){
    if (qtdIngressos.includes("D14 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "D14 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("D14 ") == false){
        qtdIngressos = qtdIngressos + "D14 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("D14 ") == true){
        qtdIngressos = qtdIngressos.replace("D14 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};






// -------------------------------------------------------------  Coluna E --------------------------------------------------------------





function ea1(element){
    if (qtdIngressos.includes("E1 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "E1 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("E1 ") == false){
        qtdIngressos = qtdIngressos + "E1 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("E1 ") == true){
        qtdIngressos = qtdIngressos.replace("E1 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ea2(element){
    if (qtdIngressos.includes("E2 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "E2 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("E2 ") == false){
        qtdIngressos = qtdIngressos + "E2 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("E2 ") == true){
        qtdIngressos = qtdIngressos.replace("E2 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ea3(element){
    if (qtdIngressos.includes("E3 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "E3 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("E3 ") == false){
        qtdIngressos = qtdIngressos + "E3 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("E3 ") == true){
        qtdIngressos = qtdIngressos.replace("E3 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ea4(element){
    if (qtdIngressos.includes("E4 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "E4 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("E4 ") == false){
        qtdIngressos = qtdIngressos + "E4 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("E4 ") == true){
        qtdIngressos = qtdIngressos.replace("E4 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ea5(element){
    if (qtdIngressos.includes("E5 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "E5 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("E5 ") == false){
        qtdIngressos = qtdIngressos + "E5 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("E5 ") == true){
        qtdIngressos = qtdIngressos.replace("E5 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ea6(element){
    if (qtdIngressos.includes("E6 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "E6 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("E6 ") == false){
        qtdIngressos = qtdIngressos + "E6 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("E6 ") == true){
        qtdIngressos = qtdIngressos.replace("E6 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ea7(element){
    if (qtdIngressos.includes("E7 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "E7 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("E7 ") == false){
        qtdIngressos = qtdIngressos + "E7 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("E7 ") == true){
        qtdIngressos = qtdIngressos.replace("E7 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ea8(element){
    if (qtdIngressos.includes("E8 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "E8 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("E8 ") == false){
        qtdIngressos = qtdIngressos + "E8 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("E8 ") == true){
        qtdIngressos = qtdIngressos.replace("E8 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ea9(element){
    if (qtdIngressos.includes("E9 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "E9 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("E9 ") == false){
        qtdIngressos = qtdIngressos + "E9 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("E9 ") == true){
        qtdIngressos = qtdIngressos.replace("E9 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ea10(element){
    if (qtdIngressos.includes("E10 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "E10 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("E10 ") == false){
        qtdIngressos = qtdIngressos + "E10 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("E10 ") == true){
        qtdIngressos = qtdIngressos.replace("E10 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ea11(element){
    if (qtdIngressos.includes("E11 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "E11 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("E11 ") == false){
        qtdIngressos = qtdIngressos + "E11 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("E11 ") == true){
        qtdIngressos = qtdIngressos.replace("E11 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ea12(element){
    if (qtdIngressos.includes("E12 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "E12 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("E12 ") == false){
        qtdIngressos = qtdIngressos + "E12 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("E12 ") == true){
        qtdIngressos = qtdIngressos.replace("E12 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ea13(element){
    if (qtdIngressos.includes("E13 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "E13 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("E13 ") == false){
        qtdIngressos = qtdIngressos + "E13 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("E13 ") == true){
        qtdIngressos = qtdIngressos.replace("E13 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ea14(element){
    if (qtdIngressos.includes("E14 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false ){
        qtdIngressos = "E14 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("E14 ") == false){
        qtdIngressos = qtdIngressos + "E14 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("E14 ") == true){
        qtdIngressos = qtdIngressos.replace("E14 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};






// -------------------------------------------------------------  Coluna F --------------------------------------------------------------





function fa1(element){
    if (qtdIngressos.includes("F1 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "F1 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("F1 ") == false){
        qtdIngressos = qtdIngressos + "F1 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("F1 ") == true){
        qtdIngressos = qtdIngressos.replace("F1 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function fa2(element){
    if (qtdIngressos.includes("F2 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "F2 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("F2 ") == false){
        qtdIngressos = qtdIngressos + "F2 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("F2 ") == true){
        qtdIngressos = qtdIngressos.replace("F2 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function fa3(element){
    if (qtdIngressos.includes("F3 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "F3 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("F3 ") == false){
        qtdIngressos = qtdIngressos + "F3 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("F3 ") == true){
        qtdIngressos = qtdIngressos.replace("F3 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function fa4(element){
    if (qtdIngressos.includes("F4 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "F4 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("F4 ") == false){
        qtdIngressos = qtdIngressos + "F4 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("F4 ") == true){
        qtdIngressos = qtdIngressos.replace("F4 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function fa5(element){
    if (qtdIngressos.includes("F5 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "F5 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("F5 ") == false){
        qtdIngressos = qtdIngressos + "F5 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("F5 ") == true){
        qtdIngressos = qtdIngressos.replace("F5 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function fa6(element){
    if (qtdIngressos.includes("F6 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "F6 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("F6 ") == false){
        qtdIngressos = qtdIngressos + "F6 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("F6 ") == true){
        qtdIngressos = qtdIngressos.replace("F6 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function fa7(element){
    if (qtdIngressos.includes("F7 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "F7 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("F7 ") == false){
        qtdIngressos = qtdIngressos + "F7 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("F7 ") == true){
        qtdIngressos = qtdIngressos.replace("F7 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function fa8(element){
    if (qtdIngressos.includes("F8 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "F8 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("F8 ") == false){
        qtdIngressos = qtdIngressos + "F8 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("F8 ") == true){
        qtdIngressos = qtdIngressos.replace("F8 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function fa9(element){
    if (qtdIngressos.includes("F9 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "F9 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("F9 ") == false){
        qtdIngressos = qtdIngressos + "F9 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("F9 ") == true){
        qtdIngressos = qtdIngressos.replace("F9 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function fa10(element){
    if (qtdIngressos.includes("F10 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "F10 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("F10 ") == false){
        qtdIngressos = qtdIngressos + "F10 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("F10 ") == true){
        qtdIngressos = qtdIngressos.replace("F10 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function fa11(element){
    if (qtdIngressos.includes("F11 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "F11 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("F11 ") == false){
        qtdIngressos = qtdIngressos + "F11 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("F11 ") == true){
        qtdIngressos = qtdIngressos.replace("F11 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function fa12(element){
    if (qtdIngressos.includes("F12 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "F12 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("F12 ") == false){
        qtdIngressos = qtdIngressos + "F12 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("F12 ") == true){
        qtdIngressos = qtdIngressos.replace("F12 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function fa13(element){
    if (qtdIngressos.includes("F13 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "F13 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("F13 ") == false){
        qtdIngressos = qtdIngressos + "F13 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("F13 ") == true){
        qtdIngressos = qtdIngressos.replace("F13 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function fa14(element){
    if (qtdIngressos.includes("F14 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false ){
        qtdIngressos = "F14 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("F14 ") == false){
        qtdIngressos = qtdIngressos + "F14 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("F14 ") == true){
        qtdIngressos = qtdIngressos.replace("F14 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};






// -------------------------------------------------------------  Coluna G --------------------------------------------------------------





function ga1(element){
    if (qtdIngressos.includes("G1 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "G1 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("G1 ") == false){
        qtdIngressos = qtdIngressos + "G1 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("G1 ") == true){
        qtdIngressos = qtdIngressos.replace("G1 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ga2(element){
    if (qtdIngressos.includes("G2 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "G2 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("G2 ") == false){
        qtdIngressos = qtdIngressos + "G2 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("G2 ") == true){
        qtdIngressos = qtdIngressos.replace("G2 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ga3(element){
    if (qtdIngressos.includes("G3 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "G3 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("G3 ") == false){
        qtdIngressos = qtdIngressos + "G3 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("G3 ") == true){
        qtdIngressos = qtdIngressos.replace("G3 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ga4(element){
    if (qtdIngressos.includes("G4 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "G4 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("G4 ") == false){
        qtdIngressos = qtdIngressos + "G4 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("G4 ") == true){
        qtdIngressos = qtdIngressos.replace("G4 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ga5(element){
    if (qtdIngressos.includes("G5 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "G5 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("G5 ") == false){
        qtdIngressos = qtdIngressos + "G5 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("G5 ") == true){
        qtdIngressos = qtdIngressos.replace("G5 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ga6(element){
    if (qtdIngressos.includes("G6 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "G6 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("G6 ") == false){
        qtdIngressos = qtdIngressos + "G6 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("G6 ") == true){
        qtdIngressos = qtdIngressos.replace("G6 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ga7(element){
    if (qtdIngressos.includes("G7 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "G7 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("G7 ") == false){
        qtdIngressos = qtdIngressos + "G7 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("G7 ") == true){
        qtdIngressos = qtdIngressos.replace("G7 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ga8(element){
    if (qtdIngressos.includes("G8 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "G8 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("G8 ") == false){
        qtdIngressos = qtdIngressos + "G8 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("G8 ") == true){
        qtdIngressos = qtdIngressos.replace("G8 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ga9(element){
    if (qtdIngressos.includes("G9 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "G9 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("G9 ") == false){
        qtdIngressos = qtdIngressos + "G9 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("G9 ") == true){
        qtdIngressos = qtdIngressos.replace("G9 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ga10(element){
    if (qtdIngressos.includes("G10 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "G10 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("G10 ") == false){
        qtdIngressos = qtdIngressos + "G10 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("G10 ") == true){
        qtdIngressos = qtdIngressos.replace("G10 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ga11(element){
    if (qtdIngressos.includes("G11 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "G11 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("G11 ") == false){
        qtdIngressos = qtdIngressos + "G11 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("G11 ") == true){
        qtdIngressos = qtdIngressos.replace("G11 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ga12(element){
    if (qtdIngressos.includes("G12 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "G12 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("G12 ") == false){
        qtdIngressos = qtdIngressos + "G12 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("G12 ") == true){
        qtdIngressos = qtdIngressos.replace("G12 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ga13(element){
    if (qtdIngressos.includes("G13 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "G13 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("G13 ") == false){
        qtdIngressos = qtdIngressos + "G13 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("G13 ") == true){
        qtdIngressos = qtdIngressos.replace("G13 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ga14(element){
    if (qtdIngressos.includes("G14 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false ){
        qtdIngressos = "G14 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("G14 ") == false){
        qtdIngressos = qtdIngressos + "G14 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("G14 ") == true){
        qtdIngressos = qtdIngressos.replace("G14 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};






// -------------------------------------------------------------  Coluna H --------------------------------------------------------------





function ha1(element){
    if (qtdIngressos.includes("H1 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "H1 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("H1 ") == false){
        qtdIngressos = qtdIngressos + "H1 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("H1 ") == true){
        qtdIngressos = qtdIngressos.replace("H1 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ha2(element){
    if (qtdIngressos.includes("H2 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "H2 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("H2 ") == false){
        qtdIngressos = qtdIngressos + "H2 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("H2 ") == true){
        qtdIngressos = qtdIngressos.replace("H2 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ha3(element){
    if (qtdIngressos.includes("H3 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "H3 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("H3 ") == false){
        qtdIngressos = qtdIngressos + "H3 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("H3 ") == true){
        qtdIngressos = qtdIngressos.replace("H3 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ha4(element){
    if (qtdIngressos.includes("H4 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "H4 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("H4 ") == false){
        qtdIngressos = qtdIngressos + "H4 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("H4 ") == true){
        qtdIngressos = qtdIngressos.replace("H4 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ha5(element){
    if (qtdIngressos.includes("H5 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "H5 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("H5 ") == false){
        qtdIngressos = qtdIngressos + "H5 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("H5 ") == true){
        qtdIngressos = qtdIngressos.replace("H5 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ha6(element){
    if (qtdIngressos.includes("H6 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "H6 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("H6 ") == false){
        qtdIngressos = qtdIngressos + "H6 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("H6 ") == true){
        qtdIngressos = qtdIngressos.replace("H6 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ha7(element){
    if (qtdIngressos.includes("H7 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "H7 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("H7 ") == false){
        qtdIngressos = qtdIngressos + "H7 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("H7 ") == true){
        qtdIngressos = qtdIngressos.replace("H7 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ha8(element){
    if (qtdIngressos.includes("H8 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "H8 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("H8 ") == false){
        qtdIngressos = qtdIngressos + "H8 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("H8 ") == true){
        qtdIngressos = qtdIngressos.replace("H8 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ha9(element){
    if (qtdIngressos.includes("H9") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "H9 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("H9 ") == false){
        qtdIngressos = qtdIngressos + "H9 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("H9 ") == true){
        qtdIngressos = qtdIngressos.replace("H9 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ha10(element){
    if (qtdIngressos.includes("H10 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "H10 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("H10 ") == false){
        qtdIngressos = qtdIngressos + "H10 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("H10 ") == true){
        qtdIngressos = qtdIngressos.replace("H10 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ha11(element){
    if (qtdIngressos.includes("H11 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "H11 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("H11 ") == false){
        qtdIngressos = qtdIngressos + "H11 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("H11 ") == true){
        qtdIngressos = qtdIngressos.replace("H11 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ha12(element){
    if (qtdIngressos.includes("H12 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "H12 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("H12 ") == false){
        qtdIngressos = qtdIngressos + "H12 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("H12 ") == true){
        qtdIngressos = qtdIngressos.replace("H12 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ha13(element){
    if (qtdIngressos.includes("H13 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "H13 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("H13 ") == false){
        qtdIngressos = qtdIngressos + "H13 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("H13 ") == true){
        qtdIngressos = qtdIngressos.replace("H13 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ha14(element){
    if (qtdIngressos.includes("H14 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false ){
        qtdIngressos = "H14 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("H14 ") == false){
        qtdIngressos = qtdIngressos + "H14 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("H14 ") == true){
        qtdIngressos = qtdIngressos.replace("H14 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};






// -------------------------------------------------------------  Coluna I --------------------------------------------------------------





function ia1(element){
    if (qtdIngressos.includes("I1 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "I1 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("I1 ") == false){
        qtdIngressos = qtdIngressos + "I1 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("I1 ") == true){
        qtdIngressos = qtdIngressos.replace("I1 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ia2(element){
    if (qtdIngressos.includes("I2 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "I2 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("I2 ") == false){
        qtdIngressos = qtdIngressos + "I2 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("I2 ") == true){
        qtdIngressos = qtdIngressos.replace("I2 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ia3(element){
    if (qtdIngressos.includes("I3 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "I3 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("I3 ") == false){
        qtdIngressos = qtdIngressos + "I3 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("I3 ") == true){
        qtdIngressos = qtdIngressos.replace("I3 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ia4(element){
    if (qtdIngressos.includes("I4 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "I4 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("I4 ") == false){
        qtdIngressos = qtdIngressos + "I4 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("I4 ") == true){
        qtdIngressos = qtdIngressos.replace("I4 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ia5(element){
    if (qtdIngressos.includes("I5 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "I5 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("I5 ") == false){
        qtdIngressos = qtdIngressos + "I5 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("I5 ") == true){
        qtdIngressos = qtdIngressos.replace("I5 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ia6(element){
    if (qtdIngressos.includes("I6 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "I6 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("I6 ") == false){
        qtdIngressos = qtdIngressos + "I6 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("I6 ") == true){
        qtdIngressos = qtdIngressos.replace("I6 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ia7(element){
    if (qtdIngressos.includes("I7 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "I7 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("I7 ") == false){
        qtdIngressos = qtdIngressos + "I7 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("I7 ") == true){
        qtdIngressos = qtdIngressos.replace("I7 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ia8(element){
    if (qtdIngressos.includes("I8 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "I8 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("I8 ") == false){
        qtdIngressos = qtdIngressos + "I8 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("I8 ") == true){
        qtdIngressos = qtdIngressos.replace("I8 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ia9(element){
    if (qtdIngressos.includes("I9 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "I9 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("I9 ") == false){
        qtdIngressos = qtdIngressos + "I9 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("I9 ") == true){
        qtdIngressos = qtdIngressos.replace("I9 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ia10(element){
    if (qtdIngressos.includes("I10 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "I10 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("I10 ") == false){
        qtdIngressos = qtdIngressos + "I10 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("I10 ") == true){
        qtdIngressos = qtdIngressos.replace("I10 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ia11(element){
    if (qtdIngressos.includes("I11 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "I11 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("I11 ") == false){
        qtdIngressos = qtdIngressos + "I11 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("I11 ") == true){
        qtdIngressos = qtdIngressos.replace("I11 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ia12(element){
    if (qtdIngressos.includes("I12 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "I12 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("I12 ") == false){
        qtdIngressos = qtdIngressos + "I12 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("I12 ") == true){
        qtdIngressos = qtdIngressos.replace("I12 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ia13(element){
    if (qtdIngressos.includes("I13 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "I13 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("I13 ") == false){
        qtdIngressos = qtdIngressos + "I13 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("I13 ") == true){
        qtdIngressos = qtdIngressos.replace("I13 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ia14(element){
    if (qtdIngressos.includes("I14 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false ){
        qtdIngressos = "I14 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("I14 ") == false){
        qtdIngressos = qtdIngressos + "I14 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("I14 ") == true){
        qtdIngressos = qtdIngressos.replace("I14 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};






// -------------------------------------------------------------  Coluna J --------------------------------------------------------------





function ja1(element){
    if (qtdIngressos.includes("J1 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "J1 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("J1 ") == false){
        qtdIngressos = qtdIngressos + "J1 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("J1 ") == true){
        qtdIngressos = qtdIngressos.replace("J1 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ja2(element){
    if (qtdIngressos.includes("J2 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "J2 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("J2 ") == false){
        qtdIngressos = qtdIngressos + "J2 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("J2 ") == true){
        qtdIngressos = qtdIngressos.replace("J2 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ja3(element){
    if (qtdIngressos.includes("J3 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "J3 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("J3 ") == false){
        qtdIngressos = qtdIngressos + "J3 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("J3 ") == true){
        qtdIngressos = qtdIngressos.replace("J3 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ja4(element){
    if (qtdIngressos.includes("J4 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "J4 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("J4 ") == false){
        qtdIngressos = qtdIngressos + "J4 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("J4 ") == true){
        qtdIngressos = qtdIngressos.replace("J4 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ja5(element){
    if (qtdIngressos.includes("J5 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "J5 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("J5 ") == false){
        qtdIngressos = qtdIngressos + "J5 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("J5 ") == true){
        qtdIngressos = qtdIngressos.replace("J5 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ja6(element){
    if (qtdIngressos.includes("J6 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "J6 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("J6 ") == false){
        qtdIngressos = qtdIngressos + "J6 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("J6 ") == true){
        qtdIngressos = qtdIngressos.replace("J6 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ja7(element){
    if (qtdIngressos.includes("J7 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "J7 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("J7 ") == false){
        qtdIngressos = qtdIngressos + "J7 ";
        contador++;
        addMoney();
        setValor();
        addMoney();
    } else if(qtdIngressos.includes("J7 ") == true){
        qtdIngressos = qtdIngressos.replace("J7 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ja8(element){
    if (qtdIngressos.includes("J8 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "J8 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("J8 ") == false){
        qtdIngressos = qtdIngressos + "J8 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("J8 ") == true){
        qtdIngressos = qtdIngressos.replace("J8 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ja9(element){
    if (qtdIngressos.includes("J9 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "J9 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("J9 ") == false){
        qtdIngressos = qtdIngressos + "J9 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("J9 ") == true){
        qtdIngressos = qtdIngressos.replace("J9 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ja10(element){
    if (qtdIngressos.includes("J10 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "J10 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("J10 ") == false){
        qtdIngressos = qtdIngressos + "J10 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("J10 ") == true){
        qtdIngressos = qtdIngressos.replace("J10 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ja11(element){
    if (qtdIngressos.includes("J11 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "J11 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("J11 ") == false){
        qtdIngressos = qtdIngressos + "J11 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("J11 ") == true){
        qtdIngressos = qtdIngressos.replace("J11 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ja12(element){
    if (qtdIngressos.includes("J12 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "J12 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("J12 ") == false){
        qtdIngressos = qtdIngressos + "J12 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("J12 ") == true){
        qtdIngressos = qtdIngressos.replace("J12 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ja13(element){
    if (qtdIngressos.includes("J13 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "J13 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("J13 ") == false){
        qtdIngressos = qtdIngressos + "J13 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("J13 ") == true){
        qtdIngressos = qtdIngressos.replace("J13 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ja14(element){
    if (qtdIngressos.includes("J14 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false ){
        qtdIngressos = "J14 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("J14 ") == false){
        qtdIngressos = qtdIngressos + "J14 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("J14 ") == true){
        qtdIngressos = qtdIngressos.replace("J14 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};






// -------------------------------------------------------------  Coluna K --------------------------------------------------------------





function ka1(element){
    if (qtdIngressos.includes("K1 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "K1 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("K1 ") == false){
        qtdIngressos = qtdIngressos + "K1 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("K1 ") == true){
        qtdIngressos = qtdIngressos.replace("K1 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ka2(element){
    if (qtdIngressos.includes("K2 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "K2 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("K2 ") == false){
        qtdIngressos = qtdIngressos + "K2 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("K2 ") == true){
        qtdIngressos = qtdIngressos.replace("K2 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ka3(element){
    if (qtdIngressos.includes("K3 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "K3 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("K3 ") == false){
        qtdIngressos = qtdIngressos + "K3 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("K3 ") == true){
        qtdIngressos = qtdIngressos.replace("K3 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ka4(element){
    if (qtdIngressos.includes("K4 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "K4 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("K4 ") == false){
        qtdIngressos = qtdIngressos + "K4 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("K4 ") == true){
        qtdIngressos = qtdIngressos.replace("K4 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ka5(element){
    if (qtdIngressos.includes("K5 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "K5 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("K5 ") == false){
        qtdIngressos = qtdIngressos + "K5 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("K5 ") == true){
        qtdIngressos = qtdIngressos.replace("K5 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ka6(element){
    if (qtdIngressos.includes("K6 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "K6 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("K6 ") == false){
        qtdIngressos = qtdIngressos + "K6 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("K6 ") == true){
        qtdIngressos = qtdIngressos.replace("K6 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ka7(element){
    if (qtdIngressos.includes("K7 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "K7 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("K7 ") == false){
        qtdIngressos = qtdIngressos + "K7 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("K7 ") == true){
        qtdIngressos = qtdIngressos.replace("K7 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ka8(element){
    if (qtdIngressos.includes("K8 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "K8 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("K8 ") == false){
        qtdIngressos = qtdIngressos + "K8 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("K8 ") == true){
        qtdIngressos = qtdIngressos.replace("K8 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ka9(element){
    if (qtdIngressos.includes("K9 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "K9 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("K9 ") == false){
        qtdIngressos = qtdIngressos + "K9 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("K9 ") == true){
        qtdIngressos = qtdIngressos.replace("K9 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ka10(element){
    if (qtdIngressos.includes("K10 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "K10 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("K10 ") == false){
        qtdIngressos = qtdIngressos + "K10 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("K10 ") == true){
        qtdIngressos = qtdIngressos.replace("K10 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ka11(element){
    if (qtdIngressos.includes("K11 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "K11 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("K11 ") == false){
        qtdIngressos = qtdIngressos + "K11 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("K11 ") == true){
        qtdIngressos = qtdIngressos.replace("K11 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ka12(element){
    if (qtdIngressos.includes("K12 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "K12 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("K12 ") == false){
        qtdIngressos = qtdIngressos + "K12 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("K12 ") == true){
        qtdIngressos = qtdIngressos.replace("K12 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ka13(element){
    if (qtdIngressos.includes("K13 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "K13 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("K13 ") == false){
        qtdIngressos = qtdIngressos + "K13 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("K13 ") == true){
        qtdIngressos = qtdIngressos.replace("K13 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ka14(element){
    if (qtdIngressos.includes("K14 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false ){
        qtdIngressos = "K14 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("K14 ") == false){
        qtdIngressos = qtdIngressos + "K14 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("K14 ") == true){
        qtdIngressos = qtdIngressos.replace("K14 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};






// -------------------------------------------------------------  Coluna L --------------------------------------------------------------





function la1(element){
    if (qtdIngressos.includes("L1 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "L1 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("L1 ") == false){
        qtdIngressos = qtdIngressos + "L1 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("L1 ") == true){
        qtdIngressos = qtdIngressos.replace("L1 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function la2(element){
    if (qtdIngressos.includes("L2 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "L2 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("L2 ") == false){
        qtdIngressos = qtdIngressos + "L2 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("L2 ") == true){
        qtdIngressos = qtdIngressos.replace("L2 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function la3(element){
    if (qtdIngressos.includes("L3 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "L3 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("L3 ") == false){
        qtdIngressos = qtdIngressos + "L3 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("L3 ") == true){
        qtdIngressos = qtdIngressos.replace("L3 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function la4(element){
    if (qtdIngressos.includes("L4 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "L4 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("L4 ") == false){
        qtdIngressos = qtdIngressos + "L4 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("L4 ") == true){
        qtdIngressos = qtdIngressos.replace("L4 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function la5(element){
    if (qtdIngressos.includes("L5 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "L5 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("L5 ") == false){
        qtdIngressos = qtdIngressos + "L5 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("L5 ") == true){
        qtdIngressos = qtdIngressos.replace("L5 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function la6(element){
    if (qtdIngressos.includes("L6 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "L6 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("L6 ") == false){
        qtdIngressos = qtdIngressos + "L6 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("L6 ") == true){
        qtdIngressos = qtdIngressos.replace("L6 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function la7(element){
    if (qtdIngressos.includes("L7 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "L7 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("L7 ") == false){
        qtdIngressos = qtdIngressos + "L7 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("L7 ") == true){
        qtdIngressos = qtdIngressos.replace("L7 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function la8(element){
    if (qtdIngressos.includes("L8 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "L8 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("L8 ") == false){
        qtdIngressos = qtdIngressos + "L8 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("L8 ") == true){
        qtdIngressos = qtdIngressos.replace("L8 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function la9(element){
    if (qtdIngressos.includes("L9 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "L9 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("L9 ") == false){
        qtdIngressos = qtdIngressos + "L9 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("L9 ") == true){
        qtdIngressos = qtdIngressos.replace("L9 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function la10(element){
    if (qtdIngressos.includes("L10 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "L10 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("L10 ") == false){
        qtdIngressos = qtdIngressos + "L10 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("L10 ") == true){
        qtdIngressos = qtdIngressos.replace("L10 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function la11(element){
    if (qtdIngressos.includes("L11 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "L11 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("L11 ") == false){
        qtdIngressos = qtdIngressos + "L11 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("L11 ") == true){
        qtdIngressos = qtdIngressos.replace("L11 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function la12(element){
    if (qtdIngressos.includes("L12 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "L12 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("L12 ") == false){
        qtdIngressos = qtdIngressos + "L12 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("L12 ") == true){
        qtdIngressos = qtdIngressos.replace("L12 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function la13(element){
    if (qtdIngressos.includes("L13 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "L13 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("L13 ") == false){
        qtdIngressos = qtdIngressos + "L13 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("L13 ") == true){
        qtdIngressos = qtdIngressos.replace("L13 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function la14(element){
    if (qtdIngressos.includes("L14 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false ){
        qtdIngressos = "L14 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("L14 ") == false){
        qtdIngressos = qtdIngressos + "L14 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("L14 ") == true){
        qtdIngressos = qtdIngressos.replace("L14 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};






// -------------------------------------------------------------  Coluna M --------------------------------------------------------------





function ma1(element){
    if (qtdIngressos.includes("M1 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "M1 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("M1 ") == false){
        qtdIngressos = qtdIngressos + "M1 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("M1 ") == true){
        qtdIngressos = qtdIngressos.replace("M1 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ma2(element){
    if (qtdIngressos.includes("M2 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "M2 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("M2 ") == false){
        qtdIngressos = qtdIngressos + "M2 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("M2 ") == true){
        qtdIngressos = qtdIngressos.replace("M2 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ma3(element){
    if (qtdIngressos.includes("M3 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "M3 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("M3 ") == false){
        qtdIngressos = qtdIngressos + "M3 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("M3 ") == true){
        qtdIngressos = qtdIngressos.replace("M3 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ma4(element){
    if (qtdIngressos.includes("M4 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "M4 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("M4 ") == false){
        qtdIngressos = qtdIngressos + "M4 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("M4 ") == true){
        qtdIngressos = qtdIngressos.replace("M4 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ma5(element){
    if (qtdIngressos.includes("M5 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "M5 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("M5 ") == false){
        qtdIngressos = qtdIngressos + "M5 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("M5 ") == true){
        qtdIngressos = qtdIngressos.replace("M5 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ma6(element){
    if (qtdIngressos.includes("M6 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "M6 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("M6 ") == false){
        qtdIngressos = qtdIngressos + "M6 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("M6 ") == true){
        qtdIngressos = qtdIngressos.replace("M6 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ma7(element){
    if (qtdIngressos.includes("M7 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "M7 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("M7 ") == false){
        qtdIngressos = qtdIngressos + "M7 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("M7 ") == true){
        qtdIngressos = qtdIngressos.replace("M7 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ma8(element){
    if (qtdIngressos.includes("M8 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "M8 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("M8 ") == false){
        qtdIngressos = qtdIngressos + "M8 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("M8 ") == true){
        qtdIngressos = qtdIngressos.replace("M8 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ma9(element){
    if (qtdIngressos.includes("M9 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "M9 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("M9 ") == false){
        qtdIngressos = qtdIngressos + "M9 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("M9 ") == true){
        qtdIngressos = qtdIngressos.replace("M9 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ma10(element){
    if (qtdIngressos.includes("M10 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "M10 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("M10 ") == false){
        qtdIngressos = qtdIngressos + "M10 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("M10 ") == true){
        qtdIngressos = qtdIngressos.replace("M10 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ma11(element){
    if (qtdIngressos.includes("M11 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "M11 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("M11 ") == false){
        qtdIngressos = qtdIngressos + "M11 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("M11 ") == true){
        qtdIngressos = qtdIngressos.replace("M11 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ma12(element){
    if (qtdIngressos.includes("M12 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "M12 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("M12 ") == false){
        qtdIngressos = qtdIngressos + "M12 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("M12 ") == true){
        qtdIngressos = qtdIngressos.replace("M12 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ma13(element){
    if (qtdIngressos.includes("M13 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false){
        qtdIngressos = "M13 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("M13 ") == false){
        qtdIngressos = qtdIngressos + "M13 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("M13 ") == true){
        qtdIngressos = qtdIngressos.replace("M13 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};


function ma14(element){
    if (qtdIngressos.includes("M14 ") == false && qtdIngressos.includes("A") == false && qtdIngressos.includes("B") == false && qtdIngressos.includes("C") == false && qtdIngressos.includes("D") == false && qtdIngressos.includes("E") == false && qtdIngressos.includes("F") == false && qtdIngressos.includes("G") == false && qtdIngressos.includes("H") == false && qtdIngressos.includes("I") == false && qtdIngressos.includes("J") == false && qtdIngressos.includes("K") == false && qtdIngressos.includes("L") == false && qtdIngressos.includes("M") == false && qtdIngressos.includes("N") == false && qtdIngressos.includes("O") == false ){
        qtdIngressos = "M14 ";
        contador++;
        addMoney();
        setValor();
    } else if (qtdIngressos.includes("M14 ") == false){
        qtdIngressos = qtdIngressos + "M14 ";
        contador++;
        addMoney();
        setValor();
    } else if(qtdIngressos.includes("M14 ") == true){
        qtdIngressos = qtdIngressos.replace("M14 ", "" );
        contador--;
        addMoney();
        setValor();
    }
};



function addMoney(){
    var valor = 20.00;
    
    var inteira = valor*contador;
    var meia = valor*contador / 2;

    document.getElementById('inteiraRS').value = inteira;
    document.getElementById('meiaRS').value = meia;


}

function setValor() {
    document.getElementById('entrada').value = qtdIngressos;
}

