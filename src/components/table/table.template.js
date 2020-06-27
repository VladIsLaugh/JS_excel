const CODES = {
    first: 65,
    last:91
}
function createRow(index){
    let columnCount = CODES.last - CODES.first


    return  ` <div class="row"> ${createRowInfo(index)} ${createRowData(index)} </div>` 
}
 function createRowInfo(content = ''){
    return `<div class="row-info">${content===0? '':content}</div>`
 }
 function createRowData(index){
     let dataRow = []
     if(index==0){
        for(let i=CODES.first; i<CODES.last; i++){
            dataRow.push(createRowDataCell(String.fromCharCode(i)))
        }
     }else{
         for(let i=CODES.first; i<CODES.last; i++){
            dataRow.push(createRowDataCell('', 'contenteditable'))
        }
     }
     
    
     return    `<div class="row-data">${dataRow.join(' ')}</div>`
 }


 function createRowDataCell(char='', contenteditable= ''){
     return ` <div class="column" ${contenteditable}>
                ${char}
              </div>`
 }

export function createTable(rowCount) {
    let table = []
    for(let i = 0; i<rowCount; i++){
        table.push(createRow(i))
    }

    return table.join(' ')
    
   
}