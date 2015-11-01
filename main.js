'use strict';

$(document).ready(init);

function init() {
  $('#add').click(addTodo);
  $('#add').one('click', function(){
    $('table.table').show();
  });

  $('#list').on('change', 'input', checkboxChanged);
}

function checkboxChanged(e){
  var $target = $(e.target);
  var checked = $target.is(':checked');
  $target.closest('tr').css({
    'text-decoration': checked ? 'line-through' : '',
    'color': checked ? '#aaa' : ''
  });
}

function addTodo(){
  var description = $('#description').val();
  var date = $('#date').val();

  var $tr = $('#sample').clone();

  $tr.removeAttr('id');
  $tr.children('.description').text(description);
  $tr.children('.date').text(date);
  $tr.show();

  $('#list').append($tr);
}
