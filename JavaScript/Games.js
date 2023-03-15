alert('Selamat Datang');
var hasil;
var pilihanComputer;
var pilihanUser;
var user = prompt('Masukkan Pilihan Anda \n 1. Batu \n 2. Gunting \n 3. Kertas \n Pilih Dengan Memasukkan Angka');
var name = prompt('Masukkan Nama Anda');

    if (user == 1)
    {
        pilihanUser = "Batu";
    } 
    else if (user == 2)
    {
        pilihanUser = "Gunting";
    } 
    else if (user == 3)
    {
        pilihanUser = "Kertas";
    }


    var computer = Math.floor(Math.random() * 3);
    if (computer == 1)
    {
        pilihanComputer = "Batu";
    } 
    else if (computer == 2)
    {
        pilihanComputer = "Gunting";
    } 
    else
    {
        pilihanComputer = "Kertas";
    } 


    if (pilihanUser == "Batu" && pilihanComputer == "Batu"){
        hasil = "Seri"
    }
    if (pilihanUser == "Batu" && pilihanComputer == "Gunting"){
        hasil = "User Menang"
    }
    if (pilihanUser == "Batu" && pilihanComputer == "Kertas"){
        hasil = "User Kalah"
    }
    if (pilihanUser == "Gunting" && pilihanComputer == "Batu"){
        hasil = "User Kalah"
    }
    if (pilihanUser == "Gunting" && pilihanComputer == "Gunting"){
        hasil = "Seri"
    }
    if (pilihanUser == "Gunting" && pilihanComputer == "Kertas"){
        hasil = "User Menang"
    }
    if (pilihanUser == "Kertas" && pilihanComputer == "Batu"){
        hasil = "User Menang"
    }
    if (pilihanUser == "Kertas" && pilihanComputer == "Gunting"){
        hasil = "User Kalah"
    }
    if (pilihanUser == "Kertas" && pilihanComputer == "Kertas"){
        hasil = "Seri"
    }


    alert (' Nama : ' +name+ '\n Pilihan User : ' +pilihanUser+ '\n Pilihan Computer : ' +pilihanComputer
    + '\n Hasil : ' +hasil );