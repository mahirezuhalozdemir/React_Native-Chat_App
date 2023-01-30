# React-Native_Chat-App
[EN](#about-proje)/[TR](#proje-hakkında)
# Proje Hakkında 
Projede, server-client arasında iletişimi sağlayan web tabanlı socket io teknolojisi kullanılmıştır.İletişimi tek bir TCP protokolüyle gerçekleştirir.Gerçek zamanlı iletişim sağlar. 

# Projeyi Çalıştırmak İçin
Projeyi kişisel bilgisayarımızda ve telefonumuzda çalıştırmak için dikkat edilmesi gereken bazı hususlar var. Öncelikle telefonumuzda çalıştırmak için <i><b>expo</b></i> uygulamasının kurulu olması lazım. Öncelikle bilgisayarımızda port 4000'i çalıştırmalıyız. Bu uygulamamızın server'ı olacak. VS Code'da projemizi açıyoruz.
Terminal kısmından 'cd Server' kodu ile Sunucu ayarlarının olduğu klasöre giriyoruz. <i><b>npm start</b></i> diyerek sunucuyu başlatıyoruz. Daha sonra başka bir terminalde 'cd app ' diyerek uygulamamızın front-end kısmını yine 'npm start' ile başlatıyoruz. Bu ekranda açılan karekodu telefonumuzda expo uygulamasında 'Scan QR code' seçerek okutuyoruz.
!! Uygulamayı çalıştırmadan önce <i>screens</i> klasöründe <i>chat.js</i> ve <i>utils</i> klasöründe <i>socket.js</i> dosyalarında code içerisinde localhost yazan yerlere bilgisayarınızın IPV4 adresini yazmayı unutmayın. 
!! Bilgisayarın IPV4 adresini öğrenmek İçin:
Komut satırı başlatılır. <i>ipconfig</i> kodu çalıştırılır. <br><br>
![q1.jpg](https://github.com/mahirezuhalozdemir/React-Native_Chat-App/blob/main/screens/q1.jpg) <br><br>
Gösterilen bilgilerden IPv4 bizim aradığımız adrestir. Bu adres kopyalanır ve gerekli dosyaların içine yazılır.<br><br>
![q2.jpg](https://github.com/mahirezuhalozdemir/React-Native_Chat-App/blob/main/screens/q2.jpg)<br> <br>
Her internet bağlantısı açılıp kapandığında bu değer değiştiği için ,uygulamanın her çalıştırılmasında bu adres tekrar kontrol edilip, yerleştirildikten sonra çalıştırılmalıdır.

[Projeden görüntüler](#views-from-the-project)

# About Proje
In this project, web-based socket io technology was used that provides communication between server and client.

# To Run the Project
There are some things to consider in order to run the project on our computer and phone. First of all, <i><b>expo</b></i> application must be installed to run it on our phone.
Firstly, we have to run port 4000 on our computer. This will be the server of our application. We open our project in VS Code.
From the terminal, we enter the folder with the server settings with the 'cd Server' code. We start the server by entering <i><b>npm start</b></i>.Then we start the front-end part of our application with 'npm start' again by entering 'cd app' in another terminal. We scan the QR code that opens on this screen by selecting 'Scan QR code' in the expo application on our phone.
!! Before running the application, replace 'localhost' in the code in <i>chat.js</i> in the <i>screens</i> folder and in the code in <i>socket.js</i> in the <i>utils</i> folder with your computer's IPV4 address.
!! To Find out the Computer's IPV4 Address:
The command line starts. The <i>ipconfig</i> code is run. <br><br>

![q1.jpg](https://github.com/mahirezuhalozdemir/React-Native_Chat-App/blob/main/screens/q1.jpg)<br><br>
From the information shown, IPv4 is the address we are looking for.
This address is copied and written into the necessary files.<br><br>
![q2.jpg](https://github.com/mahirezuhalozdemir/React-Native_Chat-App/blob/main/screens/q2.jpg)<br> <br>
Since this value changes every time the internet connection is opened and closed, this address should be checked again each time the application is run and run after it is placed.
# Views From the Project
 
<img src="https://github.com/mahirezuhalozdemir/React-Native_Chat-App/blob/main/screens/q3.jpeg" width="250">
<img src="https://github.com/mahirezuhalozdemir/React-Native_Chat-App/blob/main/screens/q4.jpeg" width="250">
<img src="https://github.com/mahirezuhalozdemir/React-Native_Chat-App/blob/main/screens/q5.jpeg" width="250">
<img src="https://github.com/mahirezuhalozdemir/React-Native_Chat-App/blob/main/screens/q6.jpeg" width="250">
<img src="https://github.com/mahirezuhalozdemir/React-Native_Chat-App/blob/main/screens/q7.jpeg" width="250">
<img src="https://github.com/mahirezuhalozdemir/React-Native_Chat-App/blob/main/screens/q8.jpeg" width="250">
Bu chat'in bilgisayar konsolunda gösterilen hali aşağıdaki gibidir.
<img src="https://github.com/mahirezuhalozdemir/React-Native_Chat-App/blob/main/screens/q.jpg" width="250">
