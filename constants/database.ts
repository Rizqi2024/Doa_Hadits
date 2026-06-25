export interface DoaItem {
  id: string;
  title: string;
  category: 'harian' | 'shalat' | 'bepergian' | 'perlindungan';
  arab: string;
  latin: string;
  translation: string;
  reference?: string;
  icon: string;
  audioUrl?: string;
}

export interface HaditsItem {
  id: string;
  title: string;
  category: 'arbain' | 'pilihan';
  arab: string;
  latin: string;
  translation: string;
  reference: string;
  icon: string;
  audioUrl?: string;
}

export const DOA_DATA: DoaItem[] = [
  {
    id: 'doa-sebelum-tidur',
    title: 'Doa Sebelum Tidur',
    category: 'harian',
    arab: 'بِاسْمِكَ اللَّهُمَّ أَحْيَا وَأَمُوتُ',
    latin: 'Bismika allahumma ahya wa amut.',
    translation: 'Dengan nama-Mu ya Allah, aku hidup dan aku mati.',
    reference: 'H.R. Bukhari & Muslim',
    icon: 'moon',
    audioUrl: 'https://islamic-audio.example.com/doa/sebelum_tidur.mp3'
  },
  {
    id: 'doa-bangun-tidur',
    title: 'Doa Bangun Tidur',
    category: 'harian',
    arab: 'الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ',
    latin: "Alhamdu lillahil-ladzi ahyana ba'da ma amatana wa ilaihin-nusyur.",
    translation: 'Segala puji bagi Allah yang telah menghidupkan kami kembali setelah mematikan kami, dan hanya kepada-Nya kami kembali.',
    reference: 'H.R. Bukhari',
    icon: 'sunny',
    audioUrl: 'https://islamic-audio.example.com/doa/bangun_tidur.mp3'
  },
  {
    id: 'doa-sebelum-makan',
    title: 'Doa Sebelum Makan',
    category: 'harian',
    arab: 'اللَّهُمَّ بَارِكْ لَنَا فِيمَا رَزَقْتَنَا وَقِنَا عَذَابَ النَّارِ',
    latin: "Allahumma baarik lanaa fiimaa rozaqtanaa wa qinaa 'adzaaban naar.",
    translation: 'Ya Allah, berkahilah rezeki yang telah Engkau berikan kepada kami dan peliharalah kami dari siksa neraka.',
    reference: 'H.R. Ibnu Sunni',
    icon: 'restaurant',
    audioUrl: 'https://islamic-audio.example.com/doa/sebelum_makan.mp3'
  },
  {
    id: 'doa-sesudah-makan',
    title: 'Doa Sesudah Makan',
    category: 'harian',
    arab: 'الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مُسْلِمِينَ',
    latin: 'Alhamdu lillahil-ladzi ath\'amanaa wa saqaanaa wa ja\'alanaa muslimiin.',
    translation: 'Segala puji bagi Allah yang telah memberi kami makan dan minum, serta menjadikan kami termasuk golongan orang-orang muslim.',
    reference: 'H.R. Abu Dawud & Tirmidzi',
    icon: 'water',
    audioUrl: 'https://islamic-audio.example.com/doa/sesudah_makan.mp3'
  },
  {
    id: 'doa-masuk-kamar-mandi',
    title: 'Doa Masuk Kamar Mandi',
    category: 'harian',
    arab: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ',
    latin: 'Allahumma inni a\'udzu bika minal khubutsi wal khabaa\'its.',
    translation: 'Ya Allah, sesungguhnya aku berlindung kepada-Mu dari godaan setan laki-laki dan setan perempuan.',
    reference: 'H.R. Bukhari & Muslim',
    icon: 'log-in',
    audioUrl: 'https://islamic-audio.example.com/doa/masuk_wc.mp3'
  },
  {
    id: 'doa-keluar-kamar-mandi',
    title: 'Doa Keluar Kamar Mandi',
    category: 'harian',
    arab: 'غُفْرَانَكَ الْحَمْدُ لِلَّهِ الَّذِي أَذْهَبَ عَنِّي الْأَذَى وَعَافَانِي',
    latin: 'Ghufranakal hamdu lillahil-ladzi adzhaba \'annil adza wa \'aafanii.',
    translation: 'Aku memohon ampunan-Mu. Segala puji bagi Allah yang telah menghilangkan penyakit dari tubuhku dan menyehatkanku.',
    reference: 'H.R. Abu Dawud',
    icon: 'log-out',
    audioUrl: 'https://islamic-audio.example.com/doa/keluar_wc.mp3'
  },
  {
    id: 'doa-kedua-orang-tua',
    title: 'Doa Kedua Orang Tua',
    category: 'harian',
    arab: 'رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ وَارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا',
    latin: 'Rabbighfir lii waliwaalidayya warhamhumaa kamaa rabbayaanii shaghiiraa.',
    translation: 'Ya Tuhanku, ampunilah dosaku dan dosa kedua orang tuaku, serta sayangilah mereka sebagaimana mereka telah mendidikku di waktu kecil.',
    reference: 'Q.S. Al-Isra\': 24',
    icon: 'people',
    audioUrl: 'https://islamic-audio.example.com/doa/orang_tua.mp3'
  },
  {
    id: 'doa-kebaikan-dunia-akhirat',
    title: 'Doa Sapu Jagad (Kebaikan Dunia Akhirat)',
    category: 'harian',
    arab: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',
    latin: 'Rabbana aatina fid-dunya hasanatan wa fil-akhirati hasanatan wa qina \'adzaban-naar.',
    translation: 'Ya Tuhan kami, berilah kami kebaikan di dunia dan kebaikan di akhirat, dan lindungilah kami dari siksa neraka.',
    reference: 'Q.S. Al-Baqarah: 201',
    icon: 'globe-outline',
    audioUrl: 'https://islamic-audio.example.com/doa/sapu_jagad.mp3'
  },
  {
    id: 'doa-iftitah',
    title: 'Doa Iftitah',
    category: 'shalat',
    arab: 'اللَّهُمَّ بَاعِدْ بَيْنِي وَبَيْنَ خَطَايَايَ كَمَا بَاعَدْتَ بَيْنَ الْمَشْرِقِ وَالْمَغْرِبِ',
    latin: 'Allahumma baa\'id baini wa baina khathaayaaya kamaa baa\'adta bainal masyriqi wal maghrib.',
    translation: 'Ya Allah, jauhkanlah antara aku dan kesalahan-kesalahanku, sebagaimana Engkau menjauhkan antara timur dan barat.',
    reference: 'H.R. Bukhari & Muslim',
    icon: 'flame',
    audioUrl: 'https://islamic-audio.example.com/doa/iftitah.mp3'
  },
  {
    id: 'doa-ruku',
    title: 'Doa Ruku\'',
    category: 'shalat',
    arab: 'سُبْحَانَ رَبِّيَ الْعَظِيمِ وَبِحَمْدِهِ',
    latin: 'Subhaana rabbiyal \'adhiimi wa bihamdih.',
    translation: 'Maha Suci Tuhanku Yang Maha Agung dan segala puji bagi-Nya (3x).',
    reference: 'H.R. Abu Dawud & Ahmad',
    icon: 'body',
    audioUrl: 'https://islamic-audio.example.com/doa/ruku.mp3'
  },
  {
    id: 'doa-sujud',
    title: 'Doa Sujud',
    category: 'shalat',
    arab: 'سُبْحَانَ رَبِّيَ الْأَعْلَى وَبِحَمْدِهِ',
    latin: 'Subhaana rabbiyal \'a\'laa wa bihamdih.',
    translation: 'Maha Suci Tuhanku Yang Maha Tinggi dan segala puji bagi-Nya (3x).',
    reference: 'H.R. Abu Dawud & Ahmad',
    icon: 'fitness',
    audioUrl: 'https://islamic-audio.example.com/doa/sujud.mp3'
  },
  {
    id: 'doa-duduk-antara-dua-sujud',
    title: 'Doa Diantara Dua Sujud',
    category: 'shalat',
    arab: 'رَبِّ اغْفِرْ لِي وَارْحَمْنِي وَاجْبُرْنِي وَارْفَعْنِي وَارْزُقْنِي وَاهْدِنِي وَعَافِنِي وَاعْفُ عَنِّي',
    latin: 'Rabbighfir lii warhamnii wajburnii warfa\'nii warzuqnii wahdinii wa \'aafinii wa\'fu \'annii.',
    translation: 'Ya Tuhanku ampunilah dosaku, belas kasihanilah aku, cukupkanlah segala kekuranganku, tinggikanlah derajatku, berilah rezeki kepadaku, berilah aku petunjuk, berilah kesehatan kepadaku dan ampunilah aku.',
    reference: 'H.R. Tirmidzi & Ibnu Majah',
    icon: 'hourglass',
    audioUrl: 'https://islamic-audio.example.com/doa/duduk_sujud.mp3'
  },
  {
    id: 'doa-qunut-subuh',
    title: 'Doa Qunut Subuh',
    category: 'shalat',
    arab: 'اللَّهُمَّ اهْدِنِي فِيمَنْ هَدَيْتَ وَعَافِنِي فِيمَنْ عَافَيْتَ وَتَوَلَّنِي فِيمَنْ تَوَلَّيْتَ وَبَارِكْ لِي فِيمَا أَعْطَيْتَ',
    latin: 'Allahummahdinii fiiman hadait, wa \'aafinii fiiman \'aafait, wa tawallanii fiiman tawallait, wa baarik lii fiimaa a\'thait...',
    translation: 'Ya Allah, berilah aku petunjuk di antara orang-orang yang Engkau beri petunjuk, berilah aku keselamatan di antara orang-orang yang Engkau beri keselamatan, peliha-ralah aku di antara orang-orang yang Engkau pelihara...',
    reference: 'H.R. Abu Dawud & Tirmidzi',
    icon: 'hand-left',
    audioUrl: 'https://islamic-audio.example.com/doa/qunut.mp3'
  },
  {
    id: 'doa-naik-kendaraan',
    title: 'Doa Naik Kendaraan',
    category: 'bepergian',
    arab: 'سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَٰذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَىٰ رَبِّنَا لَمُنقَلِبُونَ',
    latin: 'Subhaanal-ladzii sakhkhara lanaa haadzaa wa maa kunnaa lahu muqriniin, wa innaa ilaa rabbinaa lamunqalibuun.',
    translation: 'Maha Suci Allah yang telah menundukkan semua ini bagi kami padahal kami sebelumnya tidak mampu menguasainya, dan sesungguhnya kami akan kembali kepada Tuhan kami.',
    reference: 'Q.S. Az-Zukhruf: 13-14',
    icon: 'car',
    audioUrl: 'https://islamic-audio.example.com/doa/naik_kendaraan.mp3'
  },
  {
    id: 'doa-keluar-rumah',
    title: 'Doa Keluar Rumah (Tawakkal)',
    category: 'bepergian',
    arab: 'بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ',
    latin: 'Bismillaahi tawakkaltu \'alallaahi, laa haula wa laa quwwata illaa billaah.',
    translation: 'Dengan nama Allah, aku bertawakal kepada Allah. Tiada daya dan kekuatan kecuali dengan pertolongan Allah.',
    reference: 'H.R. Abu Dawud & Tirmidzi',
    icon: 'home',
    audioUrl: 'https://islamic-audio.example.com/doa/keluar_rumah.mp3'
  },
  {
    id: 'doa-masuk-masjid',
    title: 'Doa Masuk Masjid',
    category: 'bepergian',
    arab: 'اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ',
    latin: 'Allahummaftah lii abwaaba rahmatik.',
    translation: 'Ya Allah, bukakanlah bagiku pintu-pintu rahmat-Mu.',
    reference: 'H.R. Muslim',
    icon: 'business',
    audioUrl: 'https://islamic-audio.example.com/doa/masuk_masjid.mp3'
  },
  {
    id: 'doa-keluar-masjid',
    title: 'Doa Keluar Masjid',
    category: 'bepergian',
    arab: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ',
    latin: 'Allahumma inni as\'aluka min fadhlika.',
    translation: 'Ya Allah, sesungguhnya aku memohon keutamaan dari-Mu.',
    reference: 'H.R. Muslim',
    icon: 'exit',
    audioUrl: 'https://islamic-audio.example.com/doa/keluar_masjid.mp3'
  },
  {
    id: 'doa-perlindungan-dari-setan',
    title: 'Doa Mohon Perlindungan dari Setan',
    category: 'perlindungan',
    arab: 'أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ',
    latin: 'A\'udzu billahi minasy-syaithanir-rajiim.',
    translation: 'Aku berlindung kepada Allah dari godaan setan yang terkutuk.',
    reference: 'Q.S. An-Nahl: 98',
    icon: 'shield-half',
    audioUrl: 'https://islamic-audio.example.com/doa/taawudz.mp3'
  },
  {
    id: 'doa-perlindungan-dari-keburukan',
    title: 'Doa Perlindungan dari Penyakit & Keburukan',
    category: 'perlindungan',
    arab: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْبَرَصِ وَالْجُنُونِ وَالْجُذَامِ وَمِنْ سَيِّئِ الْأَسْقَامِ',
    latin: 'Allahumma inni a\'udzu bika minal barashi wal junuuni wal judzaami wa min sayyi\'il asqaam.',
    translation: 'Ya Allah, sesungguhnya aku berlindung kepada-Mu dari penyakit sopak (kusta), gila, lepra, dan dari segala penyakit yang buruk.',
    reference: 'H.R. Abu Dawud',
    icon: 'heart-half',
    audioUrl: 'https://islamic-audio.example.com/doa/penyakit.mp3'
  },
  {
    id: 'doa-perlindungan-dari-hutang-kesedihan',
    title: 'Doa Perlindungan dari Hutang & Kesedihan',
    category: 'perlindungan',
    arab: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ وَأَعُوذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ وَأَعُوذُ بِكَ مِنَ الْجُبْنِ وَالْبُخْلِ وَأَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ وَقَهْرِ الرِّجَالِ',
    latin: 'Allahumma inni a\'udzu bika minal hammi wal hazan, wa a\'udzu bika minal \'ajzi wal kasal, wa a\'udzu bika minal jubni wal bukhl, wa a\'udzu bika min ghalabatid-daini wa qahrir-rijaal.',
    translation: 'Ya Allah, sesungguhnya aku berlindung kepada-Mu dari keluh kesah dan kesedihan, lemah kemauan dan kemalasan, sifat pengecut dan kikir, serta lilitan hutang dan penindasan orang.',
    reference: 'H.R. Abu Dawud',
    icon: 'wallet-outline',
    audioUrl: 'https://islamic-audio.example.com/doa/hutang.mp3'
  }
];

