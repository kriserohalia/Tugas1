const hewanBuas = ["Harimau","Singa","Beruang","Serigala"];
const hewanJinak = ["Kucing","Kelinci","Ayam"];


const Binatang = (hewan) => {
      return  [...hewanBuas,...hewanJinak] 
      
};
console.log(Binatang());

function gabung(a) {
    return a.map((hewan) => ({
        hewan,
        makananKesukaan: {
            Kucing: "Ikan",
            Kelinci: "Wortel",
            Ayam: "Jagung",
        }[hewan],
    }));
}

  setTimeout(() => {
    const hasil = gabung(hewanJinak);
    console.log("Hasil :", hasil);
  }, 5000);

