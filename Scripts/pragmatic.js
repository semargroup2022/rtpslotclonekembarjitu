var x=[0,225,34,450,910,873,725,324,311,963,177,558,876,65,903,2,271,305,234,146,826,92,80,533,96,136,122,602,217,893,581,274,321,435,741,662,846,277,1,776,103,336,856,830,198,843,187,10,409,848,583,885,402,200,929,816,454,424,587,72,488,269,238,958,772,185,959,685,966,889,403,629,126,166,368,391,492,142,710,503,850,996,363,588,633,293,936,960,268,491,514,41,833,948,582,709,239,341,182,191,48,32,908,540,144,110,632,141,729,522,859,954,184,286,586,845,779,866,573,74,924,786,911,768,143,157,676,446,70,120,518,490,783,222,389,225,34,450,910,873,725,324,311,963,177,558,876,65,903,2,271,305,234,146,826,92,80,533,96,136,122,969,314,323,722,457,379,838,909,809,626,704,767,90,683,447,281,357,438,825,366,991,914,962,794,61,414,670,60,349,874,753,232,527,3,27,721,350,374,917,218];for(let i=1;i<=8;i++){const d=new Date();var date=d.getUTCDate();var day=d.getUTCDay()+1;var year=d.getUTCFullYear();var month=d.getUTCMonth()+1;var hour=d.getUTCHours();var min=d.getMinutes();if(min<30){min=1;}else{min=2;}
var xx=day+year*month*date;xx=Math.pow(xx,hour*min);xx=xx*x[i];if(i==1||i==2||i==3||i==4||i==5||i==6||i==7||i==8){xx=xx%7;xx+=85;}else{xx=xx%83;xx+=8;}
const as="percent-bar-"+i;const asd="percent-txt-"+i;var percentTxt=document.getElementById("percent-txt-"+i);var bar=document.getElementById("percent-bar-"+i);const bartext=document.getElementById("card-title"+i);percentTxt.innerHTML=xx+"%";$("#percent-bar-"+i).attr("aria-valuenow",xx).css("width",xx+"%");if(xx<30){bar.classList.add("red");}else if(xx>70){bar.classList.add("green");}else{bar.classList.add("yellow");}}
for(let i=9;i<=181;i++){const d=new Date();var date=d.getUTCDate();var day=d.getUTCDay()+1;var year=d.getUTCFullYear();var month=d.getUTCMonth()+1;var hour=d.getUTCHours();var min=d.getMinutes();if(min<30){min=1;}else{min=2;}
var xx=day+year*month*date;xx=Math.pow(xx,hour*min);xx=xx*x[i];if(i==5||i==6||i==2||i==114||i==73||i==41||i==4||i==92||i==134||i==10||i==78||i==66){xx=xx%27;xx+=65;}else{xx=xx%83;xx+=8;}
const as="percent-bar-"+i;const asd="percent-txt-"+i;var percentTxt=document.getElementById("percent-txt-"+i);var bar=document.getElementById("percent-bar-"+i);const bartext=document.getElementById("card-title"+i);percentTxt.innerHTML=xx+"%";$("#percent-bar-"+i).attr("aria-valuenow",xx).css("width",xx+"%");if(xx<30){bar.classList.add("red");}else if(xx>70){bar.classList.add("green");}else{bar.classList.add("yellow");}}