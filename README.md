# Lab NodeJS MySQL containerization

## Tujuan Instruksional Umum:

Setelah menyelesaikan lab ini peserta akan dapat membangun aplikasi berbasis web dengan menggunakan NodeJS sebagai backend dan database MySQL didalam Docker *Container* sehingga dapat di jalankan di berbagai platform.

## I: Lingkungan Pengembang Aplikasi

### Tujuan Instruksional Khusus:
- Peserta akan menggunakan lingkungan pengembangan untuk bekerja dengan NodeJS dan MySQL
### Prasyarat:
- Desktop/Laptop dengan Windows 10.
- Terinstall Integrated Development Environment (IDE) misal: VSCode
- Terinstall nodejs dan npm
- Terinstall MySQL server dan client
- Terinstall docker
- Terinstall docker-compose

### Instsruksi

#### Langkah 1: Menguji lingkungan Pengembangan (15 menit)
- Aktikan PowerShell untuk menjalankan instruksi berikut
```
c:\>
```

- Apakah NodeJS dan NPM sudah terinstall ?
```
c:\> node -v
c:\> npm -v
```

- Apakah MySQL Client dan Server sudah terinstall?

```
c:\> mysql --version
c:\> mysql -uroot -p
mysql> show databases;
mysql> exit;
c:\>
```

- Apakah docker dan docker-compose sudah terinstall?
```
c:\> docker -v
c:\> docker-compose -v
```

- Apakah Visual Code sudah terinstall?
```
c:\> code .
<Setelah vscode aktif, keluar dengan ctrl-q >
```

> Catatan:
> - Jika terdapat Error pada setiap instruksi diatas, hubungi fasilitator
> - Fasilitator akan memberitahukan username dan password untuk akses ke mysql.
> - Untuk menghubungi fasilitator, gunakan public chat yang tersedia, sertakan nama Anda, mesin yang digunakan, penjelasan singkat masalah yang dihadapi. Fasilitator akan segera membantu Anda.
