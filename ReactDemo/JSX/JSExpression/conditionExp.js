var i = 8;
var j = 'hello';
ReactDOM.render(
	<div>
		<h1>{8===i?'true':'false'}</h1>
		<h1>{'hello'===j?j+',React':'hello,world'}</h1>
		<h1>{5>i?5+'>'+i:5+'<'+i}</h1>
		<h1>{Math.sqrt(1024)>i?'大于':'小于'}</h1>
	</div>,
	document.getElementById('example')
	);