var socket = io.connect('localhost:3000');

$('#adversaire').on('click','td', function(event){
  event.preventDefault();

  var $this = $(this);
  var col   = parseInt(($this.index())-1);
  var row   = parseInt(($this.closest('tr').index())-1);
  var test = {
    x: col,
    y: row
  };

  socket.emit('tir', { tir: test });
});

socket.on('tir', function(data) {
  console.log(data.hit);
  //  $(this).addClass('rate');
  //  $(this).addClass('touche');
});
