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


    $(document).ready(function() {
        $("#loccavwarconGo").click(function() {
            createTable();
        });
    });
    $(document).ready(function() {
        $("#idluniwarconGo").click(function() {
            createTable();
        });
    });
    $(document).ready(function() {
        $("#raidDungGo").click(function() {
            createTable();
        });
    });

    function createTable() {
        var outtable="<div id='cfunkydiv' style='width:500px;height:330px;background-color: #E2CBAC;-moz-border-radius: 10px;-webkit-border-radius: 10px;border-radius: 10px;border: 4px ridge #DAA520;position:absolute;right:10px;top:100px; z-index:1000000;'><div class=\"popUpBar\"> <span class=\"ppspan\">Suggested Raiding Numbers</span> <button id=\"cfunkyX\" onclick=\"$('#cfunkydiv').remove();\" class=\"xbutton greenb\"><div id=\"xbuttondiv\"><div><div id=\"centxbuttondiv\"></div></div></div></button></div><div class=\"popUpWindow\">";
        outtable+="<table><thead><th>Lvl</th><th>Estimated Loot</th><th>Vanqs/Rangers<br />druids</th><th>Sorcs</th><th>Praetors</th><th>Arbs/Horses</th></thead>";
        outtable+="<tbody><tr><td>1</td><td>400</td><td>41</td><td>82</td><td>20</td><td>27</td></tr>";
        outtable+="<tr><td>2</td><td>1000</td><td>102</td><td>204</td><td>51</td><td>68</td></tr>";
        outtable+="<tr><td>3</td><td>4500</td><td>459</td><td>918</td><<td>230</td><td>306</td></tr>";
        outtable+="<tr><td>4</td><td>15000</td><td>1530</td><td>3060</td><td>765</td><td>1020</td></tr>";
        outtable+="<tr><td>5</td><td>33000</td><td>3366</td><td>6732</td><td>1683</td><td>2244</td></tr>";
        outtable+="<tr><td>6</td><td>60000</td><td>6120</td><td>12240</td><td>3060</td><td>4080</td></tr>";
        outtable+="<tr><td>7</td><td>120000</td><td>12240</td><td>24480</td><td>6120</td><td>8160</td></tr>";
        outtable+="<tr><td>8</td><td>201000</td><td>20502</td><td>41004</td><td>10251</td><td>13668</td></tr>";
        outtable+="<tr><td>9</td><td>288000</td><td>29376</td><td>58752</td><td>14688</td><td>19584</td></tr>";
        outtable+="<tr><td>10</td><td>446000</td><td>45492</td><td>90984</td><td>22746</td><td>30328</td></tr>";
        outtable+="</tbody></table>";
        outtable+="</div></div>";
        $( "body" ).append(outtable);
        $( "#cfunkydiv" ).draggable({ handle: ".popUpBar" , containment: "window", scroll: false});

    }

})();
