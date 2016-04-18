// Below underscore-min.js & xmlparse.js files are for XML parser....
function load(script) {
	document.write('<'+'script src="'+script+'" type="text/javascript"><' + '/script>');
}
load("http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.4/underscore-min.js");
load("xmlparse.js");

function getJsObject(input_data){
	var object = "";
	
	//input_json_data = {"employees":[{"name":"emp1","age":25,"career_exp":5},{"name":"emp2","age":23,"career_exp":6}]}
	// Check is if Json data......
	if(input_data.indexOf('{') != -1){
		jsond = JSON.parse(input_data);
		if(typeof(jsond) === 'object'){
			object = jsond;
		}
	}
	else{
		//input_xml_data = <data> <title>Hello, world</title>	<item>    <header>title</header>    <desc>desc</desc>    <xml:namespaced>test</xml:namespaced>  </item><item>    <header>another title</header>    <desc>desc 2</desc>    <xml:namespaced>text</xml:namespaced>  </item></data>
		var XML = new DOMParser().parseFromString(input_data, "text/xml");
		xml_obj = parse(XML);
		if(typeof(xml_obj) === 'object'){
			object = xml_obj;
		}
	}
	// console.log(object); //prints object at console.
	//call 'object' variable to get final js object.
}