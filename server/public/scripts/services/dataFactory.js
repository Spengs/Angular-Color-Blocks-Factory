colorBlocks.factory('DataFactory', [function() {
  console.log("data factory running");
  // var colors = [];

  var colors = ['red', 'blue', 'papayawhip', 'green'];

  function getColors() {
    return colors;
  }

  function addColor(color) {
    colors.push(color);
  }

  
  return {
    getColors: getColors,
    addColor: addColor
  }
}]);
