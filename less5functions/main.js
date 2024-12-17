function makeTea(cup, kindtea) {
    console.log("Brewing "+cup + " cups of " +kindtea);
}
//вызов функции
makeTea(3, "Earl Grey");

//один аргумент
makeTea(3);

//лишинеи аргументы
makeTea(4, "Tiguanin", "Coffe", 47)

//неверный порядок аргументов
makeTea("Bergamot tea", 6)

//функция без параметров
function makeCofee() {
    console.log("NO COFFEE");
}
makeCofee();