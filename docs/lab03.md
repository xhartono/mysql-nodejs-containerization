# Terhubung dengan MySQL


<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Terhubung dengan MySQL](#terhubung-dengan-mysql)
  - [Tujuan Instruksional Khusus](#tujuan-instruksional-khusus)
  - [Studi Kasus](#studi-kasus)
  - [Instruksi](#instruksi)
    - [Langkah 1: Instalasi pustaka MySQL (5 Menit)](#langkah-1-instalasi-pustaka-mysql-5-menit)
    - [Langkah 2: Membuat Web Aplikasi akses ke MySQL (15 menit)](#langkah-2-membuat-web-aplikasi-akses-ke-mysql-15-menit)

<!-- /code_chunk_output -->

## Tujuan Instruksional Khusus

- Setelah menyelesaikan instruksi pada setiap langkah, Peserta akan dapat menggunakan database MySQL untuk mengolah data. 

## Studi Kasus
- Hampir sebagian besar aplikasi membutuhkan database untuk mencatat transaksi pada ranah bisnis (domain) yang digunakan, seperi ranah bisnis e-commerce, ada entitas customer, order dan lainnya.
- Pada lab ini akan menggunakan MySQL untuk database.

## Instruksi

### Langkah 1: Instalasi pustaka MySQL (5 Menit)

- Buat subfolder lab3 pada folder labs

```
c:\> cd
..\labs
c:\> md lab3
c:\> cd lab3
```

- Copy file package.json, .env dari lab2 ke lab3

```
c:\> cd
..\lab3
c:\> copy ..\lab2\package.json ..\lab2\.env .
```

- Instalasi pustaka mysql

```
c:\> npm install --save mysql2
c:\> npm install
```

### Langkah 2: Membuat Web Aplikasi akses ke MySQL (15 menit)

- Buat berkas baru: index.js, dan ketikkan perintah berikut ini

![](./images/2021-05-18-01-11-22.png)