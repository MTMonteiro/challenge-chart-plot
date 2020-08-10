
function main() {
      var lines = document.getElementById("Text").value.split('\n');
      list = []
      datasets = [];
      dataset = {}
      for(var i = 0;i < lines.length;i++){
            eval('var obj='+lines[i])
            swcase(obj)
            // get labels timestamp
            list.push(timestemp2date(obj['timestamp']));
        }
        // unique list
        labels = []
        list.forEach(function(item) {
             if(labels.indexOf(item) < 0) {
                 labels.push(item);
             }
        });
        Object.entries(dataset).forEach(function(value){
            datasets.push(value[1])
            console.log(value[1])
        })
        generateChart()

}