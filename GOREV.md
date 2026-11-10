# PROJE GÖREVİ — CLASSROOM

## Öğrenci Not ve Başarı Takip Sistemi

Bu projede bir eğitmenin sınıfındaki öğrencileri değerlendirebildiği mini bir başarı paneli geliştireceksin. HTML ve CSS arayüzü hazır. JavaScript dosyasında bilerek bırakılmış hatalar bulunuyor.

**Kural:** Hataları tek tek bul. Dosyanın tamamını silip baştan yazma. Her düzeltmeden sonra sayfayı yenile, Console'u kontrol et ve ilgili özelliği yeniden dene.

## Başlamadan önce

1. ZIP'i çıkar ve klasörü VS Code ile aç.
2. `index.html` dosyasını Live Server ile çalıştır.
3. Chrome Developer Tools → Console ekranını aç.
4. Hiçbir kodu değiştirmeden sayfayı incele; bozuk özellikleri not al.
5. `GOREV-KOD-OKUMA.md` sorularını cevapla.

## Uygulamanın gereksinimleri

- Örnek öğrencilerin tamamı listelenmeli.
- Vize %40, final %60 ağırlıkla hesaplanmalı.
- Harf notu ve geçme durumu doğru belirlenmeli.
- Sınıf ortalaması, başarılı öğrenci sayısı ve başarı oranı hesaplanmalı.
- Öğrenci ekleme formu boş isim veya geçersiz notları kabul etmemeli.
- Notlar 0–100 arasında olmalı.
- Tek kelimelik isim girildiğinde uygulama hata vermemeli.
- Öğrenci ID'leri benzersiz olmalı.
- Başarı dağılımı doğru gösterilmeli.
- Liste boşsa NaN / Infinity görünmemeli.

## İş kuralları

- Vize: %40
- Final: %60
- Geçme notu: 50
- 90–100: AA | 85–89: BA | 75–84: BB | 65–74: CB | 50–64: CC | 0–49: FF
- Ortalama = (Vize × 0.40) + (Final × 0.60)

## 3. Faz — Koşullar, döngüler ve algoritma

- `getLetterGrade()` koşullarını incele.
- `getStatus()` fonksiyonunu farklı ortalamalarla test et.
- `renderStudents()` döngüsünü incele.
- `filter()` ve `reduce()` kullanımını analiz et.
- 0, 100, sınır notları, boş liste gibi edge case'leri dene.
- Console ve breakpoint kullanarak en az bir hatayı takip et.

## 4. Faz — Fonksiyonlar, scope ve closure

- Fonksiyonların parametre ve return değerlerini takip et.
- `createIdGenerator()` fonksiyonunu incele.
- `currentId` değişkeninin neden dışarıdan erişilemediğini açıkla.
- Form event listener içindeki callback'i analiz et.
- `validateStudent()` fonksiyonunun hata mesajını nasıl döndürdüğünü anla.

## Test senaryoları

| Test               | Beklenen                |
| ------------------ | ----------------------- |
| Sayfayı aç         | 4 örnek öğrenci görünür |
| Ada Demir          | 82.8 / BB / Başarılı    |
| Mert Kaya          | 45.6 / FF / Başarısız   |
| Ece Yılmaz         | 92.8 / AA / Başarılı    |
| Can Arslan         | 57.2 / CC / Başarılı    |
| Boş isim           | Uyarı, kayıt yok        |
| Bir not alanı boş  | Uyarı, kayıt yok        |
| 120 notu           | Uyarı, kayıt yok        |
| 0 ve 100           | Geçerli not             |
| Tek kelimelik isim | Hata vermeden kaydolur  |
| İki öğrenci ekle   | İki farklı ID           |
| Liste boş          | NaN / Infinity yok      |

## Bonus görevler

1. Öğrenci satırına silme butonu ekle.
2. Öğrencileri ortalamaya göre sırala.
3. Öğrenci adına göre arama ekle.
4. En yüksek ve en düşük ortalamayı göster.
5. Başarılı / başarısız öğrencileri filtrele.

## Teslim

- Düzeltilmiş proje dosyaları
- Cevaplanmış `GOREV-KOD-OKUMA.md`
- GitHub repo bağlantısı
- Çalışan panelin ekran görüntüsü
- En az 3 hata düzeltmesinin nedenini açıklayan kısa not

**Unutma:** Kodun çalışması tek başına yeterli değil. Yaptığın düzeltmeyi neden yaptığını kendi cümlelerinle anlatabilmelisin.