export const HADITS_DATA: HaditsItem[] = [
  {
    id: 'hadits-niat',
    title: 'Hadits 1: Niat dan Keikhlasan',
    category: 'arbain',
    arab: 'إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى',
    latin: 'Innamal a\'maalu bin-niyyaat, wa innamaa likullimri-in maa nawaa.',
    translation: 'Sesungguhnya segala amal perbuatan itu tergantung pada niatnya, dan sesungguhnya setiap orang akan mendapatkan apa yang ia niatkan.',
    reference: 'H.R. Bukhari (No. 1) & Muslim (No. 1907)',
    icon: 'heart',
    audioUrl: 'https://islamic-audio.example.com/hadits/arbain_01.mp3'
  },
  {
    id: 'hadits-rukun-islam',
    title: 'Hadits 3: Rukun Islam',
    category: 'arbain',
    arab: 'بُنِيَ الإِسْلاَمُ عَلَى خَمْسٍ: شَهَادَةِ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللَّهِ، وَإِقَامِ الصَّلاَةِ، وَإِيتَاءِ الزَّكَاةِ، وَالْحَجِّ، وَصَوْمِ رَمَضَانَ',
    latin: 'Buniyal islaamu \'alaa khamsin: syahaadati an laa ilaaha illallaah wa anna Muhammadan rasuulullaah, wa iqaamish-shalaah, wa iitaa\'iz-zakaah, wal hajj, wa shaumi ramadhaan.',
    translation: 'Islam dibangun di atas lima perkara: bersaksi bahwa tiada sesembahan yang berhak disembah selain Allah dan Muhammad utusan Allah, mendirikan shalat, menunaikan zakat, haji ke Baitullah, dan puasa Ramadhan.',
    reference: 'H.R. Bukhari (No. 8) & Muslim (No. 16)',
    icon: 'cube',
    audioUrl: 'https://islamic-audio.example.com/hadits/arbain_03.mp3'
  },
  {
    id: 'hadits-larangan-bidah',
    title: 'Hadits 5: Larangan Perkara Baru (Bid\'ah)',
    category: 'arbain',
    arab: 'مَنْ أَحْدَثَ فِي أَمْرِنَا هَذَا مَا لَيْسَ فِيهِ فَهُوَ رَدٌّ',
    latin: 'Man ahdatsa fii amrinaa haadzaa maa laisa fiihi fahuwa raddun.',
    translation: 'Barangsiapa membuat suatu perkara baru dalam urusan kami (agama) ini yang tidak ada asal-usulnya, maka perkara tersebut tertolak.',
    reference: 'H.R. Bukhari (No. 2697) & Muslim (No. 1718)',
    icon: 'alert-circle',
    audioUrl: 'https://islamic-audio.example.com/hadits/arbain_05.mp3'
  },
  {
    id: 'hadits-syubhat',
    title: 'Hadits 6: Menjauhi Perkara Syubhat',
    category: 'arbain',
    arab: 'إِنَّ الْحَلَالَ بَيِّنٌ وَإِنَّ الْحَرَامَ بَيِّنٌ وَبَيْنَهُمَا مُشْتَبِهَاتٌ لَا يَعْلَمُهُنَّ كَثِيرٌ مِنَ النَّاسِ',
    latin: 'Innal halaala bayyinun wa innal haraama bayyinun wa bainahumaa musytabihaatun laa ya\'lamuhunna katsiirun minan-naas.',
    translation: 'Sesungguhnya yang halal itu jelas dan yang haram itu jelas. Di antara keduanya terdapat perkara-perkara syubhat (samar) yang tidak diketahui oleh kebanyakan manusia.',
    reference: 'H.R. Bukhari (No. 52) & Muslim (No. 1599)',
    icon: 'help-circle',
    audioUrl: 'https://islamic-audio.example.com/hadits/arbain_06.mp3'
  },
  {
    id: 'hadits-nasihat',
    title: 'Hadits 7: Agama Adalah Nasihat',
    category: 'arbain',
    arab: 'الدِّينُ النَّصِيحَةُ. قُلْنَا: لِمَنْ؟ قَالَ: لِلَّهِ وَلِكِتَابِهِ وَلِرَسُولِهِ وَلِأَئِمَّةِ الْمُسْلِمِينَ وَعَامَّتِهِمْ',
    latin: 'Addiinu an-nashiihah. Qulnaa: Liman? Qaala: Lillaahi wa likitaabihi wa lirasuulihi wa li-aimmatil muslimiina wa \'aammatihim.',
    translation: 'Agama adalah nasihat. Kami bertanya: Untuk siapa? Rasulullah menjawab: Untuk Allah, Kitab-Nya, Rasul-Nya, para pemimpin kaum muslimin, dan seluruh kaum muslimin.',
    reference: 'H.R. Muslim (No. 55)',
    icon: 'chatbubble',
    audioUrl: 'https://islamic-audio.example.com/hadits/arbain_07.mp3'
  },
  {
    id: 'hadits-kemampuan',
    title: 'Hadits 9: Melaksanakan Perintah Sesuai Kemampuan',
    category: 'arbain',
    arab: 'إِذَا نَهَيْتُكُمْ عَنْ شَيْءٍ فَاجْتَنِبُوهُ وَإِذَا أَمَرْتُكُمْ بِأَمْرٍ فَأْتُوا مِنْهُ مَا اسْتَطَعْتُمْ',
    latin: 'Idzaa nahaitukum \'an syai-in fajtanibuuhu wa idzaa amartukum bi-amrin fa\'tuu minhu mastatha\'tum.',
    translation: 'Apabila aku melarang kalian dari sesuatu, jauhilah. Dan apabila aku memerintahkan kalian akan suatu perkara, laksanakanlah semampu kalian.',
    reference: 'H.R. Bukhari (No. 7288) & Muslim (No. 1337)',
    icon: 'flash',
    audioUrl: 'https://islamic-audio.example.com/hadits/arbain_09.mp3'
  },
  {
    id: 'hadits-baik-halal',
    title: 'Hadits 10: Makan dari yang Halal & Baik',
    category: 'arbain',
    arab: 'إِنَّ اللَّهَ طَيِّبٌ لَا يَقْبَلُ إِلَّا طَيِّبًا',
    latin: 'Innallaaha thayyibun laa yaqbalu illaa thayyiban.',
    translation: 'Sesungguhnya Allah itu Maha Baik dan Dia tidak menerima kecuali sesuatu yang baik.',
    reference: 'H.R. Muslim (No. 1015)',
    icon: 'leaf',
    audioUrl: 'https://islamic-audio.example.com/hadits/arbain_10.mp3'
  },
  {
    id: 'hadits-ragu',
    title: 'Hadits 11: Tinggalkan yang Meragukan',
    category: 'arbain',
    arab: 'دَعْ مَا يَرِيبُكَ إِلَى مَا لَا يَرِيبُكَ',
    latin: 'Da\' maa yariibuka ilaa maa laa yariibuka.',
    translation: 'Tinggalkanlah apa yang meragukanmu kepada apa yang tidak meragukanmu.',
    reference: 'H.R. Tirmidzi (No. 2518) & An-Nasa\'i (No. 5711)',
    icon: 'shield',
    audioUrl: 'https://islamic-audio.example.com/hadits/arbain_11.mp3'
  },
  {
    id: 'hadits-manfaat',
    title: 'Hadits 12: Meninggalkan yang Tidak Bermanfaat',
    category: 'arbain',
    arab: 'مِنْ حُسْنِ إِسْلَامِ الْمَرْءِ تَرْكُهُ مَا لَا يَعْنِيهِ',
    latin: 'Min husni islaamil mar-i tarkuhu maa laa ya\'niihi.',
    translation: 'Di antara tanda kebaikan Islam seseorang adalah meninggalkan hal yang tidak bermanfaat baginya.',
    reference: 'H.R. Tirmidzi (No. 2317) & Ibnu Majah (No. 3976)',
    icon: 'checkmark-circle-outline',
    audioUrl: 'https://islamic-audio.example.com/hadits/arbain_12.mp3'
  },
  {
    id: 'hadits-mencintai-saudara',
    title: 'Hadits 13: Mencintai Saudara',
    category: 'arbain',
    arab: 'لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ',
    latin: 'Laa yu\'minu ahadukum hattaa yuhibba li-akhiihi maa yuhibbu linafsih.',
    translation: 'Tidak beriman salah seorang di antara kalian hingga ia mencintai saudaranya sebagaimana ia mencintai dirinya sendiri.',
    reference: 'H.R. Bukhari (No. 13) & Muslim (No. 45)',
    icon: 'people-circle-outline',
    audioUrl: 'https://islamic-audio.example.com/hadits/arbain_13.mp3'
  },
  {
    id: 'hadits-berkata-baik-atau-diam',
    title: 'Hadits 15: Berkata Baik atau Diam',
    category: 'arbain',
    arab: 'مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ',
    latin: 'Man kaana yu\'minu billaahi wal yaumil-aakhiri falyaqul khairan aw liyashmut.',
    translation: 'Barangsiapa beriman kepada Allah dan hari akhir, hendaklah ia berkata yang baik atau diam.',
    reference: 'H.R. Bukhari (No. 6018) & Muslim (No. 47)',
    icon: 'mic-off',
    audioUrl: 'https://islamic-audio.example.com/hadits/arbain_15.mp3'
  },
  {
    id: 'hadits-menuntut-ilmu',
    title: 'Hadits Keutamaan Menuntut Ilmu',
    category: 'pilihan',
    arab: 'طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ',
    latin: 'Thalabul \'ilmi fariidhatun \'alaa kulli muslimin.',
    translation: 'Menuntut ilmu itu wajib bagi setiap muslim.',
    reference: 'H.R. Ibnu Majah (No. 224)',
    icon: 'school',
    audioUrl: 'https://islamic-audio.example.com/hadits/ilmu.mp3'
  },
  {
    id: 'hadits-kebersihan',
    title: 'Hadits Kebersihan',
    category: 'pilihan',
    arab: 'الطَّهُورُ شَطْرُ الْإِيمَانِ',
    latin: 'Ath-thahuuru syatrul iimaan.',
    translation: 'Kesucian (kebersihan) itu adalah sebagian dari iman.',
    reference: 'H.R. Muslim (No. 223)',
    icon: 'water-outline',
    audioUrl: 'https://islamic-audio.example.com/hadits/kebersihan.mp3'
  },
  {
    id: 'hadits-kasih-sayang',
    title: 'Hadits Kasih Sayang',
    category: 'pilihan',
    arab: 'مَنْ لَا يَرْحَمْ لَا يُرْحَمْ',
    latin: 'Man laa yarham laa yurham.',
    translation: 'Barangsiapa yang tidak menyayangi, niscaya tidak akan disayangi.',
    reference: 'H.R. Bukhari (No. 5997) & Muslim (No. 2318)',
    icon: 'heart-circle',
    audioUrl: 'https://islamic-audio.example.com/hadits/kasih_sayang.mp3'
  },
  {
    id: 'hadits-senyum',
    title: 'Hadits Senyum adalah Sedekah',
    category: 'pilihan',
    arab: 'تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ لَكَ صَدَقَةٌ',
    latin: 'Tabassumuka fii wajhi akhiika laka shadaqah.',
    translation: 'Senyummu di hadapan saudaramu adalah sedekah bagimu.',
    reference: 'H.R. Tirmidzi (No. 1956)',
    icon: 'happy-outline',
    audioUrl: 'https://islamic-audio.example.com/hadits/senyum.mp3'
  },
  {
    id: 'hadits-marah',
    title: 'Hadits Larangan Marah',
    category: 'pilihan',
    arab: 'لَا تَغْضَبْ وَلَكَ الْجَنَّةُ',
    latin: 'Laa taghdhab walakal jannah.',
    translation: 'Janganlah kamu marah, maka bagimu surga.',
    reference: 'H.R. Thabrani',
    icon: 'alert-circle-outline',
    audioUrl: 'https://islamic-audio.example.com/hadits/marah.mp3'
  }
];
