// styles/msfd.js

const msfdColorMap = {
  '7.CENTRO':   'rgba(231, 76, 60, 0.45)',   // rojo
  '4.OESTE':    'rgba(155, 89, 182, 0.45)',  // violeta
  '1.NOROESTE': 'rgba(52, 73, 94, 0.45)',    // gris azulado
  '6.SUROESTE': 'rgba(230, 126, 34, 0.45)',  // naranja
  '5.ESTE':     'rgba(241, 196, 15, 0.45)',  // amarillo
  '2.NORTE':    'rgba(52, 152, 219, 0.45)',  // azul
  '3.NORESTE':  'rgba(26, 188, 156, 0.45)',  // turquesa
  '8.COSTA':    'rgba(46, 204, 113, 0.45)'   // verde
};

// color por defecto (si aparece un nombre nuevo)
const defaultColor = 'rgba(149, 165, 166, 0.4)';

function style_msfd(feature) {
  const nombre = feature.get('nombre');
  const fillColor = msfdColorMap[nombre] || defaultColor;

  return new ol.style.Style({
    fill: new ol.style.Fill({
      color: fillColor
    }),
    stroke: new ol.style.Stroke({
      color: '#2c3e50',
      width: 1.5
    })
  });
}

