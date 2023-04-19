// object uusgeh

var test1={
    ner: ' lkhagvaa ',
    nas: 20 ,
    hevleh:function(){
        console.log(this.ner  + this.nas  + 'nastai' );
    }
       
};

test1.hevleh();

var test2={};

test2.ner = ' Ariuka ';
test2.nas = 21;
test2.hevleh = function(){
    console.log(this.ner  + this.nas  + 'nastai' );
}
test2.hevleh();

function Hun(ner){
    var obj = Object.create(Hun.prototype);
    obj.name = ner;
    obj.hevleh = function(){
        console.log(obj.name + ' sain bnu ');
    }

    return obj;
}

// var hh = Hun('Hosoo');
// hh.hevleh();
// var hh2 = Hun( ' ARIUKA ')
// hh2.hevleh();
// console.log(hh2)

// prototype ni object bur tsaanaa prototype gsn objecttei bdg 
// udamshil ... 

var uwuu = {
    name : 'Baagii',
    huuhed1 : ' Oogii ',
    huuhed2 : ' Chimegee '
};
var aaw = Object.create(uwuu);
    aaw.name = ' Oogii ';
var bi = Object.create(aaw);
    bi.name = ' Hosoo '; 
var aawiinAh = Object.create(uwuu);
var aawiinEgch = Object.create(uwuu);
    console.log(bi.name);
    console.log(aaw.name);
    console.log(bi.__proto__);
    console.log(aawiinAh.__proto__);
    console.log(aawiinEgch.__proto__);
    console.log(aaw.huuhed1);

    // new 
    // function Hun(ner){
    //     var obj = Object.create(Hun.prototype);
    //     obj.name = ner;
    //     obj.age = nas;
    //     obj.hevleh = function(){console.log(obj.name + ' sain bnu ');
    //     }
    
    //     return obj; }
    // var hh = Hun( ' Hosoo ', 27);
    // hh.hevleh();

    function Hun(ner){
        this.name = ner;
        this.mendleh = function(){
            console.log(this.name + ' sn bnu ');
        };
    }

    var hh = new Hun(' Hosoo');
    hh.mendleh();
    

var hool = {
    name : ' HOOLNI SET ',
    price : ' 100$ ',
    turul : [
        {
            name : ' tahianii mah ',
            ports : ' 2 hun ',
            orts : [' guy ', ' tseej ']
        },
        {
            name : ' uhriin mah ',
            ports : ' 1 hun ',
            orts : [' nuruu mah ', ' neg ym ']
        }
    ]


}
console.log(hool.name);
console.log(hool.turul);

var hool1 = {}; 

// hool1.name = [' hoolni set '];
// hool1.price = [' 100$ ']
// hool1.turul = []; 
// hool1.turul[1] = [' tahianii mah ']
// hool1.turul[1] = [' uhriin mah']
// hool1.orts = ['1 hun']
// hool1.hevleh = function(){
//     console.log(this.name)
//     console.log(hool1.turul)
// }


var hool2 = {
    name: 'fjaoj',
    une: '4564564'
    
}
var hoolniiMassiv = [hool2, hool]
console.log(hoolniiMassiv) 

