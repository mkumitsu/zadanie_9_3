var text = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.";
var dinosaur = 'triceratops';
var ucDinosaur = dinosaur.toUpperCase();
console.log(ucDinosaur); //sprawdzenie czy Uppercase działa
var newText = text.replace('Velociraptor', ucDinosaur);
console.log(newText); //sprawdzenie czy zmieniło nazwy
console.log(newText.length / 2); //sprawdzenie ile znaków jest potrzebnych
var partOfText = newText.slice(0, 72);
console.log(partOfText); //wyświetlenie pożądanej dłgości tekstu