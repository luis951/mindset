var dataWorkshop1 = new Date("Jun 10, 2018 20:00:00 GMT-0300 (Horário Padrão de Brasília)").getTime();
var dataWorkshop2 = new Date("Jun 12, 2018 20:00:00 GMT-0300 (Horário Padrão de Brasília)").getTime();
var dataWorkshop3 = new Date("Jun 14, 2018 20:00:00 GMT-0300 (Horário Padrão de Brasília)").getTime();
var cronometroVideo1, cronometroVideo2, cronometroVideo3;
var videoMain = document.getElementById('videoMain');
var source = document.getElementById('videoMainSrc');


window.onload = function acertarCronometro() {
    var atualizarContagem = (cronometroVideo1%1*1000-100);
    cronometroVideo1 = (dataWorkshop1 - new Date())/(1000);
    cronometroVideo2 = (dataWorkshop2 - new Date())/(1000);
    cronometroVideo3 = (dataWorkshop3 - new Date())/(1000);
    videoMain = document.getElementById('videoMain');
    source = document.getElementById('videoMainSrc');
    document.getElementById("cronometro1").innerHTML = (formatarTempo(cronometroVideo1*1000));
    document.getElementById("cronometro2").innerHTML = (formatarTempo(cronometroVideo2*1000));
    document.getElementById("cronometro3").innerHTML = (formatarTempo(cronometroVideo3*1000));
    window.setTimeout(function () {
        window.setInterval(function () {
            cronometroVideo1 = (dataWorkshop1 - new Date())/(1000);
            cronometroVideo2 = (dataWorkshop2 - new Date())/(1000);
            cronometroVideo3 = (dataWorkshop3 - new Date())/(1000);
            if(cronometroVideo1<=0) document.getElementById("cronometro1").innerText = "Disponível!";
            else document.getElementById("cronometro1").innerText = (formatarTempo(cronometroVideo1*1000));

            if(cronometroVideo2<=0) document.getElementById("cronometro2").innerText = "Disponível!";
            else document.getElementById("cronometro2").innerText = (formatarTempo(cronometroVideo2*1000));

            if(cronometroVideo3<=0) document.getElementById("cronometro3").innerText = "Disponível!";
            else document.getElementById("cronometro3").innerText = (formatarTempo(cronometroVideo3*1000));
        },1000);
    },atualizarContagem);

}

function trocarVideo(videoNovo) {
    videoMain.pause();
    console.log(videoValido(videoNovo));
    if(videoValido(videoNovo)){
        videoMain.pause();
        source.setAttribute('src', videoNovo);
        videoMain.load();
        videoMain.appendChild(source);
        videoMain.play();
    } else {
        window.alert("Este vídeo não está disponível, tente novamente mais tarde");
    }
}

function videoValido(video) {
    if(video=='video/work-1.mp4')
        if (cronometroVideo1<=0)  return true; else return false;
    else if(video=='video/work-2.mp4')
        if (cronometroVideo2<=0) return true; else return false;
    else if(video=='video/work-3.mp4')
        if (cronometroVideo3<=0) return true; else return false;
}

function formatarTempo(s) {
    var ms = s % 1000;
    s = (s - ms) / 1000;
    var secs = s % 60;
    s = (s - secs) / 60;
    var mins = s % 60;
    var hrs = (s - mins) / 60;

    return hrs + ':' + mins + ':' + secs;
}

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v3.0';
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'))