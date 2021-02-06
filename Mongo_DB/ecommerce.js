var products = [
    {
        name: "T-shirt",
        pId: "ts",
        variant:[
            {
                type:"size",
                value:["s","xl"]
            },
            {
                type:"color",
                value:["red"]
            },
            {
                type:"material",
                value:["cotton","polyester"]
            }
        ],
        variantDetails: [
            {
                vId: "ts1",
                size: "s",
                color: "red",
                material: "cotton",
                media: "image",
                status: "a",
                price: 2000,
                quantity: 3
            },
            {
                vId: "ts2",
                size: "s",
                color: "red",
                media: "video",
                material: "polyester",
                status: "a",
                price: 3000,
                quantity: 2
            },
            {
                vId: "ts3",
                size: "xl",
                color: "red",
                media: "image",
                material: "cotton",
                status: "a",
                price: 2500,
                quantity: 5
            },
            {
                vId: "ts4",
                size: "xl",
                color: "red",
                media: "image",
                material: "polyester",
                status: "a",
                price: 3000,
                quantity: 4
            }
        ],
        customer:[
            {
                c_name:"c1",
                order:[
                    "ts1","ts4"
                ],
                rating:{
                    r_ts1:3,
                    r_ts4:1
                }
            },
            {
                c_name:"c2",
                order:[
                    "ts2","ts3","ts4"
                ],
                rating:{
                    r_ts2:1,
                    r_ts3:2,
                    r_ts4:3
                }
            },
            {
                c_name:"c3",
                order:[
                    "ts1","ts3"
                ],
                rating:{
                    r_ts1:4,
                    r_ts3:3
                }
            },
            {
                c_name:"c4",
                order:[
                    "ts2","ts4"
                ],
                rating:{
                    r_ts2:5,
                    r_ts4:5
                }
            }  
        ]
    },
    {
        name: "Shirt",
        pId: "sh",
        variant:[
            {
                type:"size",
                value:["m","xl"]
            },
            {
                type:"color",
                value:["black"]
            },
            {
                type:"material",
                value:["cotton","rayon"]
            }
        ],
        variantDetails: [
            {
                vId: "sh1",
                size: "m",
                color: "black",
                material: "cotton",
                media: "video",
                status: "a",
                price: 2000,
                quantity: 3
            },
            {
                vId: "sh2",
                size: "m",
                color: "black",
                material: "rayon",
                media: "image",
                status: "a",
                price: 3000,
                quantity: 2
            },
            {
                vId: "sh3",
                size: "xl",
                color: "black",
                material: "cotton",
                media: "video",
                status: "a",
                price: 4000,
                quantity: 5
            },
            {
                vId: "sh4",
                size: "xl",
                color: "black",
                material: "rayon",
                media: "video",
                status: "a",
                price: 2500,
                quantity: 4
            }
        ],
        customer:[
            {
                c_name:"c1",
                order:[
                    "sh1","sh2","sh4"
                ],
                rating:{
                    r_sh1:2,
                    r_sh2:4,
                    r_sh4: 4
                }
            },
            {
                c_name:"c2",
                order:"sh1",
                rating:{
                    r_sh1: 4
                }
            },
            {
                c_name:"c3",
                order:[
                    "sh1","sh3"
                ],
                rating:{
                    r_sh1:5,
                    r_sh3:5
                }
            },
            {
                c_name:"c4",
                order:"sh3",
                rating:{
                    r_sh3:5
                }
            }  
        ]
    },
    {
        name: "Watches",
        pId: "wa",
        variant:[
            {
                type:"color",
                value:["black"]
            },
            {
                type:"company",
                value:["fastrack","titan","rolex"]
            }
        ],
        variantDetails: [
            {
                vId: "wa1",
                color: "black",
                company: "fastrack",
                status: "a",
                media: "image",
                price: 1500,
                quantity: 3
            },
            {
                vId: "wa2",
                color: "black",
                company: "titan",
                status: "a",
                media: "video",
                price: 3000,
                quantity: 2
            },
            {
                vId: "wa3",
                color: "black",
                company: "rolex",
                status: "a",
                media: "image",
                price: 4500,
                quantity: 5
            }
        ],
        customer:[
            {
                c_name:"c1",
                order:"wa2",
                rating:{
                    r_wa2:5
                }
            },
            {
                c_name:"c2",
                order:"wa1",
                rating:{
                    r_wa1: 1
                }
            },
            {
                c_name:"c3",
                order:"wa3",
                rating:{
                    r_wa3:1
                }
            },
            {
                c_name:"c4",
                order:"wa1",
                rating:{
                    r_wa1:2
                }
            }  
        ]
    },
    {
        name: "Shoes",
        pId: "shoo",
        variant:[
            {
                type:"size",
                value:["7","8"]
            },
            {
                type:"color",
                value:["black"]
            },
            {
                type:"company",
                value:["reebok","nike"]
            }
        ],
        variantDetails: [
            {
                vId: "shoo1",
                size: "7",
                color: "black",
                company:"reebok",
                status: "a",
                media: "image",
                price: 2000,
                customer: [
                    "c1", "c4"
                ],
                rating:{
                    c1: 2,
                    c4: 5
                },
                quantity: 3
            },
            {
                vId: "shoo2",
                size: "7",
                color: "black",
                company: "nike",
                media: "video",
                status: "a",
                price: 3000,
                customer: [
                    "c1", "c3", "c4"
                ],
                rating:{
                    c1: 5,
                    c3: 4,
                    c4: 2
                },
                quantity: 3
            },
            {
                vId: "shoo3",
                size: "8",
                color: "black",
                company: "reebok",
                media: "image",
                status: "a",
                price: 3000,
                customer: [
                    "c1", "c2"
                ],
                rating:{
                    c1: 5,
                    c2: 4
                },
                quantity: 2
            },
            {
                vId: "shoo4",
                size: "8",
                color: "black",
                company: "nike",
                media: "video",
                status: "a",
                price: 1000,
                customer: [
                    "c3", "c4"
                ],
                rating:{
                    c3: 4,
                    c4: 2
                },
                quantity: 4
            }
        ],
        customer:[
            {
                c_name:"c1",
                order:[
                    "shoo1","shoo2","shoo3"
                ],
                rating:{
                    r_shoo1:2,
                    r_shoo2:5,
                    r_shoo3:5
                }
            },
            {
                c_name:"c2",
                order:"shoo3",
                rating:{
                    r_shoo3: 4
                }
            },
            {
                c_name:"c3",
                order:[
                    "shoo2","shoo4"
                ],
                rating:{
                    r_shoo2:4,
                    r_shoo4:4
                }
            },
            {
                c_name:"c4",
                order:[
                    "shoo1","shoo2","shoo4"
                ],
                rating:{
                    r_shoo1:5,
                    r_shoo2:2,
                    r_shoo4:4
                }
            }  
        ]
    }
]
