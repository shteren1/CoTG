// ==UserScript==
// @name Cfunky Dungeon Shit
// @namespace https://github.com/shteren1/CoTG/blob/master/Cfunky_Dungeon_Shit.user.js
// @version 0.1
// @description enter something useful
// @author You
// @match https://w1.crownofthegods.com/World00.php
// @grant none
// ==/UserScript==
(function FunkyScript() {
var loot=[0,400,1000,4500,15000,33000,60000,120000,201000,300000,446000];
    var numbs=[0,0,0];

    $(document).ready(function() {
        $("#loccavwarconGo").click(function() {
            //createTable();
            setTimeout(function(){getDugRows();}, 1000);
        });

        $("#idluniwarconGo").click(function() {
            createTable();

        });

        $("#raidDungGo").click(function() {
            createTable();
        });


    });

    function createTable() {
        var outtable="<div id='cfunkydiv' style='width:500px;height:330px;background-color: #E2CBAC;-moz-border-radius: 10px;-webkit-border-radius: 10px;border-radius: 10px;border: 4px ridge #DAA520;position:absolute;right:10px;top:100px; z-index:1000000;'><div class=\"popUpBar\"> <span class=\"ppspan\">Suggested Raiding Numbers</span> <button id=\"cfunkyX\" onclick=\"$('#cfunkydiv').remove();\" class=\"xbutton greenb\"><div id=\"xbuttondiv\"><div><div id=\"centxbuttondiv\"></div></div></div></button></div><div class=\"popUpWindow\">";
        outtable+="<table><thead><th>Lvl</th><th>Estimated Loot</th><th>Vanqs/Rangers<br>druids</th><th>Sorcs</th><th>Praetors</th><th>Arbs/Horses</th></thead>";
        outtable+="<tbody><tr><td>1</td><td>400</td><td>41</td><td>82</td><td>20</td><td>27</td></tr>";
        outtable+="<tr><td>2</td><td>1000</td><td>102</td><td>204</td><td>51</td><td>68</td></tr>";
        outtable+="<tr><td>3</td><td>4500</td><td>459</td><td>918</td><td>230</td><td>306</td></tr>";
        outtable+="<tr><td>4</td><td>15000</td><td>1530</td><td>3060</td><td>765</td><td>1020</td></tr>";
        outtable+="<tr><td>5</td><td>33000</td><td>3366</td><td>6732</td><td>1683</td><td>2244</td></tr>";
        outtable+="<tr><td>6</td><td>60000</td><td>6120</td><td>12240</td><td>3060</td><td>4080</td></tr>";
        outtable+="<tr><td>7</td><td>120000</td><td>12240</td><td>24480</td><td>6120</td><td>8160</td></tr>";
        outtable+="<tr><td>8</td><td>201000</td><td>20502</td><td>41004</td><td>10251</td><td>13668</td></tr>";
        outtable+="<tr><td>9</td><td>300000</td><td>30600</td><td>61200</td><td>15300</td><td>20400</td></tr>";
        outtable+="<tr><td>10</td><td>446000</td><td>45492</td><td>90984</td><td>22746</td><td>30328</td></tr>";
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
        });
        $(".Cfunk").unbind("click");
        $(".Cfunk").click(function() {
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
                    var trpinpid=$(this).attr('id');
                    if(trpinpid=="rval2") {
                        numbs[2]=Math.ceil(loot[numbs[0]]*((100-numbs[1])*0.008+1)/10);
                        $('#'+trpinpid).val(numbs[2]);
                    } else if(trpinpid=="rval3") {
                        numbs[2]=Math.ceil(loot[numbs[0]]*((100-numbs[1])*0.008+1)/20);
                        $('#'+trpinpid).val(numbs[2]);
                    } else if(trpinpid=="rval4") {
                        numbs[2]=Math.ceil(loot[numbs[0]]*((100-numbs[1])*0.008+1)/10);
                        $('#'+trpinpid).val(numbs[2]);
                    } else if(trpinpid=="rval5") {
                        numbs[2]=Math.ceil(loot[numbs[0]]*((100-numbs[1])*0.008+1)/10);
                        $('#'+trpinpid).val(numbs[2]);
                    } else if(trpinpid=="rval6") {
                        numbs[2]=Math.ceil(loot[numbs[0]]*((100-numbs[1])*0.008+1)/5);
                        $('#'+trpinpid).val(numbs[2]);
                    } else if(trpinpid=="rval9") {
                        numbs[2]=Math.ceil(loot[numbs[0]]*((100-numbs[1])*0.008+1)/20);
                        $('#'+trpinpid).val(numbs[2]);
                    } else if(trpinpid=="rval8") {
                        numbs[2]=Math.ceil(loot[numbs[0]]*((100-numbs[1])*0.008+1)/15);
                        $('#'+trpinpid).val(numbs[2]);
                    } else if(trpinpid=="rval10") {
                        numbs[2]=Math.ceil(loot[numbs[0]]*((100-numbs[1])*0.008+1)/15);
                        $('#'+trpinpid).val(numbs[2]);
                    } else if(trpinpid=="rval11") {
                        numbs[2]=Math.ceil(loot[numbs[0]]*((100-numbs[1])*0.008+1)/10);
                        $('#'+trpinpid).val(numbs[2]);
                    }

                });

            }, 300);
        });
    }

})();

