// styles/msfpe.js

function style_msfpe() {
  return new ol.style.Style({
    image: new ol.style.Circle({
      radius: 6,
      fill: new ol.style.Fill({
        color: 'rgba(231, 76, 60, 0.85)'
      }),
      stroke: new ol.style.Stroke({
        color: '#ffffff',
        width: 1.5
      })
    })
  });
}

