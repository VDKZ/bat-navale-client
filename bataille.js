
// $('#adversaire').on('click','td', function(){
//
//   var $this = $(this);
//   var col   = $this.index();
//   var row   = $this.closest('tr').index();
//
//   var webMethod = "http://MyWebService/Web.asmx/GetInfoByDates";
//   var parameters = "{'X':'" + col + "','Y':'" + row + "'}";
//
//   alert( parameters );
//
//   $(this).addClass('rate');
//
//   $.ajax({
//       type: "POST",
//       url: webMethod,
//       data: parameters,
//       contentType: "application/json; charset=utf-8",
//       dataType: "json",
//       success: function(data) {
//           if(data.success){
//             $(this).addClass('touche');
//           } else {
//             $(this).addClass('rate');
//           }
//       }
//   });
// })

var socket = io.connect('localhost:3000');

$('#adversaire').on('click','td', function(event){
  event.preventDefault();

  var $this = $(this);
  var col   = $this.index();
  var row   = $this.closest('tr').index();
  var parameters = "{'X':'" + col + "','Y':'" + row + "'}";

  socket.emit('tir', { tir: parameters });
});

socket.on('callback', function(data) {
  console.log(data);
  alert(data);
  // Print the data.data somewhere...
});
