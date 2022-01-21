var condition=[
    {
        url:"https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_immunity_1.png",
        name:"COVID care",
    },
    {
        url:"https://newassets.apollo247.com/pub/media/healtharea/247images/c/o/coronavirus_protection_1.png",
        name:"COVID protection",
    },
     {
        url:"https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_diabetes.png",
        name:"Diabetes Care",
    },
     {
        url:"https://newassets.apollo247.com/pub/media/healtharea/247images/m/i/mind_care.jpg",
        name:"Mind Care",
    },
     {
        url:"https://newassets.apollo247.com/pub/media/healtharea/247images/l/i/liver_care.jpg",
        name:"Liver Care",
    },
     {
        url:"https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_heart.png",
        name:"Cardiac",
    },
     {
        url:"https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_arthritis.png",
        name:"Pain Relief",
    },
     {
        url:"https://newassets.apollo247.com/pub/media/healtharea/247images/o/r/oral_care_2.png",
        name:"Oral Care",
    },
     {
        url:"https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_lungs.png",
        name:"Respiration",
    },
     {
        url:"https://newassets.apollo247.com/pub/media/healtharea/247images/c/o/cold_and_immunity_21oct.png",
        name:"Cold Immunity",
    },
     {
        url:"https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_stomach.png",
        name:"Stomach Care",
    },
     {
        url:"https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_eyeear.png",
        name:"Eye Care",
    },

]

condition.map(function(data){
    var div=document.createElement("div");
    div.setAttribute("id","small");
    
    var image=document.createElement("img");
    image.setAttribute("src",data.url);
    image.setAttribute("class","img");

    var txt=document.createElement("p");
    txt.textContent=data.name;
  
    div.append(image,txt);
    document.querySelector("#flex").append(div);
})
var protection=[
    {
        img_url :  "https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/o/cov0120.jpeg",
        dec:"Mylab CoviSelf COVID-19 Rapid Antigen Self Test Kit, 2 Kits",
        price:"₹ 500.00",
    },
    {
        img_url:"https://newassets.apollo247.com/pub/media/catalog/product/w/h/whatsapp_image_2021-12-27_at_4.10.22_pm_1_.jpeg",
        dec:"Doctor's Choice Face mask 3 Layer Loop, 100 Count",
        price:"₹ 900.00",
    },
     {
        img_url:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/p/a/pat0217_1.jpg",
        dec:"Patanjali Coronil Kit (Coronil + Swasari + Anu Taila), 1 Count",
        price:"₹ 545.00",
    },
     {
        img_url:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/v/i/vir0147_2.jpg",
        dec:"Viroshield Mouth Spray, 30 ml",
        price:"₹ 199.00",
    },
     {
        img_url:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/_/c.jpg",
        dec:"Zincovit Tablet 15's",
        price:"₹ 105.00",
    },
     {
        img_url:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/p/u/pul0018.jpg",
        dec:"Polymed Pulse Oximeter CMS50C, 1 Count",
        price:"₹ 999.00",
    },
     {
        img_url:"https://newassets.apollo247.com/pub/media/catalog/product/i/m/img_0333-copy.jpg",
        dec:"Fast&Up Charge Natural Vitamin C & Zinc Orange Effervescent, 20 Tablets",
        price:"₹ 195.00",
    },
     {
        img_url:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/f/a/fas0112_2.jpg",
        dec:"Apollo Pharmacy Compressor Nebulizer, 1 Count",
        price:"₹ 1799.00",
    },
     {
        img_url:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/p/h/phy0070.jpg",
        dec:"Phytorelief-CC Sugar Free, 10 Lozenges",
        price:"₹ 297.00",
    },
     {
        img_url:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/a/p/apl0063_front.jpg",
        dec:"Apollo Life Hand Sanitizer, 500 ml",
        price:"₹ 250.00",
    },

]

  protection.map(function(ele){
  
    var div1 = document.createElement("div");
    var imge=document.createElement("img");
    imge.setAttribute("src",ele.img_url);

    var dec=document.createElement("p");
    dec.textContent=ele.dec;
    var hr=document.createElement("hr");

    var price=document.createElement("p");
    price.textContent=ele.price;

    var btn=document.createElement("button");
    btn.textContent="Add Cart";
    btn.setAttribute("class","btn");
         
      
    div1.append(imge,dec,hr,price,btn);

    document.querySelector("#one").append(div1);
})


 protection.map(function(ele){
  
    var div1 = document.createElement("div");
    var imge=document.createElement("img");
    imge.setAttribute("src",ele.img_url);

    var dec=document.createElement("p");
    dec.textContent=ele.dec;
    var hr=document.createElement("hr");

    var price=document.createElement("p");
    price.textContent=ele.price;

    var btn=document.createElement("button");
    btn.textContent="Add Cart";
    btn.setAttribute("class","btn");
         
      
    div1.append(imge,dec,hr,price,btn);

    document.querySelector("#two").append(div1);
})