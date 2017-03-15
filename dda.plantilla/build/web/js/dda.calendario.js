
$('#mdlClasePlanificar').on('show.bs.modal', showPlanificacion);

function showPlanificacion(event) {
    var button = $(event.relatedTarget); // Button that triggered the modal
    var planificacion = button.data('planificacion'); // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    $('#txtPlanificacion').text(planificacion.fecha + '   |   Clase: ' + planificacion.clase);
    $('#slcUnidad').val(planificacion.unidad);
    $('#slcTema').text(planificacion.tema);
    $('#slcMetodo').text(planificacion.metodo);
    $('#slcTecnica').text(planificacion.tecnica);
    $('#slcProcedimiento').text(planificacion.procedimiento);
    $('#slcMaterial').text(planificacion.material);
    $('#slcEvaluacion').text(planificacion.evaluacion);
}