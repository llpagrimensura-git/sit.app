const style_ecopuntos = function () {
  return new ol.style.Style({
    image: new ol.style.Circle({
      radius: 6,
      fill: new ol.style.Fill({ color: '#2ecc71' }),
      stroke: new ol.style.Stroke({ color: '#145a32', width: 1 })
    })
  });
};
