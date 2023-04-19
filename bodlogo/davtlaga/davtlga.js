// for(i=1; i<=100; i++){
//     if(i%9===0) {
//         console.log(i);
//     }
// }

// for(i=1; i<=10; i++) {
//     console.log(i);
// }

// for(var i=10; i>0; i--) {
//     console.log(i);
//     var s=0;
//     for(var j=1; j<=i; j++){
//         s=s+j;
//     } console.log(s)
// }

// var s=0;
// for(i=1; i<=10; i++) {
//     s=s+i;
// }
// console.log(s);

// var s=0;
// for(i=6; i<=100; i++) {
//     if(i%7==5) {
//         s=s+i;
//         console.log(i)
//     }
// }
// console.log(s)

// for(i=1; i<=100; i++) {
//     if(i%2==0) {
//         console.log(i);
//     }
// }

// for(i=1; i<=100; i++) {
//     if(i%2==1) {
//         console.log(i);
//     }
// }

// var a = prompt('toogoo oruul')
// if(a !=='') {
//     if(a%2==0) {
//         console.log('tegsh')
//     } else if (a%2==1) {
//         console.log('sondgoi')
//     } else {
//         console.log('aldatai')
//     }
// }

// for(i=1; i<=100; i++) {
//     for(j=1; j<=10; j++) {
//         if(j*j==i) {
//             console.log(i)
//         }        
//     }
// }

// var s=1;
// for(i=1;  i<=9; i++) {
//     s=s*i;
// } console.log(s)

// var a = prompt('onoo oruulda')
// for(i=1936; i<=a; i=i+4) {
//     if((a-i)%4==0) {
//         console.log('undr jil')
//     } else {
//         console.log('bish')
//     }
// }

for(i=1; i<=100; i++) {
    for(var j=0; j=i; j++) {
        if(i%j==0){
            var s=s+1;
        }
    }
    if(s==2)
    console.log(i);
    s=0;
}