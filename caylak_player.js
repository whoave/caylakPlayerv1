// ÇAYLAKGİRİŞİMCİ @R10.NET //
caylakPlayer=function(data){if(data.genislik&&data.yukselik){var caylakWidth=data.genislik;var caylakHeight=data.yukselik;document.querySelector(data.denSonra).style.width=caylakWidth+"px";document.querySelector(data.denSonra).style.height=caylakHeight+"px"}var caylakLogo;var caylakRenk1;var caylakRenk2;var caylakKlas;if(!data.logo){caylakLogo="https://resmim.net/f/CND4iZ.png"}else{caylakLogo=data.logo}switch(data.renk){case 'kırmızı':caylakRenk1="#873D48";caylakRenk2="#6B0F1A";caylakKlas="caylakKirmizi";break;case 'mavi':caylakRenk1="#073B4C";caylakRenk2="#118AB2";caylakKlas="caylakMavi";break;case 'pembe':caylakRenk1="#F59CA9";caylakRenk2="#F6828C";caylakKlas="caylakPembe";break;case 'mor':caylakRenk1="#371E30";caylakRenk2="#A03E99";caylakKlas="caylakMor";break;case 'yesil':caylakRenk1="#68A691";caylakRenk2="#BFD3C1";caylakKlas="caylakYesil";break;case 'deri':caylakRenk1="#694F5D";caylakRenk2="#EFC7C2";caylakKlas="caylakDeri";break;case 'beyaz':caylakRenk1="#595959";caylakRenk2="#E3D3E4";caylakKlas="caylakBeyaz";break;default:break}document.querySelector(data.denSonra).innerHTML+=`
<div class="caylakoynatici"><video class="caylakvideo" oncontextmenu="return false;" src="${data.video}"></video><i class="fas fa-angle-double-right caylak_ileri"></i><i class="fas fa-volume-up caylak_ses">&nbsp;100</i><i class="fas fa-tachometer-alt caylak_hiz">&nbsp;0.5</i><div class="caylakkontrol"><div class="caylakcubuk"><div class="caylakilerleme"></div></div><button class="caylak_buton"><i class="fas fa-play caylak_oynat"></i></button><input type="range" min="0" max="1" step="0.01" name="caylakses" value="1" class="caylakslider"><input type="range" min="0.5" max="2" step="0.1" name="caylakhiz" value="1" class="caylakslider"><img src="${caylakLogo}" alt="logo"><button class="caylak_buton caylakbuyutec"><i class="fas fa-compress"></i></button></div></div>`;const caylakvideo=document.querySelector(data.denSonra+"  .caylakvideo");const caylakcubuk=document.querySelector(data.denSonra+" .caylakcubuk");const caylakilerleme=document.querySelector(data.denSonra+" .caylakilerleme");const caylak_oynat=document.querySelector(data.denSonra+"  .caylak_oynat");const caylak_slider=document.querySelectorAll(data.denSonra+" .caylakslider");caylakcubuk.style.backgroundColor=caylakRenk1;caylakilerleme.style.backgroundColor=caylakRenk2;document.querySelectorAll(data.denSonra+" .caylakslider").forEach(element=>{element.className=caylakKlas});document.querySelectorAll(data.denSonra+" .caylakbuyutec").forEach(element=>{element.addEventListener('click',caylakDevEkran)});function caylakDevEkran(){if(caylakvideo.requestFullscreen){caylakvideo.requestFullscreen()}else if(caylakvideo.mozRequestFullScreen){caylakvideo.mozRequestFullScreen()}else if(caylakvideo.webkitRequestFullscreen){caylakvideo.webkitRequestFullscreen()}else if(caylakvideo.msRequestFullscreen){caylakvideo.msRequestFullscreen()}}function caylak_ackapa(){caylakvideo[caylakvideo.paused?'play':'pause']()}
function caylak_buton_degis(){const caylakikon=this.paused?'fas fa-play caylak_oynat':'fas fa-pause caylak_oynat';caylak_oynat.className=caylakikon}function caylak_atlat(){caylakvideo.currentTime+=15;document.querySelector(data.denSonra+" .caylak_ileri").style.display="block";setInterval(function(){document.querySelector(data.denSonra+" .caylak_ileri").style.display="none"},100)}function caylakRangeKontrol(){switch(this.name){case "caylakses":caylakvideo.volume=this.value;document.querySelector(data.denSonra+" .caylak_ses").style.display="block";document.querySelector(data.denSonra+" .caylak_ses").innerHTML="&nbsp;"+Math.floor(this.value*100);break;case "caylakhiz":caylakvideo.playbackRate=this.value;document.querySelector(data.denSonra+" .caylak_hiz").style.display="block";document.querySelector(data.denSonra+" .caylak_hiz").innerHTML="&nbsp;"+this.value+"x";break;default:break}}function caylakIlerleme(){const caylakYuzde=(caylakvideo.currentTime/caylakvideo.duration)*100;caylakilerleme.style.width=`${caylakYuzde}%`}function caylakIsinlan(e){const isinlanmZamani=(e.offsetX/caylakcubuk.offsetWidth)*caylakvideo.duration;caylakvideo.currentTime=isinlanmZamani}caylakvideo.addEventListener('dblclick',caylak_atlat);caylakvideo.addEventListener('click',caylak_ackapa);caylakvideo.addEventListener('play',caylak_buton_degis);caylakvideo.addEventListener('pause',caylak_buton_degis);caylak_oynat.addEventListener('click',caylak_ackapa);caylakvideo.addEventListener('timeupdate',caylakIlerleme);caylakcubuk.addEventListener('click',caylakIsinlan);caylak_slider.forEach(slider=>{slider.addEventListener('change',function(){caylak_slider.forEach(slider=>{slider.addEventListener('mousemove',caylakRangeKontrol)});caylak_slider.forEach(slider=>{slider.addEventListener('mouseleave',function(){document.querySelector(data.denSonra+" .caylak_ses").style.display="none";document.querySelector(data.denSonra+" .caylak_hiz").style.display="none"})})})})}