db.clientes.drop()
db.clientes.insertMany([
    {
        _Id:1,
        Nombre:"Pablo",
        Apellidos:"Fidalgo Garcia",
        dni:"76854165X",
        pedidos:[4,3],
        gramos:5,
        fecha_de_envio:new Date("2021,02,20"),
        recibo:false,
    },

    {
        _Id:2,
        Nombre:"Juan",
        Apellidos:"Martinez pastor",
        dni:"47827744A",
        Pedidos:[14],
        gramos:5,
        fecha_de_envio:new Date("2021,02,27"),
        recibo:false,
    },
    
    {
        _Id:3,
        Nombre:"David",
        Apellidos:"Mendoza Serrano",
        dni:"40234490S",
        pedidos:[8,12],
        gramos:5,
        fecha_de_envio:new Date("2021,02,20"),
        recibo:false
    },
    
    {
        _Id:4,
        Nombre:"Adrian",
        Apellidos:"Valle Troncoso",
        dni:"91637297F",
        Pedidos:[4,3,20],
        gramos:5,
        fecha_de_envio:new Date("2020,08,25"),
        recibo:true
    },
    
    {
        _Id:5,
        Nombre:"Jose maria",
        Apellidos:"Palacios Mellado",
        dni:"63442245B",
        pedidos:[1,14],
        gramos:5,
        fecha_de_envio:new Date("2020,12,15"),
        recibo:true
    },
    
    {
        _Id:6,
        Nombre:"Cristobal",
        Apellidos:"Martin Dana",
        dni:"49338686Y",
        pedidos:[18],
        gramos:5,
        fecha_de_envio:new Date("2021,02,28"),
        recibo:false
    },
    
    {
        _Id:7,
        Nombre:"Daniel",
        Apellidos:"Romero Galan",
        dni:"88382858E",
        pedidos:[4,3,8],
        gramos:5,
        fecha_de_envio:new Date("2020,11,15"),
        recibo:true
    },
    
    {
        _Id:8,
        Nombre:"Inmaculada",
        Apellidos:"Fernandez Camino",
        dni:"76854165X",
        pedidos:[20],
        gramos:5,
        fecha_de_envio:new Date("2021,02,15"),
        recibo:true
    },

    {
        _Id:9,
        Nombre:"Lucas",
        Apellidos:"Coronilla Salmeron",
        dni:"07910501L",
        pedidos:[12,15,17],
        gramos:5,
        fecha_de_envio:new Date("2020,11,02"),
        recibo:true
    },
    
    {
        _Id:10,
        Nombre:"Javier",
        Apellidos:"Barrera correa",
        dni:"29371658Z",
        pedidos:[1],
        gramos:5,
        fecha_de_envio:new Date("2021,01,25"),
        recibo:false
    },
    

])
