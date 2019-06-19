var http=require('http');
http.createServer(function(req,res) {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write('<html><body><h2>HTML Forms</h2><form action="/action_page.php">First name:<br><input type="text" name="firstname" value="Mickey"><br>Last name:<br><input type="text" name="lastname" value="Mouse"><br><br><input type="submit" value="Submit"></form><p>If you click the "Submit" button, the form-data will be sent to a page called "/action_page.php".</p></body></html>');
    res.end("<h1> Sup nigga !</h1>");
}).listen(7070);

console.log("Sup nigga !");