var region = {};
region['pdl'] = ['Maine-et-Loire', 'Loire-atlantique', 'Sarthe', 'Mayenne', 'Vendée'];
region['bret'] = ['Finistère', 'Côtes dArmor', 'Ile-et-Vilaine', 'Morbihan'];
region['puch'] = ['Charente', 'Charente maritime', 'Deux-Sèvres', 'Vienne'];

function changeRegionList() {
  var regionList = document.getElementById("regionX");
  var modelList = document.getElementById("depart");
  var choisissezRegion = regionList.options[regionList.selectedIndex].value;
  while (modelList.options.length) {
    modelList.remove(0);
  }
  var reg = region[choisissezRegion];
  if (reg) {
    var i;
    for (i = 0; i < reg.length; i++) {
      var re = new Option(reg[i], i);
      modelList.options.add(re);
    }
  }
} 


window.addEventListener("load", function () {
  document.getElementById("regionX").addEventListener("change", changeRegionList);

});

