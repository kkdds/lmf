var ws = null;
$(document).ready(function(){
  $('.connect').click(function() {
	if(ws==null) {
	  connect();
	}else{
	  disconnect();
	}
	update_ui();
	return false;
  });
});
function requestFullScreen() {
  var de = document.documentElement;
  if (de.requestFullscreen) {
	  de.requestFullscreen();
  } else if (de.mozRequestFullScreen) {
	  de.mozRequestFullScreen();
  } else if (de.webkitRequestFullScreen) {
	  de.webkitRequestFullScreen();
  }
}
$('#cntBtn').click(function() {
  if(ws!=null) {
	disconnect();
	update_ui();
  }	
  return false;
});
function connect() {
	disconnect();
	$.post('sta',{p:$('#pwd').val(),m:'login',d:'65'},function(r){
		var rj=JSON.parse(r);
		if(rj.p!='error'){
		  ws=setInterval("getSta()", 500);	
		  log('Connected');
		  $('div.overlay').hide();
		  $('div.modal').hide();
		  update_ui();
		}else{
		  disconnect();
		  return false;			  
		}
	});
	//requestFullScreen();
  }
function disconnect() {
  if(ws!= null){
	clearInterval(ws);
	log('Disconnected');
	//$('#updown').prop("checked", false);
	$('#onoff').prop("checked", false);
	//$('#updown').prop("disabled", true);
	$('#onoff').prop("disabled", true);
	ws = null;
	update_ui();
  }
}
function update_ui() {
  var msg='';
  if(ws==null){
	  $('#status').text('未连接或密码错误');
	  $('.connect').val('连接');
	  //$('#cntBtn').addClass('modalLink1');
	  //$('#cntBtn').removeClass('connect');
	  $(".runscr").css("display","none");
  }else{
	  $('#status').text('已连接，请关闭本窗口');
	  $('#cntBtn').addClass('connect');
	  //$('#cntBtn').removeClass('modalLink1');
	  //$('#updown').prop("disabled", false);
	  $('.connect').val('断开');
	  $(".runscr").css("display","block");
  }
}
function log(msg) {
  //var control = $('#log');
  //control.html(control.html() + msg + '<br/>');
  //control.scrollTop(control.scrollTop() + 1000);
  console.log(msg);
}