colorList = ['red', 'blue', 'green', 'yellow', 'gray', 'black', '#2EFEF7', '#FE2E64', '#FF4000', '#BF00FF']
function swcase(obj){

    switch(obj['type']) {
          case "start":
            //create object
            console.log('start case')
            sizeSelect = obj.select.length
            sizeGroup = obj.group.length
            group = obj.group
            select = obj.select

            break;

          case "span":
            // limit object
            console.log('span case')

            break;

          case "data":
            // data object
            console.log('data case')
            label = ''

            for(var i = 0;i < sizeGroup;i++){
                 label += obj[group[i]]+' '

            }
            for(var i = 0;i < sizeSelect;i++){
                 dic = label+' '+select[i]
                 if (typeof dataset[dic] === "undefined"){
                    dataset[dic] = {}
                    dataset[dic]['label'] = dic
                    dataset[dic]['backgroundColor'] = colorList[Math.floor(Math.random() * 9)]
                    dataset[dic]['borderColor'] = dataset[dic]['backgroundColor']

                 }
                 dataset[dic]['fill'] = false
                 if (typeof dataset[dic]['data'] === "undefined"){
                    dataset[dic]['data'] = []
                    }
                  dataset[dic]['data'].push(obj[select[i]])

            }

            break;

              case "stop":
                //interrupt data
                console.log('stop case')
                break;
              default:
                // code block
         }
    }