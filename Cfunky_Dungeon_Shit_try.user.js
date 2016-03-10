// ==UserScript==
// @name Cfunky Dungeon Shit try
// @namespace https://github.com/shteren1/CoTG/blob/master/Cfunky_Dungeon_Shit_try.user.js
// @version 0.2
// @description enter something useful
// @author You
// @match https://w1.crownofthegods.com/World00.php
// @grant none
// ==/UserScript==
(function FunkyScript() {
	console.log("updated 11.3.16");
	
    var loot=[0,400,1000,4500,15000,33000,60000,120000,201000,300000,446000];
    var bossdef=[625,3750,25000,50000,125000,187500,250000,375000,562000,750000];
    var bossdefw=[425,2500,17000,33000,83000,125000,170000,250000,375000,500000];
    var numbs=[0,0,0];
    var ttloot=[0,0,10,20,10,10,5,0,15,20,15,10,0,0,1000,1500,3000];
    var ttattack=[10,50,30,10,25,50,70,10,40,60,90,120,50,150,3000,1200,12000];
    var iscav=[0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0];
    var isinf=[1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0];
    var ismgc=[0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0];
    var isart=[0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1];
    var ttres=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
    var resbonus=[1,1.01,1.03,1.06,1.1,1.15,1.2,1.25,1.3,1.35,1.4,1.45,1.5];
    var ttname=["Guards","Ballistas","Rangers","Triari","Priestess","Vanquishers","Sorcerers","Scouts","Arbalists","Praetors","Horsemans","Druids","Rams","Scorpions","Galleys","Stingers","Warships"];
    
    $(document).ready(function() {
        $("#loccavwarconGo").click(function() {
            //createTable();
            setTimeout(function(){getDugRows();}, 1000);
        });
        
        $("#raidmantab").click(function() {
            setTimeout(function(){getDugRows();}, 1000);
        });
        //$("#raidDungGo").click(function() {
        //    setTimeout(function(){setbossloot();}, 1000);
        //});
    });
    // getting research info
    setTimeout(function(){
    $(".resPop").each(function() {
	if($(this).attr('data')==30) { //rangers
		var ranktext=$(this).text();
        var reslvl=Number(ranktext.match(/\d+/gi));
        ttres[2]=resbonus[reslvl];
		//console.log(ttres[2]);
	}
        if($(this).attr('data')==31) { //triari
		var ranktext=$(this).text();
        var reslvl=Number(ranktext.match(/\d+/gi));
        ttres[3]=resbonus[reslvl];
	}
        if($(this).attr('data')==32) { //priestess
		var ranktext=$(this).text();
        var reslvl=Number(ranktext.match(/\d+/gi));
        ttres[4]=resbonus[reslvl];
	}
        if($(this).attr('data')==33) { //vanqs
		var ranktext=$(this).text();
        var reslvl=Number(ranktext.match(/\d+/gi));
        ttres[5]=resbonus[reslvl];
	}
        if($(this).attr('data')==34) { //sorcs
		var ranktext=$(this).text();
        var reslvl=Number(ranktext.match(/\d+/gi));
        ttres[6]=resbonus[reslvl];
	}
        if($(this).attr('data')==35) { //arbs
		var ranktext=$(this).text();
        var reslvl=Number(ranktext.match(/\d+/gi));
        ttres[8]=resbonus[reslvl];
	}
        if($(this).attr('data')==36) { //praetors
		var ranktext=$(this).text();
        var reslvl=Number(ranktext.match(/\d+/gi));
        ttres[9]=resbonus[reslvl];
	}
        if($(this).attr('data')==37) { //horseman
		var ranktext=$(this).text();
        var reslvl=Number(ranktext.match(/\d+/gi));
        ttres[10]=resbonus[reslvl];
	}
        if($(this).attr('data')==38) { //druid
		var ranktext=$(this).text();
        var reslvl=Number(ranktext.match(/\d+/gi));
        ttres[11]=resbonus[reslvl];
	}
        if($(this).attr('data')==43) { //stinger
		var ranktext=$(this).text();
        var reslvl=Number(ranktext.match(/\d+/gi));
        ttres[15]=resbonus[reslvl];
	}
        if($(this).attr('data')==44) { //galley
		var ranktext=$(this).text();
        var reslvl=Number(ranktext.match(/\d+/gi));
        ttres[14]=resbonus[reslvl];
	}
        if($(this).attr('data')==45) { //warships
		var ranktext=$(this).text();
        var reslvl=Number(ranktext.match(/\d+/gi));
        ttres[16]=resbonus[reslvl];
	}
        //console.log(ttres);
});
    },5000);
    
    document.getElementById('raidDungGo').onclick = function() {
            //createTable();
        setTimeout(function(){setbossloot();}, 1000);
        }; 
    function errormsgBR(a, b) {
        $(a).show();
        $(b).animate({ opacity: 1, bottom: "+10px" }, 'slow');
        errormsgBRhide(a, b);
    }
    
    function errormsgBRhide(a, b) {
        setTimeout(function(){ 
            $(b).animate({ opacity: 0, bottom: "-10px" }, 'slow');
            $(a).fadeOut("slow");
        }, 5000);
        setTimeout(function(){ 
            $(a).remove();
        }, 6000);
    }
    
    var errmBR=0;
    var message="Error, you need at least ";
    //console.log(message);
    
    function errorgo(j) {
        var errormsgs;
        errmBR = errmBR+1;
        var b = 'errBR' +errmBR;
        var c = '#' +b;
        var d = '#' +b+ ' div';
        errormsgs = '<tr ID = "' +b+ '"><td><div class = "errBR">' +j+ '<div></td></tr>';
        $("#errorBRpopup").append(errormsgs);
        errormsgBR(c, d);
    }


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
    function setbossloot() {
        $("#raidingTable tr").each(function() {
            var bosslvl=$("#dunglevelregion").html();
            var bosstype=$("#dungtypespot").html();
            var temp=$(this).find("td:nth-child(3)").text();
            var n = temp.search("/");
            temp=temp.substring(0,n);
            temp=temp.replace(",","");
            var troops=Number(temp);
            //console.log(troops);
            var temp1=$(this).attr('id');
            var tt=Number(temp1.match(/\d+/gi));
            //console.log(temp1);
            if (tt!==7) {
                if (troops>0) {
                    if (bosstype=="Triton") {
                        $('#cfunkydiv').remove();
                        if (tt>13) {
                            if (isart[tt]) {
                                var amount=Math.ceil(bossdefw[bosslvl-1]*4/(ttres[tt]*ttattack[tt]));
                                if (amount<=troops) {
                                    $('#raidIP'+tt).val(amount);
                                } else {
                                    message="Error, you need at least " + amount + " " + ttname[tt]+"!";
                                    errorgo(message);
                                }
                            } else {
                                var amount=Math.ceil(bossdef[bosslvl-1]*4/(ttres[tt]*ttattack[tt]));
                                if (amount<=troops) {
                                    $('#raidIP'+tt).val(amount);
                                } else {
                                    message="Error, you need at least " + amount + " " + ttname[tt]+"!";
                                    errorgo(message);
                                }
                            }
                        }
                    }
                    else if (bosstype=="Cyclops") {
                        if (tt<13) {
                            if (iscav[tt]) {
                                var amount=Math.ceil(bossdefw[bosslvl-1]*4/(ttres[tt]*ttattack[tt]));
                                if (amount<=troops) {
                                    $('#raidIP'+tt).val(amount);
                                } else {
                                    message="Error, you need at least " + amount + " " + ttname[tt]+"!";
                                    errorgo(message);
                                }
                            } else {
                                var amount=Math.ceil(bossdef[bosslvl-1]*4/(ttres[tt]*ttattack[tt]));
                                if (amount<=troops) {
                                    $('#raidIP'+tt).val(amount);
                                } else {
                                    message="Error, you need at least " + amount + " " + ttname[tt]+"!";
                                    errorgo(message);
                                }
                            }
                        }
                    }
                    else if (bosstype=="Andar's Colosseum Challenge") {
                        if (tt<13) {
                            if (iscav[tt]) {
                                var amount=Math.ceil(bossdefw[bosslvl-1]*4/(ttres[tt]*ttattack[tt]));
                                if (amount<=troops) {
                                    $('#raidIP'+tt).val(amount);
                                } else {
                                    message="Error, you need at least " + amount + " " + ttname[tt]+"!";
                                    errorgo(message);
                                }
                            } else {
                                var amount=Math.ceil(bossdef[bosslvl-1]*4/(ttres[tt]*ttattack[tt]));
                                if (amount<=troops) {
                                    $('#raidIP'+tt).val(amount);
                                } else {
                                    message="Error, you need at least " + amount + " " + ttname[tt]+"!";
                                    errorgo(message);
                                }
                            }
                        }
                    }
                    else if (bosstype=="Dragon") {
                        if (tt<13) {
                            if (isinf[tt]) {
                                var amount=Math.ceil(bossdefw[bosslvl-1]*4/(ttres[tt]*ttattack[tt]));
                                if (amount<=troops) {
                                    $('#raidIP'+tt).val(amount);
                                } else {
                                    message="Error, you need at least " + amount + " " + ttname[tt]+"!";
                                    errorgo(message);
                                }
                            } else {
                                var amount=Math.ceil(bossdef[bosslvl-1]*4/(ttres[tt]*ttattack[tt]));
                                if (amount<=troops) {
                                    $('#raidIP'+tt).val(amount);
                                } else {
                                    message="Error, you need at least " + amount + " " + ttname[tt]+"!";
                                    errorgo(message);
                                }
                            }
                        }
                    }
                    else if (bosstype=="Romulus and Remus") {
                        if (tt<13) {
                            if (isinf[tt]) {
                                var amount=Math.ceil(bossdefw[bosslvl-1]*4/(ttres[tt]*ttattack[tt]));
                                if (amount<=troops) {
                                    $('#raidIP'+tt).val(amount);
                                } else {
                                    message="Error, you need at least " + amount + " " + ttname[tt]+"!";
                                    errorgo(message);
                                }
                            } else {
                                var amount=Math.ceil(bossdef[bosslvl-1]*4/(ttres[tt]*ttattack[tt]));
                                if (amount<=troops) {
                                    $('#raidIP'+tt).val(amount);
                                } else {
                                    message="Error, you need at least " + amount + " " + ttname[tt]+"!";
                                    errorgo(message);
                                }
                            }
                        }
                    }
                    else if (bosstype=="Gorgon") {
                        if (tt<13) {
                            if (ismgc[tt]) {
                                var amount=Math.ceil(bossdefw[bosslvl-1]*4/(ttres[tt]*ttattack[tt]));
                                //console.log(amount);
                                //console.log(troops);
                                if (amount<=troops) {
                                    $('#raidIP'+tt).val(amount);
                                } else {
                                    message="Error, you need at least " + amount + " " + ttname[tt]+"!";
                                    errorgo(message);
                                }
                            } else {
                                var amount=Math.ceil(bossdef[bosslvl-1]*4/(ttres[tt]*ttattack[tt]));
                                if (amount<=troops) {
                                    $('#raidIP'+tt).val(amount);
                                } else {
                                    message="Error, you need at least " + amount + " " + ttname[tt]+"!";
                                    errorgo(message);
                                }
                            }
                        }
                    }
                    else if (bosstype=="GM Gordy") {
                        if (tt<13) {
                            if (ismgc[tt]) {
                                var amount=Math.ceil(bossdefw[bosslvl-1]*4/(ttres[tt]*ttattack[tt]));
                                if (amount<=troops) {
                                    $('#raidIP'+tt).val(amount);
                                } else {
                                    message="Error, you need at least " + amount + " " + ttname[tt]+"!";
                                    errorgo(message);
                                }
                            } else {
                                var amount=Math.ceil(bossdef[bosslvl-1]*4/(ttres[tt]*ttattack[tt]));
                                if (amount<=troops) {
                                    $('#raidIP'+tt).val(amount);
                                } else {
                                    message="Error, you need at least " + amount + " " + ttname[tt]+"!";
                                    errorgo(message);
                                }
                            }
                        }
                    }
                    else { createTable();}
                }
            }
            });
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
            //console.log(numbs[1]);
            setTimeout(function(){

                $(".tninput").each(function() {
                    ttc+=1;
                    var trpinpid=$(this).attr('id');
                    tt[ttc-1]=trpinpid;
                    ttm[ttc-1]=Number(trpinpid.match(/\d+/gi));
                });
                //console.log(ttc);
                //console.log(ttm);
                if(ttc==1) {
                    troopshome[0]=$('#rval'+ttm[0]).val();
                    //console.log(troopshome);
                    numbs[2]=Math.ceil(loot[numbs[0]]*((100-numbs[1])*0.008+1)/ttloot[ttm[0]]);
                    if(Number(troopshome)>=numbs[2]) {
                        $('#rval'+ttm[0]).val(numbs[2]);
                    } else {
                                    message="Error, you need at least " + numbs[2] + " " + ttname[ttm[0]]+"!";
                                    errorgo(message);
                                }
                    if((Number(troopshome)/Number(numbs[2]))<count) {
                        count=Number(troopshome)/Number(numbs[2]);
                    }
                }
                if(ttc==2) {
                    if (ttm[1]==14) {
                        troopshome[0]=$('#rval'+ttm[0]).val();
                        numbs[2]=Math.ceil(loot[numbs[0]]*((100-numbs[1])*0.008+1)/ttloot[ttm[0]]);
                        if(Number(troopshome)>=numbs[2]) {
                            $('#rval'+ttm[0]).val(numbs[2]);
                        } else {
                                    message="Error, you need at least " + numbs[2] + " " + ttname[ttm[0]]+"!";
                                    errorgo(message);
                                }
                        if((Number(troopshome)/Number(numbs[2]))<count) {
                            count=Number(troopshome)/Number(numbs[2]);
                        }
                        $('#rval'+ttm[1]).val(0);
                    } else {                      
                        troopshome[0]=$('#rval'+ttm[0]).val();
                        troopshome[1]=$('#rval'+ttm[1]).val();
                        var ratio=[troopshome[0]*ttloot[ttm[0]]/(troopshome[1]*ttloot[ttm[1]]+troopshome[0]*ttloot[ttm[0]]),troopshome[1]*ttloot[ttm[1]]/(troopshome[1]*ttloot[ttm[1]]+troopshome[0]*ttloot[ttm[0]])];
                        //console.log(ratio);
                        numbs[2]=Math.ceil(ratio[0]*loot[numbs[0]]*((100-numbs[1])*0.008+1)/ttloot[ttm[0]]);
                        //console.log(numbs[2]);
                        if (troopshome[0]>0) {
                            if(Number(troopshome[0])>=numbs[2]) {
                                $('#rval'+ttm[0]).val(numbs[2]);
                            }  else {
                                message="Error, you need at least " + numbs[2] + " " + ttname[ttm[0]]+"!";
                                errorgo(message);
                            }
                            if((Number(troopshome[0])/Number(numbs[2]))<count) {
                                count=Number(troopshome[0])/Number(numbs[2]);
                            }  
                            numbs[2]=Math.ceil(ratio[1]*loot[numbs[0]]*((100-numbs[1])*0.008+1)/ttloot[ttm[1]]);
                            if(Number(troopshome[1])>=numbs[2]) {
                                $('#rval'+ttm[1]).val(numbs[2]);
                            }
                        }
                        else {
                            numbs[2]=Math.ceil(ratio[1]*loot[numbs[0]]*((100-numbs[1])*0.008+1)/ttloot[ttm[1]]);
                            if(Number(troopshome[1])>=numbs[2]) {
                                $('#rval'+ttm[1]).val(numbs[2]);
                            } else {
                                message="Error, you need at least " + numbs[2] + " " + ttname[ttm[1]]+"!";
                                errorgo(message);
                            }
                            if((Number(troopshome[1])/Number(numbs[2]))<count) {
                                count=Number(troopshome[1])/Number(numbs[2]);
                            }
                        }
                    }
                }
                if (ttc==3) {
                    if (ttm[2]==14) {
                        troopshome[0]=$('#rval'+ttm[0]).val();
                        troopshome[1]=$('#rval'+ttm[1]).val();
                        var ratio=[troopshome[0]*ttloot[ttm[0]]/(troopshome[1]*ttloot[ttm[1]]+troopshome[0]*ttloot[ttm[0]]),troopshome[1]*ttloot[ttm[1]]/(troopshome[1]*ttloot[ttm[1]]+troopshome[0]*ttloot[ttm[0]])];
                        //console.log(ratio);
                        numbs[2]=Math.ceil(ratio[0]*loot[numbs[0]]*((100-numbs[1])*0.008+1)/ttloot[ttm[0]]);
                        //console.log(numbs[2]);
                        if (troopshome[0]>0) {
                            if(Number(troopshome[0])>=numbs[2]) {
                                $('#rval'+ttm[0]).val(numbs[2]);
                            }  else {
                                message="Error, you need at least " + numbs[2] + " " + ttname[ttm[0]]+"!";
                                errorgo(message);
                            }
                            if((Number(troopshome[0])/Number(numbs[2]))<count) {
                                count=Number(troopshome[0])/Number(numbs[2]);
                            }  
                            numbs[2]=Math.ceil(ratio[1]*loot[numbs[0]]*((100-numbs[1])*0.008+1)/ttloot[ttm[1]]);
                            if(Number(troopshome[1])>=numbs[2]) {
                                $('#rval'+ttm[1]).val(numbs[2]);
                            }
                        }
                        else {
                            numbs[2]=Math.ceil(ratio[1]*loot[numbs[0]]*((100-numbs[1])*0.008+1)/ttloot[ttm[1]]);
                            if(Number(troopshome[1])>=numbs[2]) {
                                $('#rval'+ttm[1]).val(numbs[2]);
                            } else {
                                message="Error, you need at least " + numbs[2] + " " + ttname[ttm[1]]+"!";
                                errorgo(message);
                            }
                            if((Number(troopshome[1])/Number(numbs[2]))<count) {
                                count=Number(troopshome[1])/Number(numbs[2]);
                            }
                        }
                        $('#rval'+ttm[2]).val(0);
                    }
                    else {
                        troopshome[0]=$('#rval'+ttm[0]).val();
                        troopshome[1]=$('#rval'+ttm[1]).val();
                        troopshome[2]=$('#rval'+ttm[2]).val();
                        var ratio=[troopshome[0]*ttloot[ttm[0]]/(troopshome[2]*ttloot[ttm[2]]+troopshome[1]*ttloot[ttm[1]]+troopshome[0]*ttloot[ttm[0]])];
                        ratio[1]=troopshome[1]*ttloot[ttm[1]]/(troopshome[2]*ttloot[ttm[2]]+troopshome[1]*ttloot[ttm[1]]+troopshome[0]*ttloot[ttm[0]]);
                        ratio[2]=troopshome[2]*ttloot[ttm[2]]/(troopshome[2]*ttloot[ttm[2]]+troopshome[1]*ttloot[ttm[1]]+troopshome[0]*ttloot[ttm[0]]);
                        //console.log(ratio);
                        if (troopshome[0]>0) {
                            numbs[2]=Math.ceil(ratio[0]*loot[numbs[0]]*((100-numbs[1])*0.008+1)/ttloot[ttm[0]]);
                            console.log(numbs[2]);
                            if(Number(troopshome[0])>=numbs[2]) {
                                $('#rval'+ttm[0]).val(numbs[2]);
                            } else {
                                message="Error, you need at least " + numbs[2] + " " + ttname[ttm[0]]+"!";
                                errorgo(message);
                            }
                            if((Number(troopshome[0])/Number(numbs[2]))<count) {
                                count=Number(troopshome[0])/Number(numbs[2]);
                            }
                            numbs[2]=Math.ceil(ratio[1]*loot[numbs[0]]*((100-numbs[1])*0.008+1)/ttloot[ttm[1]]);
                            if(Number(troopshome[1])>=numbs[2]) {
                                $('#rval'+ttm[1]).val(numbs[2]);
                            }
                            numbs[2]=Math.ceil(ratio[2]*loot[numbs[0]]*((100-numbs[1])*0.008+1)/ttloot[ttm[2]]);
                            if(Number(troopshome[1])>=numbs[2]) {
                                $('#rval'+ttm[2]).val(numbs[2]);
                            }
                        } else if(troopshome[1]>0) {                            
                            numbs[2]=Math.ceil(ratio[1]*loot[numbs[0]]*((100-numbs[1])*0.008+1)/ttloot[ttm[1]]);
                            if(Number(troopshome[1])>=numbs[2]) {
                                $('#rval'+ttm[1]).val(numbs[2]);
                            } else {
                                message="Error, you need at least " + numbs[2] + " " + ttname[ttm[1]]+"!";
                                errorgo(message);
                            }
                            if((Number(troopshome[1])/Number(numbs[2]))<count) {
                                count=Number(troopshome[1])/Number(numbs[2]);
                            }
                            numbs[2]=Math.ceil(ratio[2]*loot[numbs[0]]*((100-numbs[1])*0.008+1)/ttloot[ttm[2]]);
                            if(Number(troopshome[1])>=numbs[2]) {
                                $('#rval'+ttm[2]).val(numbs[2]);
                            }
                        } else {
                            numbs[2]=Math.ceil(ratio[2]*loot[numbs[0]]*((100-numbs[1])*0.008+1)/ttloot[ttm[2]]);
                            if(Number(troopshome[2])>=numbs[2]) {
                                $('#rval'+ttm[2]).val(numbs[2]);
                            } else {
                                message="Error, you need at least " + numbs[2] + " " + ttname[ttm[2]]+"!";
                                errorgo(message);
                            }
                            if((Number(troopshome[2])/Number(numbs[2]))<count) {
                                count=Number(troopshome[2])/Number(numbs[2]);
                            }
                        }
                            
                    }
                }
                //console.log("count:"+count);
                count=Math.floor(count);
                setTimeout(function(){$('.splitRaid').val(count);}, 500);
        }, 300);
        });
        });
    }

})();
