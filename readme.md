**Eklenti Adı: **caylakplayer
**Yapımcı:** MERT CAN USLU
**Açıklama**: Siteleriniz için düzenlenebilir video player.
[DEMO İÇİN TIKLAYIN ](https://bathremodel.info/caylakPlayer/ "DEMO İÇİN TIKLAYIN ")
*** ÖZELLİKLERİ ***
- Tek kelimeyle player'in renklerini değiştirebilirsiniz.
- Ses çubuğu ve hız çubuğu vardır. Video 2x'e kadar hızlandırılabilir. Seviyeler Ekranda çıkar.
- Ekrana çift tıklayarak 15 saniye ileri atlanabilir.
- Player'in sağ altına istediğiniz logo tek kelimeyle eklenebilir.
- İlerlenme çubuğuna tıklayarak istenilen yere gidilir.
- Tam ekran butonu vardır.
### ÖRNEK GÖRSELLER ###
![](https://resmim.net/f/OMonuq.png)
![](https://resmim.net/f/hMoavU.png)

# **Nasıl Kullanılır?**
**CaylakPlayer Dosyaları**: [Google Drive](https://drive.google.com/file/d/16mkZksJnv6JkviOCm_RkcbaBjrfED7Ao/view?usp=sharing "Google Drive")
- Yukarıdan CaylakPlayer'i indirin. Rar içerisinde 2 adet dosya var. (caylak_player.css, caylak_player.js) Bu dosyaları site dizininize atın.
- İlk olarak font aweome 5 veya üzerini import edin.

`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css">`

- CaylakPlayer'i kullanacağınız sayfada bu iki dosyayı import edin.

`<link rel="stylesheet" href="caylak_player.css"> <script src="caylak_player.js"></script>`


- Burada dikkat etmeniz gereken şey: caylak_player.css'i **HEAD** tagları arasında, font aweome'den **SONRA** import edin.
- caylak_player.js'i body tagının kapanmasından hemen önce, **sayfanın en altında** import edin.
- Tüm bu adımlardan sonra artık tek yapmanız gereken sayfanızda video oynatacağınız herhangi bir div oluşturmak.
- Örneğin sayfanızın herhangi bir yerinde ister class ister id içeren bir div oluşturun.

`<div id="benimVideom"></div>`

- Div'in içerisine hiçbir şey yazmanız gerekmiyor.
- Şimdi sayfanın en altına, caylak_player.js'i import ettiğiniz kısıma inin. Import satırının **ALTINA** yeni bir script tagı açın.
- İçerisine CaylakPlayer'in kendine özgü kodlarını girin.

`
new caylakPlayer({
denSonra:'#benimVideom',
video:'video.mp4',
renk:'kirmizi',
logo:'https://resmim.net/f/CND4iZ.png',
genislik:720,
yukseklik:480
});`

- denSonra'dan sonra videonuz için açmış olduğunuz divi tanıtın. örn #benimVideom yada .videoIcerik vs.
- (İSTEDİĞİNİZ KADAR DİV OLUŞTURUP İSTEDİĞİNİZ KADAR PLAYER AÇABİLİRSİNİZ, HEPSİNİ AYRI AYRI YAPMANIZ GEREKLİ, TEK YAPMANIZ GEREKEN HER VİDEO ALANI İÇİN TEKRAR BİR CAYLAKPLAYER OLUŞTURMAK SCRİPT İÇERİSİNDE, HEPSİNİN ÖZELLİKLERİ BİRBİRİNDEN FARKLI OLABİLİR)
- video kısmına videonuzun bağlantısını girin, örneğin example.com/video.mp4, aynı klasörde olan videolar için direk adını ve uzantısını girmeniz (film.mp4) yeterlidir.
- renk kısmında türkçe olarak seçebileceğiniz 7 renk şeması bulunuyor (kırmızı,mavi,pembe,mor,yesil,deri,beyaz). İstediğinizi kullanabilirsiniz, eğer hiçbir değer girmezseniz otomatik olarak turuncu şema kullanılır.
- logo kısmında player'in sağ altında görünecek logonun adresini verin. logo otomatik olarak siyah-beyaz filtreden geçerek player'e yerleşecektir.
- genişlik ve yükseklik kısımları opsiyoneldir. Eğer video için açmış olduğunuz div'e css ile herhangi bir boyut verdiyseniz, bu kısımları doldurmanız gerekmez. caylakPlayer otomatik olarak divi kaplar, ama divin içinde ayrı bir boyutlandırma istiyorsanız genislik ve yükseklik değerlerini sadece sayı olarak girebilirsiniz. PX olarak player'a yansıyacaktır.

