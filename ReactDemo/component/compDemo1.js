// 创建HelloMessage组件
var HelloMessage = React.createClass({
	render:function(){
		return (<h1>Hello,World!</h1>);
	}
});
ReactDOM.render(
	{/* 实例化HelloMessage组件 */}
	<HelloMessage />,
	document.getElementById('example')
	);