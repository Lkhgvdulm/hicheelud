// const utga zarlah neg turliin tulhuur ug
// togtmol utga onoodog , togtmol utga zarladag ba uuniig uurchluh bolomjgu
// mun dahin zarlah bolomjgu
// gsen hedii ch tuhain togtmol too n obj eswl massive bol (object bolon massive hiigddg uildluud bugd bolnoo)

const udur = document.getElementById('days');
const tsag = document.getElementById('hours');
const minut = document.getElementById('minutes');
const second = document.getElementById('seconds');

const newYears = '1 Jan 2023';
function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    const totalSeconds =(newYearsDate- currentDate) / 1000;

    const days = Math.floor(totalSeconds/3600/24);
    const hours = Math.floor(totalSeconds/3600)%24;
    const minuts = Math.floor(totalSeconds /60)%60;
    const seconds = Math.floor(totalSeconds)%60;

    udur.innerHTML = days;
    tsag.innerHTML = formatTime(hours);
    minut.innerHTML = formatTime(minuts);
    second.innerHTML = formatTime(seconds);
}

    function formatTime(time){
        return time < 10 ? `0${time}` : time;
    }

countdown();
setInterval(countdown, 1000)
