db.ventas.drop()

db.ventas.insertMany([
    {_id: 1, articuloVendido: "SmartWatch", precioUnitario: 39.99, numeroUnidades: 300, fechaVenta: new Date("2021-10-12"), precioUnitarioCompraEmpresa: 29, cliente: "Johns", vendedor: "Andrea Hidalgo"},
    {_id: 2, articuloVendido: "Telescopio Inteligente", precioUnitario: 159.9, numeroUnidades: 200, fechaVenta: new Date("2021-01-07"), precioUnitarioCompraEmpresa: 110, cliente: "Amazon", vendedor: "Javier Ruiz"},
    {_id: 3, articuloVendido: "Prismáticos", precioUnitario: 74.99, numeroUnidades: 250, fechaVenta : new Date("2021-11-27"), precioUnitarioCompraEmpresa: 60, cliente: "Amazon", vendedor: "Javier Ruiz"},
    {_id: 4, articuloVendido: "Intax Mini", precioUnitario: 68.99, numeroUnidades: 400, fechaVenta: new Date("2021-09-29"), precioUnitarioCompraEmpresa: 60, cliente: "Juanito Perez", vendedor: "Nuria Prieto"},
    {_id: 5, articuloVendido: "EchoDot", precioUnitario: 39.98, numeroUnidades: 500, fechaVenta: new Date("2021-09-06"), precioUnitarioCompraEmpresa: 30, cliente: "Manolo Suarez", vendedor: "Javier Ruiz"},
    {_id: 6, articuloVendido: "Anillo LED", precioUnitario: 23.99, numeroUnidades: 500, fechaVenta: new Date("2021-09-23"), precioUnitarioCompraEmpresa: 18, cliente: "Flash", vendedor: "Marta Alfonso"},
    {_id: 7, articuloVendido: "Estabilizador de mano", precioUnitario: 99, numeroUnidades: 500, fechaVenta: new Date("2021-11-10"), precioUnitarioCompraEmpresa: 70, cliente: "Amazon", vendedor: "Andrea Hidalgo"},
    {_id: 8, articuloVendido: "Proyector", precioUnitario: 75.99, numeroUnidades: 300, fechaVenta: new Date("2021-11-05"), precioUnitarioCompraEmpresa: 60, cliente: "Amazon", vendedor: "Javier Ruiz"},
    {_id: 9, articuloVendido: "AirPods", precioUnitario: 179, numeroUnidades: 400, fechaVenta: new Date("2021-12-06"), precioUnitarioCompraEmpresa: 150, cliente: "Johns", vendedor: "Fernando Cardoso"},
   
    {_id: 10, articuloVendido: "SmartWatch", precioUnitario: 39.99, numeroUnidades: 500, fechaVenta: new Date("2021-12-12"), precioUnitarioCompraEmpresa: 29, cliente: "Manolo Suarez", vendedor: "Andrea Hidalgo"},
    {_id: 11, articuloVendido: "EchoDot", precioUnitario: 39.98, numeroUnidades: 100, fechaVenta: new Date("2021-11-06"), precioUnitarioCompraEmpresa: 30, cliente: "Flash", vendedor: "Fernando Cardoso"},
    {_id: 12, articuloVendido: "Estabilizador de mano", precioUnitario: 99, numeroUnidades: 300, fechaVenta: new Date("2021-12-15"), precioUnitarioCompraEmpresa: 70, cliente: "Amazon", vendedor: "Andrea Hidalgo"},
    {_id: 13, articuloVendido: "SmartWatch", precioUnitario: 39.99, numeroUnidades: 600, fechaVenta: new Date("2021-11-12"), precioUnitarioCompraEmpresa: 29, cliente: "Manolo Suarez", vendedor: "Javier Ruiz"},
    {_id: 14, articuloVendido: "Proyector", precioUnitario: 75.99, numeroUnidades: 400, fechaVenta: new Date("2021-12-25"), precioUnitarioCompraEmpresa: 60, cliente: "Amazon", vendedor: "Nuria Prieto"},
    {_id: 15, articuloVendido: "Anillo LED", precioUnitario: 23.99, numeroUnidades: 700, fechaVenta: new Date("2021-12-12"), precioUnitarioCompraEmpresa: 18, cliente: "Flash", vendedor: "Fernando Cardoso"},
    {_id: 16, articuloVendido: "Proyector", precioUnitario: 75.99, numeroUnidades: 600, fechaVenta: new Date("2021-11-12"), precioUnitarioCompraEmpresa: 60, cliente: "Amazon", vendedor: "Javier Ruiz"},
    {_id: 17, articuloVendido: "SmartWatch", precioUnitario: 39.99, numeroUnidades: 200, fechaVenta: new Date("2021-12-12"), precioUnitarioCompraEmpresa: 29, cliente: "Johns", vendedor: "Andrea Hidalgo"},
   
])