var ws = null;
$(document).ready(function(){
  function connect() {
	  disconnect();
	  ws = new WebSocket("ws://127.0.0.1:9001/wbs"); 
	  log('Connecting...');
	  ws.onopen = function() {
		log('Connected.');
		update_ui();
	  };
	  ws.onmessage = function(e) {
		//log('Received: ' + e.data);
		log(e.data.split(","));
		if(e.data.split(",")[1]== '1'){
			$('#updown').prop("disabled", false);
		}else{
			$('#updown').prop("disabled", true);			
		}
		if(e.data.split(",")[3]== '1'){
			$('#onoff').prop("disabled", false);
		}else{
			$('#onoff').prop("disabled", true);
		}
		//$('#onoff').prop("disabled", false);
		//$('#updown').prop("disabled", false);
	  };
	  ws.onclose = function() {
		log('Disconnected.');
		ws = null;
		update_ui();
	  };
	}
  function disconnect() {
	if(ws!= null){
	  log('Disconnecting...');
	  ws.close();
	  ws = null;
	  update_ui();
	}
  }
  function update_ui() {
	var msg='';
	if(ws==null){
		$('#status').text('未连接或密码错误');
		$('#connect').val('连接');	  	
		//$('#onoff').prop("disabled", true);//链接后通过sta来判断？
		//$('#updown').prop("disabled", true);
	}else{
		$('#status').text('已连接 (' + ws.protocol + ')');
		$('#connect').val('断开');	  
		//$('#onoff').prop("disabled", false);
		//$('#updown').prop("disabled", false);
	}
  }
  $('#connect').click(function() {
	if(ws==null) {
	  connect();
	  setTimeout(function(){ws.send('p,'+$('#pwd').val());},100);
	}else{
	  disconnect();
	}
	update_ui();
	return false;
  });
  function log(msg) {
	//var control = $('#log');
	//control.html(control.html() + msg + '<br/>');
	//control.scrollTop(control.scrollTop() + 1000);
	console.log(msg);
  }
});