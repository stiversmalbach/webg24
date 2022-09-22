const urlApex = "https://gc913eac499076d-dbg24.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/api/equipo3/reto"

function peticionGet(){
   $.ajax({
    url:urlApex,
    type:'GET',
    dataType:'json',
    success: function(data){
        let numreg = data.count
        let productos = data.items
        console.log(numreg)
        console.log(productos)
        console.log("************************************")
        for(i=0; i<numreg; i++){
           console.log("Producto " + (i+1))
           console.log("Código: " + productos[i].codprod)
           console.log("Nombre: " + productos[i].nomprod)
           console.log("Precio: " + productos[i].precio)
           console.log("Inventario: " + productos[i].inventario)
           console.log("************************************")
        }
    },
    error: function(){

    },
    complete: function(){

    }
   });
}

function peticionPost(codprodE, nomprodE, precioE, inventarioE){

   const dataSend = {
   codprod: codprodE,
   nomprod: nomprodE,
   precio: precioE,
   inventario: inventarioE
   }
   const json = JSON.stringify(dataSend);
   $.ajax({
      method: 'POST',
      url: urlApex,
      data: json, 
      contentType: "application/json",
      complete: function(response){
        if(response.status == 555){
           alert("Registro existe")
        }else if(response.status == 201){
         alert("Registro guardado")
      }
      console.log(response.status)
      }
   });
   peticionGet()
}

function peticionPut(codprodE, nomprodE, precioE, inventarioE){

   const dataSend = {
   codprod: codprodE,
   nomprod: nomprodE,
   precio: precioE,
   inventario: inventarioE
   }
   const json = JSON.stringify(dataSend);
   $.ajax({
      method: 'PUT',
      url: urlApex,
      data: json, 
      contentType: "application/json",
      complete: function(response){
        if(response.status == 201){
         alert("Actualización guardada")
      }
      console.log(response.status)
      }
   });
   peticionGet()
}

function peticionDelete(codprodE){

   const dataSend = {
   codprod: codprodE
   }
   const json = JSON.stringify(dataSend);
   $.ajax({
      method: 'DELETE',
      url: urlApex,
      data: json, 
      contentType: "application/json",
      complete: function(response){
        if(response.status == 204){
         alert("Producto eliminado")
      }
      console.log(response.status)
      }
   });
   peticionGet()
}