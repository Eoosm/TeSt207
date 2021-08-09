scores = 0

let a = prompt("Выберите язык разметки: a) HTML b) CSS c) JS ");
if (a == "a"){
  scores +=2;
}

let b = prompt("Выберите язык програмирования: b) a) CSS b) JS c) HTML");
if (b == "b"){
  scores +=4;
}

alert(` ${scores} - результат.`);
