db.cultivo.drop()
db.cultivo.insertMany([
    {planta:"pack 5 gramos Chem Berry D", 
    id_p:1,
    precio: 25.5 ,
    thc: 32 , 
    genetica:{ tipo:"sativa",Predominancia:"dominante"},
    cbd:"none",
    cosecha: new Date("2020,8,10"),
    etiquetas:["s","d","n"],
    stock:false,
    cod_proveedor:1
    },

    {planta:"pack 5 gramos Bruce Banner BX 2.0",
    id_p:2,
    precio: 23 ,
    thc: 30 ,
    genetica:{ tipo:"sativa",Predominancia:"dominante"},
    cbd:"none",cosecha: new Date("2020,10,11"),
    etiquetas:["s","d","n"],
    stock:true,
    cod_proveedor:1
    },

    {planta:" pack 5 gramos HulkBerry", 
    precio: 18.5 ,
    id_p:3,
    thc: 27 , genetica:{ tipo:"sativa",Predominancia:"semi"},
    cbd:"bajo",
    cosecha: new Date("2020,8,10"),
    etiquetas:["s","se","b"],
    stock:true, 
    cod_proveedor:1
    },

    {planta:"pack 5 gramos Original Glue",
    id_p:4,
    precio: 17  ,
    thc: 30  ,
    genetica:{ tipo:"indica",Predominancia:"dominante"},
    cbd:"none",
    cosecha: new Date("2020,4,13"),
    etiquetas:["i","d","n"],
    stock:true,
    cod_proveedor:1
    },

    {planta:"pack 5 gramos Girl Scout Cookies",
    id_p:5,
    precio: 16.5 ,
    thc: 28 , genetica:{ tipo:"indica",Predominancia:"semi"},
    cbd:"none",
    cosecha: new Date("2020,1,1"),
    etiquetas:["i","se","n"],
    stock:false,
    cod_proveedor:2
    },

    {planta:"pack 5 gramos Green Gelato", precio: 15 ,
    id_p:6,
    thc: 27 ,
    genetica:{ tipo:"indica",Predominancia:"semi"}
    ,cbd:"bajo",
    cosecha: new Date("2020,5,27"),
    etiquetas:["i","se","b"],
    stock:true,
    cod_proveedor:2
    },

    {planta:"pack 5 gramos Romulan Haze",
    id_p:7,
    precio: 13 , 
    thc: 20 , 
    genetica:{ tipo:"sativa",Predominancia:"dominante"},
    cbd:"bajo",
    cosecha: new Date("2020,6,24"),
    etiquetas:["s","d","b"],
    stock:false,
    cod_proveedor:2
    },

    {planta:"pack 5 gramos Where's My Bike", 
    id_p:8,
    precio: 10 ,
    thc: 17 ,
    genetica:{ tipo:"sativa",Predominancia:"semi"},
    cbd:"bajo",
    cosecha: new Date("2020,2,28"),
    etiquetas:["s","se","b"],
    stock:false,
    cod_proveedor:2
    },

    {planta:"pack 5 gramos Island Sweet Skunk",
    id_p:9,
    precio: 13 ,
    thc: 23 ,
    genetica:{ tipo:"sativa",Predominancia:"semi"},
    cbd:"alto",
    cosecha: new Date("2020,3,8"),
    etiquetas:["s","se","a"],
    stock:false,
    cod_proveedor:3
    },

    {planta:"pack 5 gramos Gorilla Zkittlez",
    id_p:10,
    precio: 8 , 
    thc: 29 ,
    genetica:{ tipo:"indica",Predominancia:"dominante"},
    cbd:"none",
    cosecha: new Date("2020,7,20"),
    etiquetas:["i","d","n"],
    stock:false,
    cod_proveedor:3
    },
]);
/*Plantas altas en cbd*/
db.cultivo.insertMany([
    {planta:"pack 5 gramos Cannatonic",
    id_p:11,
    precio: 38 ,
    thc: 16 , 
    genetica:{ tipo:"sativa",Predominancia:"semi"},
    cbd:"alto",
    cosecha: new Date("2020,5,15"),
    etiquetas:["s","se","a"],
    stock:false,
    cod_proveedor:3
    },

    {planta:"pack 5 gramos CBD Therapy", 
    id_p:12,
    precio: 5 ,
    thc: 5 ,
    genetica:{ tipo:"indica",Predominancia:"semi"},
    cbd:"alto",
    cosecha: new Date("2020,7,16"),
    etiquetas:["i","se","a"],
    stock:true,
    cod_proveedor:3
    },

    {planta:"pack 5 gramos Candida (CD-1)",
    id_p:13,
    precio: 7 , thc: 5 , genetica:{ tipo:"sativa",Predominancia:"dominante"},
    cbd:"muy_alto",
    cosecha: new Date("2020,4,7"),
    etiquetas:["s","do","ma"],
    stock:true,
    cod_proveedor:3
    },

    {planta:"pack 5 gramos Juanita La Lagrimosa",
    id_p:14,
    precio: 8.5  ,
    thc: 7  ,
    genetica:{ tipo:"indica",Predominancia:"dominante"},
    cbd:"muy alto",
    cosecha: new Date("2020,1,20"),
    etiquetas:["i","d","ma"],
    stock:true,
    cod_proveedor:3
    },

    {planta:"pack 5 gramos OG Kush CBD",
    id_p:15,
    precio: 11.5 , 
    thc: 10 , 
    genetica:{ tipo:"sativa",Predominancia:"dominante"},
    cbd:"alto",cosecha: new Date("2020,8,21"),
    etiquetas:["s","d","a"],
    stock:true,
    cod_proveedor:4
    },

    {planta:"pack 5 gramos CBD ComPassion", 
    id_p:16,
    precio: 8.7 , 
    thc: 8 , 
    genetica:{ tipo:"indica",Predominancia:"semi"},
    cbd:"alto",
    cosecha: new Date("2020,6,17"),
    etiquetas:["i","se","a"],
    stock:false,
    cod_proveedor:4
    },

    {planta:"pack 5 gramos Royal Medic",
    id_p:17,
    precio: 18.3 , 
    thc: 12 , 
    genetica:{ tipo:"sativa",Predominancia:"dominante"},
    cbd:"muy alto",
    cosecha: new Date("2020,2,12"),
    etiquetas:["s","d","ma"],
    stock:true,
    cod_proveedor:4
    },

    {planta:"pack 5 gramos CBD Critical Mass",
    id_p:18, 
    precio: 4.5 , 
    thc: 4 , 
    genetica:{ tipo:"indica",Predominancia:"dominante"},
    cbd:"alto",cosecha: new Date("2020,3,24"),
    etiquetas:["i","d","a"],
    stock:false,
    cod_proveedor:4
    },

    {planta:"pack 5 gramos S.A.G.E. CBD",
    id_p:19,
    precio: 12 , 
    thc: 9.5 , 
    genetica:{ tipo:"sativa",Predominancia:"semi"},
    cbd:"alto",
    cosecha: new Date("2020,4,1"),
    etiquetas:["s","se","a"],
    stock:false,
    cod_proveedor:4
    },

    {planta:"pack 5 gramos CBD-Chronic", 
    id_p:20,
    precio: 3 , 
    thc: 5 , 
    genetica:{ tipo:"indica",Predominancia:"semi"},
    cbd:"bajo",
    cosecha: new Date("2020,7,12"),
    etiquetas:["i","se","b"],
    stock:true,
    cod_proveedor:4
    },
]);
