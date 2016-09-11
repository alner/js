var test = `Hello world
another $abcDef{width: 200px; height: 200px} line of
code and $Fdg12{width: 150px; height: auto} object
$AvCdbf test
$FgHs{
  width: 150px;
  height: auto
}

$GgHs{width: 150px;
  height: auto
`
var r = /\$(\w+)(\{[.|\s\S]+?\})?/gm
console.log('Matched:', test.match(r))
var result;
while(result = r.exec(test))
  console.log(result)
