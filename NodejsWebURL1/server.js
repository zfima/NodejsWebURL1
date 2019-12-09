var url = require('url');
var http = require('http');

http.createServer((request, response) =>
{
    response.write('Hello! Lets analyze web address \n');
    var parseQuery = url.parse(request.url, true);
    response.write(parseQuery.host + '\n');
    response.write(parseQuery.pathname + '\n');
    response.write(parseQuery.search + '\n');

    var queryDate = parseQuery.query;
    response.write('Month: ' + queryDate.month + '\n');
    response.write('Year: ' + queryDate.year + '\n');
    response.write('Age: ' + queryDate.age + '\n');

    response.end();
}).listen(8080);