//  == ter utgataigaa tentsuu bwl
// >= ih buyu tentsuu true or false var a = x>=y
// <= baga buyu tentsuu
// = utga onooj uguh
//  ** zeregt devshuuleh 
//  != ymr neg utga tentsuu bish bwal 
// !== ymr neg utga tentsuu bish bwal unen bolno x = 20 y = 10
 
 
// if else ni ymr neg nuhtsul ni biylehgu bwl
// if else, else if neg utgan dr olon nuhtsul shalgahaar bol 
// else if ni neg utgan shalgahaar bol

var onoo = prompt('awsn onoogoo oruulna uu') 
var message = alert('onoogoo oruul')

if(onoo !== ' '){
    
    var grade = onoo / 50 * 100
    
    if(grade >= 90){
        console.log('A')
        alert(grade + '%' + 'A')
    } else if(grade >= 80 ){
        console.log('B')
        alert(grade + '%' + 'B')
    } else if (grade >= 70 ){
        console.log ('C')
        alert(grade + '%' + 'C')
    } else if (grade >= 60 ){ 
        console.log ('D')
        alert(grade + '%' + 'D')
    }else if (grade <= 60 ){
        console.log ('F')
        alert(grade + '%'+ 'F')
    }
} else { 
    console.log(message) 
}


// var misheel = 17
// var oyuka = 19
// var bi = 23
// var buynaa = 42

// // var nas = prompt('nasaa bich')

// var dundaj = (misheel + oyuka + bi +  buynaa) / 4 
// console.log(dundaj) 
    
// if(misheel > dundaj){
//     console.log('dundjaas ih')
// } else{
//     console.log('dunsjaas baga')
// }
// if(buynaa > dundaj){
//     console.log('dundjaas ih')
// } else{
//     console.log('dunsjaas baga')
// }

// var ner = prompt('ta neree oruulna uu')