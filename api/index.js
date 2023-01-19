import express from "express";

const app = express();

app.use(express.json());
app.use(express.static("public"));

const bio = {
    nama:[
        "Nama Lengkap",
        "Dwi Fauzul Ahmad Tanjung"
    ],
    agama:[
        "Agama",
        "Islam"
    ],
    umur:[
        "Umur",
        "20 Tahun"
    ],
    alamat:[
        "Alamat",
        "Jl.Kol.Bangun Siregar"
    ],
    hobby:[
        "Hobby",
        "Berenang"
    ]
};

app.get("/api/bio", (req,res) => {
    res.send(bio);
});

app.listen(3000);