function filtreleYas(dizi) {
    const sonuclar = dizi.filter(kisi => kisi.yas > 18);
    return sonuclar;
}
const kisiler = [
    { isim: "Ilgın", 
      yas: 17 
    },
    { isim: "Yiğit",
      yas: 20
    },
    { isim: "Doruk",
       yas: 23 
    },
    { isim: "Eslem", 
      yas: 15 
    },
    { isim: "Eymen",
      yas: 22
    }
];
const yetiskinler = filtreleYas(kisiler);
console.log("18 yaşından büyük olanlar:", yetiskinler);
