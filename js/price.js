var services = []; //теперь сюда загружен список всех услуг
var selected_services = []; //те услуги, которые выбраны


function addService(id) {
    console.log(this.services[id - 1]);
    this.selected_services.push(this.services[id - 1]);
    //$('#serviceList').append(`<p id="srv${id}">`+this.services[id-1].service_name+`<a href="#" onClick="removeService(${id})"> <span data-feather="x-circle"></span></a></p>`);
    $('#servicelist').append(`<li class="nav-item" id="srv${id}">` + this.services[id - 1].service_name + `<a href="#" class="nav-link" onClick="removeService(${id})"> <span data-feather="x-circle"></span></a></li>`);
    feather.replace();
}

function removeService(id) {
    this.selected_services.slice(this.selected_services.indexOf(id), id);
    $('#srv' + id).remove();
    console.warn('remove', id);
}

function showSelectedServices() {
    console.log(this.selected_services);
}

function showServices() {
    console.log(this.services);
}


function getJ() {
    let _data = [];
    $.getJSON('data.json', function (data) {
        $.each(data, function (_key, _value) {
            _data.push(_value);
        });
    });
    this.services = _data;
    console.log('done', _data);
}

function showService(id) {
    console.log(this.selected_services);
}
