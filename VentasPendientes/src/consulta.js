//Utilizar los operadores $sum, $multiply, $divide, $avg, $max y operadores de fechas.

//Muestra la ganancia total de cada articulo vendido con su noombre y fecha.
db.ventas.aggregate(
   [   
     { $project: { fechaVenta: 1, articuloVendido: 1, gananciaTotal: { $multiply: [ "$precioUnitario", "$numeroUnidades" ] } } }
   ]
)

//Importe total de cada tipo de articulo
db.ventas.aggregate(
    [
      {
        $group:
          {
            _id: "$articuloVendido",
            importeTotal: {$sum: {$multiply: ["$precioUnitario", "$numeroUnidades"]}} 
          }
      }
    ]
 )

//Importe total de proyectores.
db.ventas.aggregate([
    {$match: {articuloVendido: "Proyector"}},
    {$group: {_id : null, Importe_total: {$sum: {$multiply: ["$precioUnitario", "$numeroUnidades"]}}}}
])

//Calcular la media del importe total y de numero de unidades de cada articulo.
db.ventas.aggregate(
    [
      {
        $group:
          {
            _id: "$articuloVendido",
            avgImporteTotal: { $avg: { $multiply: [ "$precioUnitario", "$numeroUnidades" ] } },
            avgUnidades: { $avg: "$numeroUnidades" }
          }
      }
    ]
 )

 //La cantidad máxima de de importe y unidades.
 db.ventas.aggregate(
    [
      {
        $group:
          {
            _id: "$articuloVendido",
            maxCantidadTotal: { $max: { $multiply: [ "$precioUnitario", "$numeroUnidades" ] } },
            maxCantidad: { $max: "$numeroUnidades" }
          }
      }
    ]
  )

  //EL articulo que más ha sido vendido.
  db.ventas.aggregate(
    [
      {
        $group:
          {
            _id: null,
            maxCantidad: { $max: "$numeroUnidades" },
            articuloVendido:{$max:"$articuloVendido"}
          }
      },
      { $project: { _id: 0, articuloVendido: 1, maxCantidad: 1 } }
    ]
  )

  //Vendedores con los id en los que sale y su suma.
  db.ventas.aggregate(
    [
      
        {
            $group: {
                _id: { vendedor: "$vendedor" },
                uniqueIds: { $addToSet: "$_id" },
                count: { $sum: 1 },
                
            }
        },
    ]
  )

  //El vendedor que mas ventas ha hecho.
  db.ventas.aggregate(
    [
      
        {
            $group: {
                _id: { vendedor: "$vendedor" },
                uniqueIds: { $addToSet: "$_id" },
                count: { $sum: 1 },
                vendedor: {$first: "$vendedor"}
                
            }
        },
        {
            $group: {
              _id: null,
              maxCount: {$max: "$count"},
              vendedor: {$first: "$vendedor"}
            }
        },
        //{$addFields: {vendedor: {$add: ["$vendedor", "$maxCount"]}}},
      { $project: { _id: 0, vendedor: 1, maxCount: 1 } }
    ]
  )

  //Mayor numero de pedidos que un cliente ha hecho.
  db.ventas.aggregate(
    [
      
        {
            $group: {
                _id: { cliente: "$cliente" },
                uniqueIds: { $addToSet: "$_id" },
                count: { $sum: 1 },
                cliente: {$first: "$cliente"}
                
            }
        },
        {
            $group: {
              _id: null,
              maxCount: {$max: "$count"},
            }
        },
      { $project: { _id: 0,  maxCount: 1 } }
    ]
  )

  /*El año, el mes y el día de la venta. */
 db.ventas.aggregate(
  [
    {
      $project:
        {
          año: { $year: "$fechaVenta" },
          mes: { $month: "$fechaVenta" },
          día: { $dayOfMonth: "$fechaVenta" },
        }
    }
  ]
)

//El numero de ventas del mejor mes.
db.ventas.aggregate(
  [
    {
      $project:
        {
          _id: null,
          mes: { $month: "$fechaVenta" },
        }
    },
    {
          $group: {
              _id: { mes: "$mes" },
              uniqueIds: { $addToSet: "$_id" },
              count: { $sum: 1 },
              mes: {$first: "$mes"}
              
      }
      },
      {
          $group: {
            _id: null,
            maxCount: {$max: "$count"},
          }
      },
    { $project: { _id: 0,  maxCount: 1 } }
  ]
)

//Beneficios.
//Restar precioUnitario - precioUnitarioCompraEmpresa y multiplicarlo por numeroUnidades

db.ventas.aggregate(
  [
    
    { $project: { 
        beneficios:
        {$multiply:[{$subtract: ["$precioUnitario", "$precioUnitarioCompraEmpresa"]}, "$numeroUnidades" ]}
      } 
    }
  ]
)