

// agregate que nos da el importe y el importe total(con el iva) de la compra de los clientes que hayan recibido sus pedidos ademas de listar lo que han pedido y su fecha de compra//
db.clientes.aggregate([

    {
        $lookup:
          {
            from: "cultivo",
            localField: "pedidos",
            foreignField: "id_p",
            as: "cultivo"
          },
    
     },
     { $match : { recibo : true }},
     {
        $unwind:"$cultivo"
     },
        {
            $project:{
                
                _id:0,
                Cliente:{$concat:["$Nombre"," ","$Apellidos"]},
                importe:{$multiply:["$gramos","$cultivo.precio"]},
                iva_incluido:{$multiply:["$gramos","$cultivo.precio",1.21]},
                dni:"$dni",
                planta:"$cultivo.planta",
                genetica:"$cultivo.genetica",
                precio:"$cultivo.precio",
                fecha: { $dateToString: { format: "%Y-%m-%d", date: "$fecha_de_envio" }}
            }
            
        },
        {
            $group:{
                _id:{cliente:"$Cliente",dni:"$dni"},
                importe:{$sum:"$importe"},
                iva_incluido:{$sum:"$iva_incluido"},
                Productos_comprados:{$push:{planta:"$planta",genetica:"$genetica",precio_gramo:"$precio",fecha_de_compra:"$fecha"}},
                

            }

        },
        {
            $sort:{"iva_incluido":1}
        }
    
    ]).pretty();
/*segundo agregate filtra los clientes que no hayan recibido el pedido y si han realizado 2 pedidos o mas se le descontara un 5% de su importe toal */
db.clientes.aggregate([

    {
        $lookup:
          {
            from: "cultivo",
            localField: "pedidos",
            foreignField: "id_p",
            as: "cultivo"
          },
    
     },
     {
        $match : { recibo : false }
     },
     {
        $unwind:"$cultivo"
     },

        {
            $project:{
                
                _id:0,
                Cliente:{$concat:["$Nombre"," ","$Apellidos"]},
                importe:{$multiply:["$gramos","$cultivo.precio"]},
                iva_incluido:{$multiply:["$gramos","$cultivo.precio",1.21]},
                dni:"$dni",
            }
            
        },
        {
            $group:{
                _id:{clientes:"$Cliente",dni:"$dni"},
                importe:{$sum:"$importe"},
                iva_incluido:{$sum:"$iva_incluido"},
                Productos_comprados:{$sum:1},
                

            }

        },
        {
            $project:{    
                importe:1,
                iva_incluido:1,
                Productos_comprados:1,
                descuento_aplicado:{$round:[{$multiply:["$iva_incluido",{$cond:[{$gte:["$Productos_comprados",2]},0.95,1]}]},1]},
        }},
        {
           $sort:{"Productos_comprados":1}
        }
        
    ]).pretty();

//agregate que filtra segun los clientes que no hayan recibido su pedido y avisa de si el pedido tiene retraso o no //
//a traves de un cond teniendo en cuenta que lo habitual para que un pedido llegue son 20 dias//
db.clientes.aggregate([

     {
        $match : { recibo : false }
     },
     {
        $group:{
            _id:{dni:"$dni",fecha_de_envio:"$fecha_de_envio"},
            dateDifference:{$sum:{$multiply:[{$subtract: [ "$$NOW", "$fecha_de_envio" ] },0.0000000115741]}},
            Cliente:{$push:{Nombre:"$Nombre",Apellidos:"$Apellidos"}}
        }
     },
     {
         $project:{
             "_id.dni":1,
             cliente:1,
             fecha_de_envio:"$_id.fecha_de_envio",
             fecha_actual:"$$NOW",
             diferencia_dias:{$round:["$dateDifference",0]},
             retraso:{$cond:[{$gte:[{$round:["$dateDifference",0]},20]},"Retraso de envio","sin retraso"]}}
     },
        
    ]).pretty();
    //aggregate que filtra segun las plantas q haya fuera de stock y avisa mediante un cond si es necesario llamar al proveedor o no//
    //Cuando hay 2 productos fuera de stock o mas se llama al proveedor//

    db.proveedores.aggregate([

        {
            $lookup:
              {
                from: "cultivo",
                localField: "id_pr",
                foreignField: "cod_proveedor",
                as: "cultivo"
              },
         },
         {
            $unwind:"$cultivo"
         },
         {
            $match:{"cultivo.stock":false}
         },
         {
            $group:{
                _id:{proveedor:"$Nombre",id:"$id_pr"},
                numero_fs:{$sum:1},
                plantas_fuera_de_stock:{$push:{plantas:"$cultivo.planta"}},
               
         }},
         {
            $project:{
                _id:1,
                numero_fs:1,
                plantas_fuera_de_stock:1,
                sin_stock:{$cond:[{$lt:["$numero_fs",2]},"no necesitamos nuevas unidades","Sin stock llamar al distribuidor"]},
            }
         }
          ]).pretty();