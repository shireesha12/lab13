/*eslint-env browser*/

var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};
var processEntries = function () {
  "use strict";
   var header, html, requried, msg, email, phone, country, contact, terms;
    
    header = "";
    html = "";
    requried = "<span>Requried Fields..</span>";
    msg = "please review your entries and complete all requried fields";
    email = $("email_address").value;
    phone = $("phone").value;
    country = $("country").value;
    contact = "Text";
    if ($("email").checked) {
        contact = "Email";
    } else if ($("none").checked) {
        contact ="None";
    }
    terms = $("terms").checked;
    
    // basic validtaion
    if (email === "") {
        email = requried;
        header = msg;        
    }
    if (phone === "") {
        phone = requried;
        header = msg;   
    }
    if (country === "") {
        country = requried;
        header = msg;        
    }
    if (terms === false) {
        terms = requried;
        header = msg;
    }
     $("registration_header").innerHTML = header;
    if (header === msg) {
        html = html + "<tr><td>Email:</td><td>" + email + "</td></tr>";
        html = html + "<tr><td>phone:</td><td>" + phone + "</td></tr>";
        html = html + "<tr><td>country:</td><td>" + country + "</td></tr>";
        html = html + "<tr><td>contact:</td><td>" + contact + "</td></tr>";
        html = html + "<tr><td>terms:</td><td>" + terms + "</td></tr>";
        $("registration_info").innerHTML = html;
        
    } else {
        $("registration_form").submit();
    }
};

var resetForm = function () {
  "use strict";
    $("registration_form").reset();
    $("registration_header").innerHTML = "";
    $("registration_info").innerHTML = "";
    $("email_address").focus();   
    
};

window.addEventListener("load", function () {
   "use strict";
    $("register").addEventListener("click", processEntries);
    $("reset_form").addEventListener("click", resetForm);
    $("email_address").focus();
});