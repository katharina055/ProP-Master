var buybutton = document.getElementById('buy');
var body = document.getElementsByTagName('body');
var form = '    <div id="Signing"><form><label>E-mail: <input type="email"></label><label>Password: <input type="password"></label><input type="image" src="Images/coconutlogin2.png" value="Login"></form></div><div id="maincontent"></div><div id="Text"><span class="spanstyle"><h1>Live tropical</h1> Music to enjoy as if you are in a tropical island. From traditional Caribean music to the modern tropical house music. This will be an event you will not forget.</span> </div><button id="buy" class="action-button shadow color animate buy">Buy Tickets</button><form id="register"><fieldset><legend>Registation</legend>Name: <input type="text">First name: <input type="text">Last name: <input type="text"> e-mail: <input type="text">Password: <input type="text">Verify Password: <input type="text">Date of birth: <input type="date">Street: <input type="text">City: <input type="text">State/Province: <input type="text">Postal Code: <input type="text">Country: <input type="text"><input type="submit" value="register"></fieldset></form><img id="Twitter" src="Images/Twitter.png"><script src="Script/Java.js"></script>';
function formopen() {
    body[0].innerHTML = form;
}
buybutton.addEventListener('click', formopen, false);


