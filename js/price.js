var services = []; //теперь сюда загружен список всех услуг
var selected_services = []; //те услуги, которые выбраны


function addService(id){
    //this.services.push(id);
    $('#serviceList').append('<p>'+this.services[id-1].service_name+`<a href="#" onClick="removeService(${id})"> <span data-feather="x-circle"></span></a></p>`);
    feather.replace()
    console.log(services);
}

function removeService(id){
    //this.services.slice(this.services.indexOf(id), 1);
    console.warn('remove', id);
}

function status(){
    console.log(this.services);
}


function getJ(){
    let _data = [];
    $.getJSON('data.json', function(data){
        $.each(data, function(_key, _value){
            _data.push(_value);
        });
    });
    this.services = _data;
    console.log('done', _data);
}

function showService(id){
    console.log(this.services[id-1]);
}
