window.onload = function (){
    
document.getElementById("lookup").onclick = function (){
    var url  = "world.php?country=";
    
    var req = new XMLHttpRequest();
    var results = document.getElementById("country").value;
    req.onreadystatechange = function(){
        if (req.readyState == 4 && req.status == 200){
            // document.getElementById("results").innerHTML = req.responseText;
            document.getElementById("result").innerHTML = req.responseText;
        }
        // req.open("GET", url + results, true);
        // req.send();
    };
    if (document.getElementById("all").checked){
        req.open("GET","world.php?all=true", true);
    } else {
        req.open("GET", url + results, true);
    }
    req.send();
    };
};