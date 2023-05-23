const mahasiswa = {
    nama : "Krise",
    nim : "02042111018",
    email : "kriserhl907@gmail.com"
}

let {nama,nim,email} = mahasiswa
console.log(nama,nim,email);

let teman1 = ["avita","maypa"]
let teman2 = ["putri","melani"]
let teman3 = ["maul","suci"]

let teman = [...teman1,...teman2,...teman3]
console.log(teman);