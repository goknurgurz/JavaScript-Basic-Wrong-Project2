# KOD OKUMA DOSYASI — CLASSROOM

## Önce cevapla, sonra kodu düzelt

Cevapları kendi cümlelerinle yaz. Bu dosyayı JavaScript dosyasını düzeltmeden önce doldur.

## 1. Genel yapı

1. `students` dizisi ne tutuyor?
2. `PASSING_GRADE`, `MIDTERM_WEIGHT` ve `FINAL_WEIGHT` neden `const`?
3. `querySelector()` ne yapıyor?
4. `refreshDashboard()` neden üç fonksiyon çağırıyor?
5. `renderStudents()` görevi nedir?

## 2. Koşullar ve algoritma — 3. Faz

6. `getLetterGrade()` hangi not aralıklarını kontrol ediyor?
7. `if`, `else if`, `else` farkı nedir?
8. `getStatus()` hangi durumda başarılı döndürüyor?
9. `validateStudent()` içinde neden birden fazla kontrol var?
10. Bir notun 0–100 arasında olduğunu nasıl kontrol edersin?
11. `for` döngüsü dizi elemanlarını nasıl geziyor?
12. Döngünün `students.length` kadar değil de bir fazla çalışması neye yol açar?
13. `filter()` ve `reduce()` ne yapar, burada nerede kullanılmış?
14. Hiç öğrenci yoksa ortalama hesabında ne sorun çıkabilir?
15. Edge case nedir? Bu projeden iki örnek ver.

## 3. Fonksiyonlar, scope ve closure — 4. Faz

16. `calculateAverage()` parametreleri nedir, ne döndürür?
17. Parametre ve argüman farkı nedir?
18. `return` yazılmazsa fonksiyon ne döndürür?
19. `getInitials()` hangi işlemi yapıyor?
20. `createIdGenerator()` içindeki `currentId` değişkenine dışarıdan erişilebilir mi? Neden?
21. Closure nedir? Bu projedeki sayaçla açıkla.
22. `generateStudentId` neden bir fonksiyon olarak saklanıyor?
23. Form `submit` event listener'ının görevi nedir?
24. `event.preventDefault()` neden kullanılır?
25. `validateStudent()` neden hata metnini `return` ediyor?

## 4. Hata avı

Her satır için: Sorun nerede? Neden hatalı? Nasıl düzelttin?
| No | İncelenecek bölüm | Açıklaman |
|---|---|---|
| 1 | `createIdGenerator()` | |
| 2 | `getInitials()` | |
| 3 | `renderStudents()` döngüsü | |
| 4 | `calculateClassStats()` | |
| 5 | Formdan alınan notlar | |
| 6 | Öğrenci nesnesine eklenen notlar | |
| 7 | Boş öğrenci listesi | |

## 5. Test sonuçların

| Deneme             | Beklenen            | Gerçek sonuç |
| ------------------ | ------------------- | ------------ |
| 49 ortalama        | FF / Başarısız      |              |
| 50 ortalama        | CC / Başarılı       |              |
| 65 ortalama        | CB                  |              |
| 85 ortalama        | BA                  |              |
| 90 ortalama        | AA                  |              |
| Boş isim           | Uyarı               |              |
| Tek kelimelik isim | Baş harfler görünür |              |
| Boş liste          | NaN görünmez        |              |

## 6. Değerlendirme

26. En zorlandığın hata hangisiydi?
27. Closure bu projede ne işe yarıyor?
28. Hangi fonksiyonu daha küçük parçalara ayırırdın?
29. Console veya breakpoint ile hangi hatayı buldun?
30. Bonus görevlerden hangisini yaptın?
