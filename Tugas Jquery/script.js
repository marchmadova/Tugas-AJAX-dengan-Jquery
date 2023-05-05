$(document).ready(function(){
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/users',
        dataType: 'json',
        success: function(data){
            $.each(data, function(i, item){
                var tr = $('<tr>').append(
                    $('<td>').text(item.name),
                    $('<td>').text(item.email),
                    $('<td>').text(item.address.street + ', ' + item.address.city + ', ' + item.address.zipcode)
                );
                $('#mahasiswa tbody').append(tr);
            });
        }
    });
});
