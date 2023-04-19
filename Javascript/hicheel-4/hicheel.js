var name = prompt('neree oruul') ;
var dun = prompt('dungee oruulna u')

if(dun >= 90){
    console.log(name + ' bol onts surdg ');
} else if (dun < 90 && dun>=80 ){
    console.log(name + ' bol sain surdg ');
} else if (dun < 80 && dun >=70){
    console.log (name + ' bol yahwdee l surdg');
} else if(dun < 70 && dun >= 60){
    console.log (name + ' bol hichele hii');
} else {
    console.log(name + 'muu surdg');
}

// else == :
// if == (nuhtsul) araas ni ? orj irj bga 

dun >= 90 ? console.log(name + ' bol onts surdg ')
    : 90 > dun && dun >= 80 ? console.log(name + ' bol sain surdg ')
    : 80 > dun && dun >= 70 ? console.log (name + ' bol yahwdee l surdg')
    : 70 > dun && dun >= 60 ? console.log (name + ' bol hichele hii')
    :console.log(name + 'muu surdg'); 

// switch case 
// gurwalsan operatortoi tustei

// switch(true){
//     case dun >= 90 : console.log(' bol onts surdg '); break;
//     case 90 > dun && dun >=80 ? console.log('bol sain surdg'); break;
//     case 80 > dun && dun >80 ? console.log('bol yhwde surdg'); break;
//     default: console.log('bol muu surdg')
// }

// davtalt 'for 

// for davtaltiig davtah too ni todorhoi uyd ashigldg 
// 1-100 hurtel tooni niilberig ol gwl 
// 1 gsn toog 100 udaa 2-r nemegduulwl yahwe

// for (A, B, C,){
//               }

// A ni tuhainn davtaltiin ehleh nuhtsul
// B - davtalt duusah uyiin nuhtsul
// C - davtalt bolgond tuhain huwisagchiig uurchluh uildel


// i=i+1


// i 10-n uyd j 10 udaa davtaltaa hiine

// i=1 s=1
// i=2 s=1+2== s=3
// i=3 s=3+3== s=6






