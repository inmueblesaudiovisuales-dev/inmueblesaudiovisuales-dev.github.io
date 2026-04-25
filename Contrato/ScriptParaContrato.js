// --- CONFIGURACIÓN ---
// Reemplaza esto con el ID de la plantilla de tu Google Doc (lo sacas de la URL del Doc)
const TEMPLATE_ID = 'AQUI_PONES_EL_ID_DE_TU_PLANTILLA'; 
// Reemplaza esto con el ID de la carpeta en Drive donde quieres guardar los PDFs generados
const FOLDER_ID = 'AQUI_PONES_EL_ID_DE_LA_CARPETA'; 

function onFormSubmit(e) {
  try {
    // 1. Obtener las respuestas del formulario
    const responses = e.namedValues;
    
    // Mapeo de campos del formulario (Asegúrate de que los nombres coincidan exactamente con las preguntas de tu form)
    const nombre = responses['Nombre del Cliente'] ? responses['Nombre del Cliente'][0] : 'Sin Nombre';
    const telefono = responses['Teléfono'] ? responses['Teléfono'][0] : 'N/A';
    const correo = responses['Correo Electrónico'] ? responses['Correo Electrónico'][0] : 'N/A';
    const agencia = responses['Agencia o Empresa'] ? responses['Agencia o Empresa'][0] : 'N/A';
    const paquete = responses['Paquete Seleccionado'] ? responses['Paquete Seleccionado'][0] : 'N/A';
    const precioTexto = responses['Precio'] ? responses['Precio'][0] : '0';
    const fechaSesion = responses['Fecha de Producción'] ? responses['Fecha de Producción'][0] : 'Por definir';
    const direccion = responses['Dirección de la Propiedad'] ? responses['Dirección de la Propiedad'][0] : 'N/A';
    const orientacion = responses['Orientación del Material'] ? responses['Orientación del Material'][0] : 'N/A';
    const identidadVisual = responses['Identidad Visual'] ? responses['Identidad Visual'][0] : 'N/A';
    
    // Calcular anticipo (asumiendo que el precio se ingresa como número limpio)
    let precioLimpio = parseFloat(precioTexto.replace(/[^0-9.-]+/g,""));
    if (isNaN(precioLimpio)) precioLimpio = 0;
    const anticipo = precioLimpio / 2;

    // Formatear moneda
    const formatoMoneda = new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' });
    const precioFormat = formatoMoneda.format(precioLimpio);
    const anticipoFormat = formatoMoneda.format(anticipo);

    // Fecha del contrato
    const fechaContrato = new Date().toLocaleDateString('es-MX');

    // 2. Copiar la plantilla
    const folder = DriveApp.getFolderById(FOLDER_ID);
    const template = DriveApp.getFileById(TEMPLATE_ID);
    const nombreDocumento = 'Contrato_' + nombre.replace(/\s+/g, '_') + '_' + fechaContrato.replace(/\//g, '-');
    const copia = template.makeCopy(nombreDocumento, folder);
    const docId = copia.getId();
    const doc = DocumentApp.openById(docId);
    const body = doc.getBody();

    // 3. Reemplazar los placeholders en el documento
    body.replaceText('{{fechaContrato}}', fechaContrato);
    body.replaceText('{{nombre}}', nombre);
    body.replaceText('{{telefono}}', telefono);
    body.replaceText('{{correo}}', correo);
    body.replaceText('{{agencia}}', agencia);
    body.replaceText('{{paquete}}', paquete);
    body.replaceText('{{precio}}', precioFormat);
    body.replaceText('{{anticipo}}', anticipoFormat);
    body.replaceText('{{fechaSesion}}', fechaSesion);
    body.replaceText('{{direccion}}', direccion);
    body.replaceText('{{orientacion}}', orientacion);
    body.replaceText('{{identidadVisual}}', identidadVisual);

    doc.saveAndClose();

    // 4. Convertir a PDF
    const pdfBlob = doc.getAs('application/pdf');
    folder.createFile(pdfBlob).setName(nombreDocumento + '.pdf');

    // Opcional: Eliminar el Google Doc temporal para que solo te quede el PDF
    // DriveApp.getFileById(docId).setTrashed(true);

  } catch (error) {
    console.error("Error al generar el contrato: " + error.message);
  }
}