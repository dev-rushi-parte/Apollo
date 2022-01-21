var other=[
    {
        img:"https://prodaphstorage.blob.core.windows.net/specialties/bdf0cf0d-754e-4254-aaf7-fdc7aedd7c35.jpg",
        head:"Allergist and Clinical Immunologist",
        dec:"Manage allergies and treat immunity",
        disease:"Recurring infections, Immunity deficiency",
    },
    {
        img:"https://prodaphstorage.blob.core.windows.net/specialties/7236eab5-ea3c-4691-8362-c1fec2198596.jpg",
        head:"Apollo Family Health Plan",
        dec:"Book Packages with your favorite doctors",
        disease:"Cold, Cough, Fever, Headache, Skin rashes, St",
    },
     {
         img:"https://newassets.apollo247.com/specialties/ic_bariatrics.png",
        head:"Bariatrics",
        dec:"For obesity-related disorders",
        disease:"Overweight, BMI over 30",
    },
     {
         img:"https://prodaphstorage.blob.core.windows.net/specialties/191336fb-173d-456b-b55b-c00669e35feb.jpg",
        head:"Cardiology",
        dec:"For heart and blood pressure problems",
        disease:"Chest pain, Heart Failure, Cholesterol",
    },
     {
         img:"https://prodaphstorage.blob.core.windows.net/specialties/e5a03790-7cef-4f9c-909c-e45b658a5a6d.jpg",
        head:"Cold, Cough and Fever",
        dec:"For common health concerns",
        disease:"Fever, Eye Infection, Stomach Ache, Headache",
    },
     {
         img:"https://prodaphstorage.blob.core.windows.net/specialties/62b70a73-837b-4b65-9b35-9b5ce04da79a.jpg",
        head:"Colorectal Surgery",
        dec:"For disorders of rectum, anus, and colon",
        disease:"Inflammatory bowel disease, Fistula, Intestinal blockage",
    },

     {
         img:"https://prodaphstorage.blob.core.windows.net/specialties/34ae6abd-5a9d-40d1-98be-454ac94925c7.jpg",
        head:"Counseling",
        dec:"Emotional or mental health difficulties",
        disease:"Depression, Anxiety, Mental Stress, Trauma",
    },
     {
         img:"https://newassets.apollo247.com/specialties/83163700-97e1-47cd-a715-5941fd708a03.png",
        head:"Covid Recover Clinic",
        dec:"Treatment of Post-Covid Mid/long term illness",
        disease:"Post-Covid breathlessness, Chest pain",
    },
     {
         img:"https://newassets.apollo247.com/specialties/ic_Critical_Care.png",
        head:"Critical Care",
        dec:"For life-threatening conditions",
        disease:"ICU related, High-risk patients, Hypertension",
    },
     {
         img:"https://prodaphstorage.blob.core.windows.net/specialties/dc6baffd-4104-4a38-a8b2-0f262d7270aa.jpg",
        head:"De-addiction Management",
        dec:"Specialists to help quit smoking, alcohol",
        disease:"Quit - Smoking, Drugs, Tobacco, Alcohol",
    },
     {
         img:"https://newassets.apollo247.com/specialties/ic_Dentist.png",
        head:"Dentist",
        dec:"Specialists for dental issues and treatments",
        disease:"Toothache, Mouth Ulcer, Crooked Teeth",
    },
     {
         img:"https://newassets.apollo247.com/specialties/ic_dietician.png",
        head:"Diabetology",
        dec:"Managing all kinds of diabetes",
        disease:"Type 1 & Type 2 diabetes, Obesity, Anemia",
    },
     {
         img:"https://newassets.apollo247.com/specialties/ic_diabetology.png",
        head:"Dietetics",
        dec:"Managing nutrition and diet regulation",
        disease:"Loss of appetite, Pregnancy Diet, Weight loss",
    },
     {
         img:"https://newassets.apollo247.com/specialties/ic_ent.png",
        head:"ENT",
        dec:"ENT specialists for Ear, Nose and Throat",
        disease:"Earache, Bad breath, Swollen neck, Vertigo",
    },
     {
         img:"",
        head:"Endocrine Surgery",
        dec:"For surgeries of endocrine glands",
        disease:"Thyroid cancer, Adrenal gland tumours, Conn syndrome",
    },
     {
         img:"https://prodaphstorage.blob.core.windows.net/specialties/9958ce34-1490-42da-a76d-f5304b873104.jpg",
        head:"Endocrinology",
        dec:"For diabetes and hormonal problems",
        disease:"Thyroid, PCOS/PCOD, Growth issues",
    },
     {
         img:"https://newassets.apollo247.com/specialties/ic_familyPhysician.png",
        head:"Family Physician",
        dec:"For maintaining a healthy lifestyle",
        disease:"Routine check-ups, Health-risk assessments",
    },
     {
         img:"https://newassets.apollo247.com/specialties/ic_gastroenterology.png",
        head:"Gastroenterology/GI medicine",
        dec:"Managing digestive health",
        disease:"Vomiting, Acidity, Stomach ulcers, Swallowing",
    },
     {
         img:"https://prodaphstorage.blob.core.windows.net/specialties/4466dab4-c2b4-4961-b34e-c87673b1e9cd.jpg",
        head:"General & Laparoscopic Surgeon",
        dec:"For general and minimally invasive surgeries",
        disease:"Cysts, Tumors, Appendicitis, Keyhole Surgery",
    },
     {
         img:"https://newassets.apollo247.com/specialties/ic_haematology.png",
        head:"Haematology",
        dec:"For diseases related to blood",
        disease:"Blood diseases",
    },
]

 other.map(function(data){
     var div=document.createElement("div");


     var image=document.createElement("img");
     image.setAttribute("src",data.img);

     var head=document.createElement("p");
     head.textContent=data.head;

     var dec=document.createElement("p");
     dec.textContent=data.dec;

     var disease=document.createElement("p");
     disease.textContent=data.disease;

     div.append(image,head,dec,disease);
    
     document.querySelector("#other").append(div);
     
 })