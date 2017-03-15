
$(document).ready(function () {
    fncInitLnkAyuda();
    
    /* Programar el evento click del btnGuardar */
    $("#btnGuardar").click(fncBtnGuardar);

    /* Habilitar los tooltips*/
    $('[data-toggle="tooltip"]').tooltip();

    /* Habilitar los popover*/
    $('[data-toggle="popover"]').popover();

    /* Menu lateral*/
    $("#treeview").shieldTreeView();

    $('.treeview').each(function () {
        var tree = $(this);
        tree.treeview();
    });

    /* Contenidos */
    $('.tree-toggle').click(fncToogle);

    $(fncToogleInit());
});

/*****************************/

function sleep(miliseconds) {
    var currentTime = new Date().getTime();
    while (currentTime + miliseconds >= new Date().getTime()) {
    }
}

function fncBtnGuardar() {
    var btnGuardar = $("#btnGuardar");
    if (btnGuardar !== undefined) {
        btnGuardar.html('Guardar | <i class="fa fa-spinner fa-spin" ></i>');
        /* Deshabilitar*/
        _fncDeshabilitarContenido();


        /* Simular el proceso de guardado... */
        setTimeout(_fncBtnGuardarOK, 5000);
    }
}

function _fncDeshabilitarContenido() {
    var contenido = $('#contenido');
    if (contenido !== undefined) {
        contenido.find("input,select,textarea,button").prop('disabled', true);

        contenido.fadeTo('slow', .6);
    }
}

function _fncHabilitarContenido() {
    var contenido = $('#contenido');
    if (contenido !== undefined) {
        contenido.find("input,select,textarea,button").prop('disabled', false);

        contenido.fadeTo('slow', 1);
    }
}

function _fncBtnGuardarOK() {
    var btnGuardar = $("#btnGuardar");
    if (btnGuardar !== undefined) {
        _fncHabilitarContenido();
        btnGuardar.tooltip('hide');
        btnGuardar.tooltip('dispose');
        btnGuardar.html('Guardar | <i class="fa fa-check" ></i>');
        btnGuardar.attr('title', 'Cambios guardados.');
        btnGuardar.tooltip();
        btnGuardar.tooltip('show');
    }
}

function _fncBtnGuardarKO() {
    var btnGuardar = $("#btnGuardar");
    if (btnGuardar !== undefined) {
        btnGuardar.tooltip('hide');
        btnGuardar.tooltip('dispose');
        btnGuardar.html('Guardar | <i class="fa fa-exclamation" ></i>');
        btnGuardar.attr('title', 'Cambios NO guardados.');
        btnGuardar.tooltip();
        btnGuardar.tooltip('show');
    }
}

function fncInitLnkAyuda() {
    var lnkAyuda = $("#lnkAyuda");
    if (lnkAyuda !== undefined) {
        lnkAyuda.attr('title', '');
        lnkAyuda.attr('data-content', 'Establecer el texto de AYUDA que permita orientar cómo llenar el contenido.');
    }
}

function fncToogle() {
    $(this).parent().children('ul.tree').toggle(200);
}

function fncToogleInit() {
    $('.tree-toggle').parent().children('ul.tree').toggle(200);
}

/*****************************************************/