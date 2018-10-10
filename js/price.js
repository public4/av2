var services = [];


function addService(id){
    this.services.push(id);
    $('#serviceList').append('<p>Service X <a href="#" onClick="removeService(1)"><span data-feather="x-circle"></span></a> </p>');
    feather.replace()
    console.log(services);
}

function removeService(id){
    this.services.slice(this.services.indexOf(id), 1);
    console.warn('remove', id);
}

function status(){
    console.log(this.services);
}

function getJ(){
    $.getJSON('data.json', function(result){
        $.each(result, function(k, v){
            console.log(v);
        })
    });
       
   console.log('done');
    
  };