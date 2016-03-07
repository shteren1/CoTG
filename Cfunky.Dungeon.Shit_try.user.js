// ==UserScript==
// @name Cfunky Dungeon Shit try
// @namespace https://github.com/shteren1/CoTG/blob/master/Cfunky_Dungeon_Shit.user_try.js
// @version 0.2
// @description enter something useful
// @author You
// @match https://w1.crownofthegods.com/World00.php
// @grant none
// ==/UserScript==
(function FunkyScript() {
var loot=[0,400,1000,4500,15000,33000,60000,120000,201000,300000,446000];
var numbs=[0,0,0];
var ttloot=[0,0,10,20,10,10,5,0,15,20,15,10,0,0,1000,1500,3000];
// 2 rangers, 3 triari, 4 priestess, 5 vanqs, 6 sorc, 8 arbs,9 praetors, 10 horses, 11 druids, 14 galley, 15 stinger, 16 warship

    $(document).ready(function() {
        $("#loccavwarconGo").click(function() {
            //createTable();
            setTimeout(function(){getDugRows();}, 1000);
        });
        
        $("#raidmantab").click(function() {
            setTimeout(function(){getDugRows();}, 1000);
        });
    });



        document.getElementById('raidDungGo').onclick = function() {
            createTable();
        };  
        /*document.getElementById('raidmantab').onclick = function() {
            createTable();
        };
        document.getElementById('loccavwarconGo').onclick = function() {
            createTable();
        };  */


    function createTable() {
        $('#cfunkydiv').remove();
        var ptworow=$("#Progress").html();
        if (ptworow==0)
        {ptworow=100;}
	var plevorow=$("#dunglevelregion").html();
	var ptropneed = Math.ceil(loot[plevorow]*((100-ptworow)*0.008+1)/10);
        var outtable="<div id='cfunkydiv' style='width:500px;height:330px;background-color: #E2CBAC;-moz-border-radius: 10px;-webkit-border-radius: 10px;border-radius: 10px;border: 4px ridge #DAA520;position:absolute;right:10px;top:100px; z-index:1000000;'><div class=\"popUpBar\"> <span class=\"ppspan\">Suggested Raiding Numbers - Caver progress "+ptworow+"%</span> <button id=\"cfunkyX\" onclick=\"$('#cfunkydiv').remove();\" class=\"xbutton greenb\"><div id=\"xbuttondiv\"><div><div id=\"centxbuttondiv\"></div></div></div></button></div><div class=\"popUpWindow\">";
        outtable+="<table><thead><th>Lvl</th><th>Estimated Loot</th><th>Vanqs/Rangers<br>druids</th><th>Sorcs</th><th>Praetors</th><th>Arbs/Horses</th></thead>";
        outtable+="<tbody><tr><td>1</td><td>400</td><td>"+Math.ceil(loot[1]*((100-ptworow)*0.008+1)/10)+"</td><td>"+Math.ceil(loot[1]*((100-ptworow)*0.008+1)/5)+"</td><td>"+Math.ceil(loot[1]*((100-ptworow)*0.008+1)/20)+"</td><td>"+Math.ceil(loot[1]*((100-ptworow)*0.008+1)/15)+"</td></tr>";
        outtable+="<tr><td>2</td><td>1000</td><td>"+Math.ceil(loot[2]*((100-ptworow)*0.008+1)/10)+"</td><td>"+Math.ceil(loot[2]*((100-ptworow)*0.008+1)/5)+"</td><td>"+Math.ceil(loot[2]*((100-ptworow)*0.008+1)/20)+"</td><td>"+Math.ceil(loot[2]*((100-ptworow)*0.008+1)/15)+"</td></tr>";
        outtable+="<tr><td>3</td><td>4500</td><td>"+Math.ceil(loot[3]*((100-ptworow)*0.008+1)/10)+"</td><td>"+Math.ceil(loot[3]*((100-ptworow)*0.008+1)/5)+"</td><td>"+Math.ceil(loot[3]*((100-ptworow)*0.008+1)/20)+"</td><td>"+Math.ceil(loot[3]*((100-ptworow)*0.008+1)/15)+"</td></tr>";
        outtable+="<tr><td>4</td><td>15000</td><td>"+Math.ceil(loot[4]*((100-ptworow)*0.008+1)/10)+"</td><td>"+Math.ceil(loot[4]*((100-ptworow)*0.008+1)/5)+"</td><td>"+Math.ceil(loot[4]*((100-ptworow)*0.008+1)/20)+"</td><td>"+Math.ceil(loot[4]*((100-ptworow)*0.008+1)/15)+"</td></tr>";
        outtable+="<tr><td>5</td><td>33000</td><td>"+Math.ceil(loot[5]*((100-ptworow)*0.008+1)/10)+"</td><td>"+Math.ceil(loot[5]*((100-ptworow)*0.008+1)/5)+"</td><td>"+Math.ceil(loot[5]*((100-ptworow)*0.008+1)/20)+"</td><td>"+Math.ceil(loot[5]*((100-ptworow)*0.008+1)/15)+"</td></tr>";
        outtable+="<tr><td>6</td><td>60000</td><td>"+Math.ceil(loot[6]*((100-ptworow)*0.008+1)/10)+"</td><td>"+Math.ceil(loot[6]*((100-ptworow)*0.008+1)/5)+"</td><td>"+Math.ceil(loot[6]*((100-ptworow)*0.008+1)/20)+"</td><td>"+Math.ceil(loot[6]*((100-ptworow)*0.008+1)/15)+"</td></tr>";
        outtable+="<tr><td>7</td><td>120000</td><td>"+Math.ceil(loot[7]*((100-ptworow)*0.008+1)/10)+"</td><td>"+Math.ceil(loot[7]*((100-ptworow)*0.008+1)/5)+"</td><td>"+Math.ceil(loot[7]*((100-ptworow)*0.008+1)/20)+"</td><td>"+Math.ceil(loot[7]*((100-ptworow)*0.008+1)/15)+"</td></tr>";
        outtable+="<tr><td>8</td><td>201000</td><td>"+Math.ceil(loot[8]*((100-ptworow)*0.008+1)/10)+"</td><td>"+Math.ceil(loot[8]*((100-ptworow)*0.008+1)/5)+"</td><td>"+Math.ceil(loot[8]*((100-ptworow)*0.008+1)/20)+"</td><td>"+Math.ceil(loot[8]*((100-ptworow)*0.008+1)/15)+"</td></tr>";
        outtable+="<tr><td>9</td><td>300000</td><td>"+Math.ceil(loot[9]*((100-ptworow)*0.008+1)/10)+"</td><td>"+Math.ceil(loot[9]*((100-ptworow)*0.008+1)/5)+"</td><td>"+Math.ceil(loot[9]*((100-ptworow)*0.008+1)/20)+"</td><td>"+Math.ceil(loot[9]*((100-ptworow)*0.008+1)/15)+"</td></tr>";
        outtable+="<tr><td>10</td><td>446000</td><td>"+Math.ceil(loot[10]*((100-ptworow)*0.008+1)/10)+"</td><td>"+Math.ceil(loot[10]*((100-ptworow)*0.008+1)/5)+"</td><td>"+Math.ceil(loot[10]*((100-ptworow)*0.008+1)/20)+"</td><td>"+Math.ceil(loot[10]*((100-ptworow)*0.008+1)/15)+"</td></tr>";
        outtable+="</tbody></table>";
        outtable+="</div></div>";
        $( "body" ).append(outtable);
        $( "#cfunkydiv" ).draggable({ handle: ".popUpBar" , containment: "window", scroll: false});

    }


    function getDugRows() {
        $("#dungloctab tr").each(function() {
            var buttont=$(this).find( "button");
            var buttonid=buttont.attr('id');
            var tworow=$(this).find( "td:nth-child(2)").text();
            var threerow=$(this).find( "td:nth-child(3)").text();
            if(buttonid) {
                var reference=buttonid.substring(8);
                buttont.addClass('Cfunk');
                buttont.attr('dd',reference);
                buttont.attr('dt',tworow);
                buttont.attr('dtt',threerow);
            }
        
        
        $(buttont).click(function() {
            var count=Number($('.splitRaid').children('option').length)-1;
            var troopshome=[0];
            var ttc=0;
            var tt=["non"];
            var ttm=[0];
            var butid=$(this).attr('dd');
            var dungtext=$(this).attr('dt');
            var progress=$(this).attr('dtt');
            var temp=dungtext.match(/\d+/gi);
            numbs[0]=Number(temp);
            temp=progress.match(/\d+/gi);
            numbs[1]=Number(temp);
            console.log(numbs[1]);
            setTimeout(function(){

                $(".tninput").each(function() {
                    ttc+=1;
                    var trpinpid=$(this).attr('id');
                    tt[ttc-1]=trpinpid;
                    ttm[ttc-1]=Number(trpinpid.match(/\d+/gi));
                });
                console.log(ttc);
                console.log(ttm);
                if(ttc==1) {
                    troopshome[0]=$('#rval'+ttm[0]).val();
                    //console.log(troopshome);
                    numbs[2]=Math.ceil(loot[numbs[0]]*((100-numbs[1])*0.008+1)/ttloot[ttm[0]]);
                    if(Number(troopshome)>numbs[2]) {
                        $('#rval'+ttm[0]).val(numbs[2]);
                    }
                    if((Number(troopshome)/Number(numbs[2]))<count) {
                        count=Number(troopshome)/Number(numbs[2]);
                    }
                }
                if(ttc==2) {
                    if (ttm[1]==14) {
                        troopshome[0]=$('#rval'+ttm[0]).val();
                        numbs[2]=Math.ceil(loot[numbs[0]]*((100-numbs[1])*0.008+1)/ttloot[ttm[0]]);
                        if(Number(troopshome)>numbs[2]) {
                            $('#rval'+ttm[0]).val(numbs[2]);
                        }
                        if((Number(troopshome)/Number(numbs[2]))<count) {
                            count=Number(troopshome)/Number(numbs[2]);
                        }
                        $('#rval'+ttm[1]).val(0);
                    } else {                      
                        troopshome[0]=$('#rval'+ttm[0]).val();
                        troopshome[1]=$('#rval'+ttm[1]).val();
                        var ratio=[troopshome[0]*ttloot[ttm[0]]/(troopshome[1]*ttloot[ttm[1]]+troopshome[0]*ttloot[ttm[0]]),troopshome[1]*ttloot[ttm[1]]/(troopshome[1]*ttloot[ttm[1]]+troopshome[0]*ttloot[ttm[0]])];
                        console.log(ratio);
                        numbs[2]=Math.ceil(ratio[0]*loot[numbs[0]]*((100-numbs[1])*0.008+1)/ttloot[ttm[0]]);
                        console.log(numbs[2]);
                        if(Number(troopshome[0])>numbs[2]) {
                            $('#rval'+ttm[0]).val(numbs[2]);
                        }
                        if((Number(troopshome[0])/Number(numbs[2]))<count) {
                            count=Number(troopshome[0])/Number(numbs[2]);
                        }
                        numbs[2]=Math.ceil(ratio[1]*loot[numbs[0]]*((100-numbs[1])*0.008+1)/ttloot[ttm[1]]);
                        if(Number(troopshome[1])>numbs[2]) {
                            $('#rval'+ttm[1]).val(numbs[2]);
                        }
                    }
                }
                if (ttc==3) {
                    if (ttm[2]==14) {
                        troopshome[0]=$('#rval'+ttm[0]).val();
                        troopshome[1]=$('#rval'+ttm[1]).val();
                        var ratio=[troopshome[0]*ttloot[ttm[0]]/(troopshome[1]*ttloot[ttm[1]]+troopshome[0]*ttloot[ttm[0]]),troopshome[1]*ttloot[ttm[1]]/(troopshome[1]*ttloot[ttm[1]]+troopshome[0]*ttloot[ttm[0]])];
                        console.log(ratio);
                        numbs[2]=Math.ceil(ratio[0]*loot[numbs[0]]*((100-numbs[1])*0.008+1)/ttloot[ttm[0]]);
                        console.log(numbs[2]);
                        if(Number(troopshome[0])>numbs[2]) {
                            $('#rval'+ttm[0]).val(numbs[2]);
                        }
                        if((Number(troopshome[0])/Number(numbs[2]))<count) {
                            count=Number(troopshome[0])/Number(numbs[2]);
                        }
                        numbs[2]=Math.ceil(ratio[1]*loot[numbs[0]]*((100-numbs[1])*0.008+1)/ttloot[ttm[1]]);
                        if(Number(troopshome[1])>numbs[2]) {
                            $('#rval'+ttm[1]).val(numbs[2]);
                        }
                    }
                    else {
                        troopshome[0]=$('#rval'+ttm[0]).val();
                        troopshome[1]=$('#rval'+ttm[1]).val();
                        troopshome[2]=$('#rval'+ttm[2]).val();
                        var ratio=[troopshome[0]*ttloot[ttm[0]]/(troopshome[2]*ttloot[ttm[2]]+troopshome[1]*ttloot[ttm[1]]+troopshome[0]*ttloot[ttm[0]])];
                        ratio[1]=troopshome[1]*ttloot[ttm[1]]/(troopshome[2]*ttloot[ttm[2]]+troopshome[1]*ttloot[ttm[1]]+troopshome[0]*ttloot[ttm[0]]);
                        ratio[2]=troopshome[2]*ttloot[ttm[2]]/(troopshome[2]*ttloot[ttm[2]]+troopshome[1]*ttloot[ttm[1]]+troopshome[0]*ttloot[ttm[0]]);
                        console.log(ratio);
                        numbs[2]=Math.ceil(ratio[0]*loot[numbs[0]]*((100-numbs[1])*0.008+1)/ttloot[ttm[0]]);
                        console.log(numbs[2]);
                        if(Number(troopshome[0])>numbs[2]) {
                            $('#rval'+ttm[0]).val(numbs[2]);
                        }
                        if((Number(troopshome[0])/Number(numbs[2]))<count) {
                            count=Number(troopshome[0])/Number(numbs[2]);
                        }
                        numbs[2]=Math.ceil(ratio[1]*loot[numbs[0]]*((100-numbs[1])*0.008+1)/ttloot[ttm[1]]);
                        if(Number(troopshome[1])>numbs[2]) {
                            $('#rval'+ttm[1]).val(numbs[2]);
                        }
                        numbs[2]=Math.ceil(ratio[2]*loot[numbs[0]]*((100-numbs[1])*0.008+1)/ttloot[ttm[2]]);
                        if(Number(troopshome[1])>numbs[2]) {
                            $('#rval'+ttm[2]).val(numbs[2]);
                        }
                    }
                }
                console.log("count:"+count);
                count=Math.floor(count);
                setTimeout(function(){$('.splitRaid').val(count);}, 500);
        }, 300);
        });
        });
    }

})();
