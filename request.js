const request = require('request');
var parseString = require('xml2js').parseString;

request('http://www.weather.go.kr/weather/forecast/mid-term-rss3.jsp?stnld=109', function (error, response, body) {
    var xml = body
    parseString(xml, function (err, result) {
        console.dir(result.rss);
        //#work2 wf 태그 안에 있는 기상 예보 값을 불러오기
    });
});
