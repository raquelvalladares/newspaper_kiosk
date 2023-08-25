const links = ['<iframe src="https://www.prageru.com/video/can-you-trust-the-ny-times?gclid=EAIaIQobChMI1PCM7vXUgAMVbUZ_AB3tGwPuEAAYASAAEgIXwfD_BwE" height="500px" width="500px"></iframe>', ' <iframe src="https://www.thenationallinks.com/world/us-links/?psafe_param=1&utm_source=paid+google&utm_medium=paidsearch&utm_campaign=us+uk+always+on&utm_term=&gclid=EAIaIQobChMIzOCcqfbUgAMVaCfUAR3K4QE0EAAYAyAAEgLBufD_BwE" height="500px" width="500px"></iframe>', ' <iframe src="https://www.fox5ny.com/tag/us/ny/nyc/manhattan/times-square" height="500px" width="500px"></iframe>'];
atrasBot = document.getElementById("ret");
sigBot = document.getElementById("sig");
num = document.getElementById("num");
var i = 0;
function lis() {
  num.innerHTML = links[0];
}
function sig() {
  i++;
  if (i == links.length) {
    num.innerHTML=links[0];
    i=0;
  }
  num.innerHTML = links[i];
}
function ret() {
  if (i == 0) {
    num.innerHTML=links[(links.length)-1];
    i=links.length-1;
    console.log(i);
  }
 else{  
  i--;
  num.innerHTML = links[i];}
}