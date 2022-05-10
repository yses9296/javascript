var fruits = ["apple", "orange", "cherry"];

// for 
for (var i = 0; i < fruits.length; i++){
    document.getElementById('for').innerHTML += "<li>" +  fruits[i] + "</li>";
}


// for each
fruits.forEach(function(item, index){
    document.getElementById('foreach').innerHTML += "<li>" + item + "</li>";
    // document.getElementById('foreach').innerHTML += "<li>" + fruits[index] + "</li>";
})


// for of
for (const fruit of fruits) {
    document.getElementById('forof').innerHTML += "<li>" + fruit + "</li>";
}

//for in (객체 내의 값들마다 할 일) >> 객체 = 변수(property) + 함수(method)
var person = {name:'Eunseo', age: '24', gender: 'female'};

for (const key in person) {
        document.getElementById('forin').innerHTML += "<li>" + key + ': ' + person[key] + "</li>";
}


//do / while
var y = 0;
do{
    document.getElementById('dowhile').innerHTML += "<li>" + fruits[y] + "</li>";
    y++;
}
while(y < fruits.length);
