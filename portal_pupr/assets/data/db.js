// MENU NAVBAR
var db_menus = [
    {
        text: 'Beranda',
        url: '',
        has_dropdown: false
    },
    {
        text: 'Profil',
        url: '',
        has_dropdown: true,
        menu_items: [
            {
                text: 'Visi & Misi',
                url: '',
            },
            {
                text: 'Sejarah',
                url: '',
            },
            {
                text: 'Struktur Organisasi',
                url: '',
            },
            {
                text: 'Motto & Lambang',
                url: '',
            },
            {
                text: 'Informasi Pejabat',
                url: '',
            },
            {
                text: 'Profil Pejabat',
                url: '',
            },
            {
                text: 'Lokasi & Kontak',
                url: '',
            },
            {
                text: 'Improve',
                url: '',
            }
        ]
    },
    {
        text: 'Organisasi',
        url: '',
        has_dropdown: true,
        menu_items: [
            {
                text: 'Sekretariat Jenderal',
                url: '',
            },
            {
                text: 'Inspektorat Jenderal',
                url: '',
            },
            {
                text: 'Direktorat Jenderal Sumber Daya Air',
                url: '',
            },
            {
                text: 'Direktorat Jenderal Bina Marga',
                url: '',
            },
            {
                text: 'Direktorat Jenderal Cipta Karya',
                url: '',
            },
            {
                text: 'Direktorat Jenderal Penyediaan Perumahan',
                url: '',
            },
            {
                text: 'Direktorat Jenderal Bina Konstruksi',
                url: '',
            },
            {
                text: 'Direktorat Jenderal Pembiayaan Infrastruktur Pekerjaan Umum & Perumahan',
                url: '',
            },
            {
                text: 'Badan Pengembangan Infrastruktur Wilayah',
                url: '',
            },
            {
                text: 'Badan Penelitian & Pengembangan',
                url: '',
            },
            {
                text: 'Badan Pengembangan Sumber Daya Manusia',
                url: '',
            },
            {
                text: 'Badan Pengatur Jalan Tol',
                url: '',
            },
            {
                text: 'Badan Peningkatan Penyelenggaraan Sistem Penyediaan Air Minum',
                url: '',
            }
        ]
    },
    {
        text: 'Produk',
        url: '',
        has_dropdown: true,
        menu_items: [
            {
                text: 'Informasi Anggaran Kementerian PUPR',
                url: '',
            },
            {
                text: 'Renstra 2015-2019',
                url: '',
            },
            {
                text: 'Kebijakan / Pengaturan',
                url: '',
            },
            {
                text: 'Standard Nasional',
                url: '',
            },
            {
                text: 'e-Goverment Kementerian PUPR',
                url: '',
            }
        ]
    },
    {
        text: 'Informasi Publik',
        url: '',
        has_dropdown: true,
        menu_items: [
            {
                text: 'Profil PPID Kementerian PUPR',
                url: '',
            },
            {
                text: 'Dasar Hukum',
                url: '',
            },
            {
                text: 'Daftar Informasi Publik',
                url: '',
            },
            {
                text: 'Rencana Pengadaan',
                url: '',
            },
            {
                text: 'e-PPID',
                url: '',
            },
            {
                text: 'Permintaan Informasi',
                url: '',
            }
        ]
    },
    {
        text: 'Publikasi',
        url: '',
        has_dropdown: true,
        menu_items: [
            {
                text: 'Pengumuman',
                url: '',
            },
            {
                text: 'Guntingan Berita',
                url: '',
            },
            {
                text: 'Media Cetak PU',
                url: '',
            },
            {
                text: 'Glossary',
                url: '',
            }
        ]
    },
    {
        text: 'Berita',
        url: 'berita.html',
        has_dropdown: false,
    },
    {
        text: 'Kontak',
        url: '',
        has_dropdown: false,
    },
    {
        text: 'Galeri',
        url: '',
        has_dropdown: true,
        menu_items: [
            {
                text: 'Foto',
                url: '',
            },
            {
                text: 'Video',
                url: '',
            },
        ]
    },
    {
        text: 'Lainnya',
        section: 'others',
        has_dropdown: false,
    },
];

// NEWS HIGHLIGHT
var db_highlight_news = [
    {
        title: 'Pembangunan Underpass Bandara Yogyakarta Rampung 74,3%',
        link: '',
        image_url: 'https://pu.go.id//assets/images/content/WhatsApp_Image_2019-08-21_at_06_07_45.jpeg',
    },
    {
        title: 'Kementerian PUPR Revitalisasi TPA Regional Sarbagita Suwung Untuk Tingkatkan Pelayanan',
        link: '',
        image_url: 'https://pu.go.id//assets/images/content/WhatsApp_Image_2019-08-20_at_18_11_47.jpeg',
    },
    {
        title: 'Preservasi Ruas Jalan Ajibarang-Banjarnegara Gunakan Aspal Karet',
        link: '',
        image_url: 'https://pu.go.id/assets/images/content/WhatsApp_Image_2019-08-19_at_20_25_58.jpeg',
    },
];

// NEWS
var db_news = [
    {
        id: 1,
        title: 'Pembangunan Underpass Bandara Yogyakarta Rampung 74,3%',
        publish: 'Rabu, 21 Agustus 2019',
        seen: 122,
        image_url: 'https://pu.go.id//assets/images/content/WhatsApp_Image_2019-08-21_at_06_07_45.jpeg',
        content: `<div class="content">
            <p>Jakarta – Kementerian Pekerjaan Umum dan Perumahan Rakyat (PUPR) terus mempercepat penyelesaian pembangunan underpass Bandara Yogyakarta atau New Yogyakarta International Airport (NYIA) di Kabupaten Kulonprogo, Provinsi Daerah Istimewa Yogyakarta (DIY). Hingga pertengahan bulan Agustus 2019, progres konstruksi underpass sepanjang 1,3 km yang dibangun di bawah bandara tersebut mencapai 74,3% atau lebih cepat dari target yang direncanakan sebesar 63,9%.</p>
            <p>Menteri PUPR Basuki Hadimuljono mengatakan pembangunan underpass ini bertujuan agar akses Jalan Nasional Pantai Selatan (Pansela) Jawa yang menghubungkan Purwokerto dan Yogyakarta tetap terbuka karena pembangunan Bandara Kulonprogo memotong jalan Pansela yang lama.</p>
            <p>“Underpass ini merupakan underpass terpanjang, bagian dari Jalan Nasional Pansela Jawa. Dalam pembangunannya, faktor keamanan harus betul-betul diperhatikan,” kata Menteri Basuki beberapa waktu lalu.</p>
            <p>Pembangunan underpass dikerjakan oleh kontraktor PT Wijaya Karya dan PT MCM sejak tahun 2018 dan ditargetkan selesai tahun 2019. Pekerjaan konstruksi utama underpass melingkupi pembangunan struktur underpass, penggalian tanah, dan pembuatan drainase. Biaya pembangunannya bersumber dari Surat Berharga Syariah Negara (SBSN) senilai Rp 293,18 miliar.&nbsp;</p>
            <p>Underpass ini memiliki panjang keseluruhan 1,3 km yang terdiri dari konstruksi terowongan (slab tertutup) sepanjang 1.095 meter dan&nbsp; jalan pendekat arah timur dan barat masing-masing sepanjang 110 meter dan 100 meter. Underpass memiliki lebar 7,85 meter, clearence atas 5,2 meter dan samping 18,4 meter.</p>
            <p>Konstruksi underpass dilengkapi dengan fasilitas rumah pompa untuk mengantisipasi terjadinya genangan air saat turun hujan. Dinding underpass akan dihiasi ornamen dengan tema kearifan lokal seperti motif batik khas Yogyakarta untuk menambah nilai estetika.</p>
            <p>Dukungan Air Baku dan Pengendalian Banjir Bandara NYIA</p>
            <p>Dalam mendukung penyediaan air baku, Kementerian PUPR melalui Balai Besar Wilayah Sungai (BBWS) Serayu Opak, Direktorat Jenderal (Ditjen) SDA membangun Bendung Kamijoro yang terletak di antara perbatasan Kabupaten Kulon Progo dengan Kabupaten Bantul. Bendung dengan nilai konstruksi sebesar Rp 229 miliar telah rampung tahun 2018 dan menjadi sumber air baku ke Kawasan Perekonomian Terpadu Kabupaten Kulon Progo sebesar 500 liter per detik, termasuk untuk penyediaan air minum ke Bandara NYIA sebesar 200 liter/detik.</p>
            <p>Pemasangan jaringan pipa tranmisi telah mulai dikerjakan Kementerian PUPR pada tahun 2018 sepanjang 534 meter di Desa Tuksono Kecamatan Sentolo. Kemudian dilanjutkan pekerjaan untuk tahun 2019 yang mencakup pengadaan dan pemasangan pompa beserta asesorisnya serta pengadaan dan pemasangan genset. Anggaran pembangunannya sebesar Rp 20 miliar.</p>
            <p>Selain itu juga disiapkan pembangunan infrastruktur pengendalian banjir untuk Bandara NYIA. BBWS Serayu Opak Ditjen SDA tengah menyiapkan detail desain pengaman air rob dari Pantai Glagah. Kemudian pembangunan drainase di sekitar Bandara NYIA.&nbsp;</p>
            <p>Infarastruktur lainnya adalah pembangunan pengendalian banjir dari luapan Daerah Aliran Sungai Bogowonto dan Sungai Serang. Anggaran pembangunannya sebesar Rp 256,5 miliar dengan masing-masing sebesar Rp 205 miliar untuk Sungai Bogowonto dan sebesar Rp 51,5 miliar untuk Sungai Serang. Seluruh pembangunan fisik rencananya mulai dikerjakan pada tahun 2020. (Tri)</p>                        </div>`
    },
    {
        id: 2,
        title: 'Kementerian PUPR Revitalisasi TPA Regional Sarbagita Suwung Untuk Tingkatkan Pelayanan',
        publish: 'Rabu, 21 Agustus 2019',
        seen: 61,
        image_url: 'https://pu.go.id//assets/images/content/WhatsApp_Image_2019-08-20_at_18_11_47.jpeg',
        content: `<div class="content">
            <p>Denpasar - Kementerian Pekerjaan Umum dan Perumahan Rakyat (PUPR) merevitalisasi Tempat Pemrosesan Akhir (TPA) Regional Sarbagita Suwung yang melayani sampah yang berasal dari area Denpasar, Badung, Gianyar dan Tabanan. Revitalisasi dilakukan untuk meningkatkan umur layanan TPA tersebut, pembangunan ruang terbuka hijau pada lahan yang sudah penuh serta mendukung pembangunan Pembangkit Listrik Tenaga Sampah (PLTSa).</p>
            <p>Dari 32,4 hektare luas lahan TPA Sarbagita Suwung yang direvitalisasi, terbagi 22 hektare berupa dilakukan penutupan dan penataan area TPA yang telah penuh sampah dengan dibuat terasering, ditangkap gas methan yang ada, dialirkan lindinya dan dilakukan penghijauan menjadi ruang terbuka hijau, pembangunan 2 cell sanitary landfill baru seluas 5 hektare dan pematangan lahan seluas 5 hektare untuk lokasi PLTSa.</p>
            <p>Pembangunan 2 cell baru dengan teknologi sanitary landfill akan memperpanjang masa layanan TPA Sarbagita Suwung hingga tahun 2024. Metoda sanitary landfill membutuhkan disiplin yang tinggi dari pengelolanya.</p>
            <p>Menteri Basuki menyatakan bahwa sampah yang diproses nantinya juga bisa menjadi sumber energi listrik dengan akan dibangunnya PLTSa.</p>
            <p>“TPA&nbsp; Regional&nbsp; Sarbagita&nbsp; rata-rata saat ini daya tampungnya sudah hampir penuh. Revitalisasi sebagai peningkatan kapasitas tampung dan perbaikan infrastruktur pengolahan sampah agar kualitas lingkungan menjadi lebih baik,” ujar Menteri Basuki.</p>
            <p>Sementara untuk pembangunan PLTSa dilakukan melalui skema Kerjasama Pemerintah dan Badan Usaha (KPBU) dengan nilai investasi yang dibutuhkan mencapai USD 240 juta dengan potensi kapasitas listrik 15-20 MW. Pembangunan PLTSa mengacu pada Peraturan Presiden No. 35 tahun 2018 tentang Percepatan Pembangunan Instalasi Sampah Menjadi Energi Listrik Berbasis Teknologi Ramah Lingkungan.&nbsp;&nbsp;</p>
            <p>Direktur Jenderal Cipta Karya Danis H. Sumadilaga mengatakan keberadaan PLTSa nantinya akan sangat mendukung pengurangan sampah di TPA Suwung sehingga masa layanannya akan menjadi lebih panjang dan meningkatkan kualitas lingkungan. "Sekitar 1.300-1.500 ton perhari itu bisa langsung habis diolah menjadi energi listrik sebesar 20 Megawatt. Residu tetap ada meski sedikit, tidak sampai 10%. Disediakan lahan sekitar 1,5 hektar untuk menampung residu tersebut," kata Danis saat meninjau TPA Suwung di Bali, Selasa (20/8/2019).&nbsp;</p>
            <p>Revitalisasi ini termasuk pembangunan instalasi pengelolaan air limbahnya, sehingga lindi tersebut tidak mencemari lingkungan sekitar termasuk ke laut. Disamping itu pengelolaan sampah yang baik di TPA Sarbagita Suwung juga penting bagi citra pariwisata Indonesia mengingat lokasinya dekat dengan Bandara Internasional I Gusti Ngurah Rai, yang menjadi salah satu bandara tersibuk di ASEAN.</p>
            <p>Masa pelaksanaan pekerjaan dilakukan selama tiga tahun yakni 2017-2019 dengan anggaran Rp 250 miliar. Pekerjaan dilakukan oleh kontraktor PT. Waskita Karya dan PT. Arkonin (Kerjasama Operasi/KSO) dengan progres konstruksi sudah sebesar 94 % dan ditargetkan rampung akhir November 2019.</p>
            <p>Danis mengatakan dalam pengelolaan sampah terdapat tiga upaya yang perlu dilakukan dari hulu hingga hilir.&nbsp; Pertama, berkaitan dengan meningkatkan kesadaran perilaku masyarakat dalam mengelola sampah. Kedua lewat upaya sirkular ekonomi, yaitu bagaimana masyarakat dapat berpartisipasi dalam pemilahan sampah yang dapat didaur ulang sehingga dapat memberikan pemasukan secara ekonomi sekaligus mengurangi sekitar 30 persen sampah yang masuk ke TPA.</p>
            <p>“Terakhir melalui pendekatan teknologi, misalnya dengan pembangunan PLTSa untuk pengurangan sampah dengan mengubahnya menjadi energi," ujarnya.</p>
            <p>Turut hadir dalam peninjauan tersebut Staf Ahli Menteri PUPR Bidang Sosial Budaya dan Peran Masyarakat Sudirman, Direktur Pengembangan Penyehatan Lingkungan Permukiman Ditjen Cipta Karya Dodi Krispratmadi, Direktur Pelaksanaan Pembiayaan Infrastruktur Permukiman Haryo Bekti Martoyoedo dan Kepala Biro Komunikasi Publik Endra S. Atmawidjaja. (Jay)</p>                        </div>`
    },
    {
        id: 3,
        title: 'Preservasi Ruas Jalan Ajibarang-Banjarnegara Gunakan Aspal Karet',
        publish: 'Selasa, 20 Agustus 2019',
        seen: 283,
        image_url: 'https://pu.go.id/assets/images/content/WhatsApp_Image_2019-08-19_at_20_25_58.jpeg',
        content: `<div class="content">
            <p>JAKARTA – Kementerian Pekerjaan Umum dan Perumahan Rakyat (PUPR) telah memulai penggunaan aspal karet untuk penanganan jalan nasional di seluruh Indonesia. Kebijakan ini merupakan tindak lanjut dari instruksi Presiden Joko Widodo saat bersilaturahmi dengan Para Petani Karet Se-Provinsi Sumatra Selatan, di Kabupaten Musi Banyuasin pada bulan Maret 2019.</p>
            <p>Kementerian PUPR menargetkan pada tahun 2019 panjang effektif jalan nasional 65,56 Km menggunakan campuran aspal karet sebanyak 2.542 ton, dimana dengan asumsi penggunaan karet 7% terhadap aspal maka jumlah karet yang terserap sebanyak 177,95 ton.</p>
            <p>“Aspal karet memiliki tingkat perkerasan lebih baik, tidak mudah meninggalkan jejak roda pada saat aspal basah, dan daya tahan lebih tinggi dibanding aspal biasa,” kata Menteri Basuki beberapa waktu lalu.</p>
            <p>Penggunaan aspal karet salah satunya pada pengerjaan preservasi jalan nasional Lintas Tengah Jawa pada ruas Ajibarang-Banyumas-Klampok-Banjarnegara di Provinsi Jawa Tengah (Jateng) sepanjang 4,8 km dari total yang ditangani 63,03 km.</p>
            <p>Pada tahun 2019, Kementerian PUPR melalui Balai Besar Pelaksanaan Jalan Nasional (BBPJN) VII Direktorat Jenderal Bina Marga melakukan peningkatan kualitas jalan Lintas Tengah Jawa yang meliputi pemeliharaan rutin jalan (20,64 km), pemeliharaan rutin kondisi (25,12 km), rehabilitasi mayor (10,87 km), rekonstruksi jalan (0,9 km), pekerjaan holding (10,87 km), dan pemeliharaan jembatan (597,7 km).</p>
            <p>“Pada pekerjaan preservasi paket ini dilakukan rehabilitasi mayor sepanjang 10,5 km yang meliputi perbaikan eksisting, penambalan jalan berlubang, dan pengaspalan jalan 2 lapis. Ada 6 ruas yang dikerjakan, dua diantaranya menggunakan pelapisan aspal karet sepanjang 4,8 km. Yakni ruas Sokaraja-Kaliori sepanjang 2,9 km full aspal karet seluruhnya dan Patikraja-Rawalo sepanjang 1 km dari total panjang 1,9 km, sisanya aspal modified,” kata Kepala BBPJN VII Akhmad Cahyadi.</p>
            <p>Kelebihan campuran aspal karet alam yakni meningkatkan kualitas perkerasan aspal dalam hal usia layanan dan ketahanan terhadap alur. Penggunaan aspal karet untuk pengaspalan jalan sudah dilakukan Kementerian PUPR di beberapa lokasi jalan nasional, salah satunya di ruas Ciawi-Sukabumi dan Jalan bts Karawang-Cikampek.</p>
            <p>Selain menggunakan aspal karet pada pekerjaan rehabilitasi mayor, BBPJN VII melalui Satker Pelaksanaan Jalan Nasional Wilayah II Jawa Tengah melakukan peningkatan kualitas jalan pada ruas Purwokerto-Patikraja dengan mengganti jalan aspal menjadi beton rigit.</p>
            <p>Seluruh pengerjaan konstruksi preservasi jalan ini dilakukan oleh kontraktor PT Satria Buana Pamula Sakti dengan biaya APBN tahun 2019 sebesar Rp 49,7 miliar. Masa pelaksanaan 343 hari kalender sejak kontrak 23 Januari dan ditargetkan selesai 31 Desember 2019. Saat ini progres seluruh pekerjaan mencapai 57,3% atau lebih cepat dari rencana sebesar 53%.&nbsp;</p>
            <p>“Penanganan Jalur Lintas Tengah Jawa untuk meningkatkan kualitas layanan bagi pengendara karena penghubung antara jalur Lintas Selatan dengan Tol Trans Jawa, dan juga jalur Pantai Utara (Pantura),” ujar Akhmad Cahyadi.&nbsp;&nbsp;</p>
            <p>Selain preservasi jalan, peningkatan kualitas jalan juga dilakukan dengan pembenahan dan pembuatan drainase baru sepanjang 3,6 km. Untuk pembangunan drainase dengan konstruksi baru berada di ruas Purwokerto-Patikraja (350 meter), sedangkan konstruksi beton di Jalan Veteran (250 meter) dan beberapa spot di ruas Purwokerto-Patikraja-Rawalo-Sukoraja-Kaliori sepanjang 3 km.&nbsp;&nbsp;</p>
            <p>“Pembangunan drainase jalan yang terhubung dengan sistem drainase lingkungan sangat penting untuk menghindari terjadinya genangan sehingga memperpanjang usia layanan jalan,” tuturnya.</p>
            <p>Sebagian ruas yang tengah dikerjakan telah dilengkapi lampu penerangan menggunakan solar cell, khususnya pada ruas yang melintasi wilayah kota/kabupaten dan titik-titik yang rawan kecelakaan.</p>
            <p>Selanjutnya pada tahun 2020, peningkatan ruas yang belum ditangani akan dilanjutkan diantaranya melakukan pelebaran untuk jalan dengan lebar kurang dari 7 meter (4,5-5,5 meter) sepanjang 21,7 km, diantaranya di ruas Bts. Kabupaten Banyumas-Klampok (7 km), Klampok-Bts. Kota Banjarnegara (12,8 km), dan ruas Bts. Kota Banjarnegara-Bts. Kabupaten Wonosobo (1,9 km).</p>
            <p>Kemudian juga diusulkan pelebaran jalan pada paket Ajibarang sepanjang 1,8 km yakni ruas Buntu-Banyumas (800 meter) dan Banyumas-Bts. Kabupaten Banjarnegara (1 km). (Tri)</p>                        </div>`
    },
    {
        id: 4,
        title: 'Kementerian PUPR Bangun Jaringan Irigasi Utama Bahuga D.I Komering 6.853 Ha Senilai Rp 590,23 Miliar',
        publish: 'Selasa, 20 Agustus 2019',
        seen: 78,
        image_url: 'https://pu.go.id/assets/images/content/WhatsApp_Image_2019-08-19_at_20_25_55.jpeg',
        content: `<div class="content">
            <p>Jakarta – Kementerian Pekerjaan Umum dan Perumahan Rakyat (PUPR) dalam periode tahun 2015 – 2018, telah membangun 865.393 Ha jaringan irigasi dari target 1 juta Ha jaringan irigasi baru. Pada akhir tahun 2019 ditargetkan tambahan 139.410 Ha jaringan irigasi sehingga total jaringan irigasi terbangun dari 2015 – 2019 seluas 1.004.803 Ha.</p>
            <p>Menteri PUPR Basuki Hadimuljono mengatakan program pembangunan dan rehabilitasi jaringan irigasi merupakan salah satu program yang targetnya akan tercapai selain pemeliharaan jalan nasional, pembangunan jalan baru, jalan tol, waduk, kota baru, pelatihan konstruksi dan sertifikasi konstruksi. "Pembangunan bendungan, embung, jaringan irigasi baru dan rehabilitasi jaringan irigasi eksisting bertujuan mendukung ketahanan pangan nasional,” kata Menteri Basuki beberapa waktu lalu.</p>
            <p>Salah satu jaringan irigasi yang dikembangkan&nbsp; Kementerian PUPR melalui Balai Besar Wilayah Sungai (BBWS) Sumatera VIII Ditjen Sumber Daya Air, berada di Propinsi Sumatera Selatan dan sebagian Lampung (potensial), melalui pembangunan Proyek Irigasi Komering dengan potensi mengairi lahan seluas 124.000 Ha. Luas irigasi terbagi di Provinsi Sumsel seluas 74.000 Ha di Kabupaten Ogan Komering Ulu (OKU) Timur, Kabupaten Ogan Komering&nbsp; Ilir (OKI) dan Propinsi Lampung seluas 50.000 Ha terletak di Kabupaten Way Kanan dan Tulang Bawang.</p>
            <p>Pada tahun 2016-2019, Kementerian PUPR melaksanakan pembangunan Jaringan Irigasi Utama Bahuga D.I Komering bagian hilir di Kabupaten OKU Timur dengan luas 6.853 Ha. Pekerjaan dibagi menjadi 2 Paket yakni Paket I seluas 3.741 Ha dan Paket II seluas 3.112 Ha.</p>
            <p>Lingkup pekerjaan di Paket I antara lain pembangunan saluran sekunder 15,05 Km dan Sub Sekunder 14,17 Km. Konstruksi dilakukan oleh PT. Wijaya Karya dan PT. Tri Bhakti dengan anggaran Rp 288 miliar dan progress fisiknya sudah mencapai 94,7 persen. Pada Paket II dikerjakan pembangunan saluran sekunder 14,21 Km dan saluran sub sekunder 30,17 Km. Konstruksi dilakukan oleh PT. Adhi Karya dan PT. Punggur dengan anggaran Rp 301 miliar dan progres konstruksi mencapai 90%.</p>
            <p>Pada setiap paket juga dibangun bangunan pelengkap seperti bangunan bagi, sadap, ukur, pelimpah dan penguras, jembatan desa, gorong-gorong, bangunan terjun dan bangunan akhir. “Pembangunan Daerah Irigasi Komering dilakukan bertahap dengan mengembangkan sub daerah irigasinya sejak tahun 1990. Tujuannya untuk meningkatkan taraf hidup dan standar hidup petani melalui peningkatan areal tanaman dan produksi pertanian,” kata Kepala Balai Besar Wilayah Sungai (BBWS) Sumatera VIII, Ditjen Sumber Daya Air, Birendrajana.</p>
            <p>Sumber daya air yang dimanfaatkan berasal dari Danau Ranau yang merupakan danau alam dengan kapasitas sebesar 254 juta m3. Tantangan yang dihadapi dalam pengaturan irigasi adalah pada musim kemarau debit&nbsp; air sungai komering yang masuk ke saluran irigasi sangat kecil. Sementara pada musim hujan elevasi sungai komering naik mengakibatkan debit air sungai komering yang masuk ke saluran relatif&nbsp; cukup besar dan membawa cukup banyak kandungan lumpur yang mengendap di saluran.(Iwn)</p>                        </div>`
    },
    {
        id: 5,
        title: 'Menteri PU (1983-1988) Suyono Sosrodarsono Dimakamkan di TMP Kalibata',
        publish: 'Senin, 19 Agustus 2019',
        seen: 200,
        image_url: 'https://pu.go.id/assets/images/content/WhatsApp_Image_2019-08-18_at_19_25_56.jpeg',
        content: `<div class="content">
            <p>Jakarta - Pemakaman Menteri Pekerjaan Umum (1983-1988) DR.(H.C.) Ir. Suyono Sosrodarsono atau dikenal dengan sapaan&nbsp; Pak Yono dilaksanakan secara kenegaraan dengan upacara militer berjalan khidmat di Taman Makam Pahlawan Kalibata, Jakarta, Minggu, 18 Agustus 2019 sekitar Pukul 13.30 WIB. Menteri Suyono, penerima Bintang Mahaputera Utama dan Mahaputera Adipradana, meninggal dunia dalam usia 93 tahun, pada hari Sabtu, 17 Agustus 2019 Pukul 15.30 di Rumah Sakit Siloam, Semanggi, Jakarta.</p>
            <p>“Segenap pimpinan dan pegawai Kementerian PUPR menyampaikan turut berduka cita yang mendalam atas berpulangnya salah satu putra terbaik bangsa Indonesia yang berjasa besar dalam pembangunan infrastruktur di Indonesia,” kata Menteri Pekerjaan Umum dan Perumahan Rakyat Basuki Hadimuljono yang dibacakan oleh Inspektur Upacara Dirjen Sumber Daya Air Hari Suprayogi dalam sambutan pelepasan jenazah almarhum.</p>
            <p>Sebelumnya jenazah disemayamkan di kediaman dan kemudian dibawa ke Masjid As Salam di Kantor Kementerian PUPR untuk disholatkan bada solat zuhur. Kemudian dilaksanakan upacara penyerahan jenazah dari pihak keluarga kepada negara dalam hal ini diwakili Kementerian PUPR. Dari pihak keluarga diwakili oleh Rachmat Saleh dan diterima oleh Sekretaris Jenderal Kementerian PUPR Anita Firmanti.</p>
            <p>Turut hadir dalam acara pemakaman antara lain Ibu Suyono Sosrodarsono, Menteri PU periode tahun 2004-2014 Djoko Kirmanto, para senior, pejabat tinggi madya dan pratama dan staf Kementerian PUPR.</p>
            <p>“Pak Yono merupakan teladan bagi para insinyur muda Indonesia karena dalam melaksanakan tugasnya dikenal sebagai pekerja keras, disiplin, sederhana dan lebih suka terjun ke lapangan,” kata Menteri Basuki.</p>
            <p>Menteri Djoko Kirmanto mengatakan kesannya terjadap sosok almarhum Suyono Sosrodarsono sangat melekat dihatinya. “Saya sangat mengenang Beliau sebagai pribadi luar biasa. Pak Yono, buat saya adalah pemimpin, bapak, dan guru saya. Sewaktu saya jadi menteri, kalau ada yang tidak berkenan, beliau dengan santun memberi tahu. Setiap Menteri sesudah beliau juga dikasih tahu. Termasuk sekarang Pak Basuki, beliau juga banyak memberikan petunjuk petunjuk dan tidak menggurui. Itulah hebatnya beliau, sudah pintar, walau sepuh tetap tidak menggurui,” kenang Djoko Kirmanto.</p>
            <p>Suyono Sosrodarsono selain sebagai pimpinan, bapak dan guru juga seorang teman. Sehingga para staf merasa nyaman dan tidak sungkan untuk bertanya. “Biasanya kalau sama atasan itu segan. Bahkan waktu saya masih CPNS di Sulawesi Selatan, Pak Yono datang ke saya. Saya merasa diperhatikan, ternyata beliau itu memang kenal siapa saja, bukan saja untuk saya. Itulah Pak Yono memang&nbsp; luar biasa, dia pekerja keras, jujur dan teladan,” kenang Djoko Kirmanto.</p>
            <p>Dirjen Hari Suprayogi mengatakan bahwa salah seorang lulusan Jurusan Teknik Pengairan Universitas Brawijaya yang digagas Pak Yono adalah dirinya. “Semangat beliau akan kami teruskan. Perhatian beliau bagi pembangunan infrastruktur di Indonesia sangat besar. Beliau selalu mengusahakan hadir apabila kami mengundang sebagai narasumber dalam berbagai acara seminar dan diskusi bahkan meski beliau sudah dalam kondisi sakit,” kata Hari Suprayogi.</p>
            <p>Prof. DR. Danang Parikesit, M.Tech, peneliti dan dosen Universitas Gajah Mada (UGM), yang kini merupakan Kepala Badan Pengatur Jalan Tol (BPJT) mengatakan sosok Pak Yono, juga sangat peduli terhadap pendidikan. Beliau merupakan editor beberapa buku, seperti : Hidrologi Untuk Pengairan, Mekanika Tanah dan Teknik Pondasi, Pengukuran Topografi dan Teknik Pemetaan. “Ini karya beliau yang dikenang oleh kami di lingkungan akademik dan para mahasiswa terutama di generasi 80-90an,” kata Danang.</p>
            <p>Rachmat Saleh, sebagai menantu Pak Yono, menceritakan bahwa beliau adalah orang yang tegak dan lurus. Selalu mengajarkan kejujuran dan integritas. “Beliau paling tidak suka keluarga membawa-bawa nama beliau, harus berusaha sendiri, cari kerja sendiri,” ujarnya.</p>
            <p>Beliau juga terlibat dalam kegiatan pengajaran di berbagai perguruan tinggi termasuk menjadi narasumber di Kementerian PUPR. “Alhamdulillah sampai akhir hayat, pikirannya masih kuat tidak pikun,” ungkapnya. (Gtv/Jay/Tri)</p>                        </div>`
    },
    {
        id: 6,
        title: 'Menteri PU (1983-1988) Suyono Sosrodarsono Wafat : Sosok Pekerja Keras, Sederhana dan Teladan Bagi Insan PUPR',
        publish: 'Sabtu, 17 Agustus 2019',
        seen: 67,
        image_url: 'https://pu.go.id/assets/images/content/WhatsApp_Image_2019-08-17_at_19_22_19.jpeg',
        content: `<div class="content">
            <p>Jakarta - Telah meninggal dunia Menteri Pekerjaan Umum (1983-1988) DR.(H.C.) Ir. Suyono Sosrodarsono, dalam usia 93 tahun, pada hari Sabtu, 17 Agustus 2019 Pukul 15.30 di Rumah Sakit Siloam, Semanggi, Jakarta. Segenap pimpinan dan pegawai Kementerian Pekerjaan Umum dan Perumahan Rakyat (PUPR) menyampaikan turut berduka cita yang mendalam atas berpulangnya salah satu putra terbaik bangsa Indonesia yang berjasa besar dalam pembangunan infrastruktur di Indonesia.</p>
            <p>Suyono Sosrodarsono lahir di Madiun, Jawa Timur tanggal 3 Maret 1926 dan menyelesaikan Sekolah Menengah Tinggi di Malang tahun 1947. Pada masa tersebut, beliau juga tergabung dalam Tentara Republik Indonesia Pelajar (TRIP).</p>
            <p>Setelah menyelesaikan pendidikan teknik sipil di Bandung pada tahun 1955, beliau bergabung di Departemen Pekerjaan Umum dan Tenaga Listrik (PUTL) dan ditempatkan di Jawatan Perumahan Rakyat. Pada masa itu, Pemerintah Indonesia tengah giat membangun proyek-proyek besar yang hingga kini masih menjadi ikon kebanggaan bangsa seperti Gelora Bung Karno, Jembatan Semanggi, Gedung Conefo (sekarang gedung DPR-MPR), Masjid Istiqlal, Monas dan lainnya.&nbsp;</p>
            <p>Suyono mendapatkan kepercayaan memegang sejumlah jabatan diantaranya Proyek Irigasi di Sumatera Selatan (1959-1963), Kepala Direktorat Tata Bangunan Departemen PU (1963-1964), Pemimpin Komando Proyek Penanganan Banjir Jakarta (1964-1966), dan menjabat Direktur Jenderal Pengairan terlama (1966-1982). Pada masa jabatannya sebagai Dirjen Pengairan, bendungan yang dibangun diantaranya Bendungan Gajah Mungkur, Selorejo, dan Karangkates. Kemudian diangkat sebagai Menteri PU Kabinet Pembangunan IV (1983–1988) pada era Presiden Soeharto dan Wakil Presiden Umar Wirahadikusumah.</p>
            <p>Suyono beruntung karena dalam rentang panjang perjalanan karirnya sempat bertemu, mengenal dan terlibat selama sebelas tahun dalam masa pemerintahan Presiden Soekarno dan dua puluh dua tahun dalam masa kepemimpinan Presiden Soeharto.</p>
            <p>Suyono merupakan teladan bagi para insinyur muda Indonesia karena&nbsp; dalam melaksanakan tugasnya, Suyono dikenal sebagai pekerja keras, disiplin, sederhana dan lebih suka terjun ke lapangan. Dalam sebuah kesempatan, Suyono pernah mengatakan “Saya melakukan observasi di lapangan dan tidur dekat proyek. Di lapanganlah para insinyur akan melihat dan terlibat dalam penanganan masalah, melaksanakan praktek ilmunya yang ada kalanya tidak sama dengan apa yang kita pelajari dalam textbook. Saya juga bekerja sambil belajar, melaksanakan perbaikan jalan. Belakangan saya semakin memahami seorang insinyur baru dapat bekerja secara mantap jika pernah bekerja di lapangan,” kata Suyono.</p>
            <p>Suyono juga mengambil prakarsa bersama Prof. Ir. Suryono (Pada waktu itu Dekan Fakultas Teknik Universitas Brawijaya) mendirikan Jurusan Teknik Pengairan untuk mendapatkan tenaga ahli khusus dalam teknik pengairan. Teknik ini penting dalam rangka mencapai swa sembada beras di Indonesia. Dalam bidang keilmuan, beliau juga terlibat sebagai penyunting beberapa buku teknik utamanya di bidang hidrologi.</p>
            <p>Jenazah akan disemayamkan di rumah duka Jl. Hang Tuah VII/77 Kebayoran Baru, Jakarta Selatan. Pemakaman almarhum akan dilaksanakan pada hari Minggu, 18 Agustus 2019 di Taman Makam Pahlawan Kalibata sebelum sholat ashar.</p>
            <p>Selamat jalan Pak Menteri Suyono, karya dan teladanmu akan selalu kami kenang dan menjadi semangat dalam bekerja untuk menjadikan Kementerian PUPR lebih baik lagi. (Gtv)</p></div>`
    },
];

// NEWS VIDEO
var db_news_video = [
    {
        id: 1,
        title: 'Jalan Lingkar Pulau Samosir Permudah Konektivitas Antar Destinasi Wisata',
        publish: 'Rabu, 07 Agustus 2019',
        yt_frame: '<iframe src="https://www.youtube.com/embed/R3ML-kLTsIs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        id: 2,
        title: 'Penataan Tano Ponggol di Kawasan Wisata Danau Toba',
        publish: 'Selasa, 06 Agustus 2019',
        yt_frame: '<iframe src="https://www.youtube.com/embed/cS1GLTlmv2I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        id: 3,
        title: 'Setelah 41, Akhirnya Masjid Istiqlal Direnovasi',
        publish: 'Rabu, 24 Juli 2019',
        yt_frame: '<iframe src="https://www.youtube.com/embed/E4lCwqvFNlc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        id: 4,
        title: 'Kementerian PUPR Bangun Tiga Bendungan untuk Pengendalian Banjir di Sultra',
        publish: 'Senin, 01 Juli 2019',
        yt_frame: '<iframe src="https://www.youtube.com/embed/nUw9umIzdog" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        id: 5,
        title: 'Di NTT, Presiden Joko Widodo Resmikan Bendungan Rotiklot',
        publish: 'Jumat, 24 Mei 2019',
        yt_frame: '<iframe src="https://www.youtube.com/embed/tAw66evwmU4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        id: 6,
        title: 'Jalan Perbatasan Sabuk Merah, Indonesia - Timor Leste',
        publish: 'Jumat, 24 Mei 2019',
        yt_frame: '<iframe src="https://www.youtube.com/embed/PY6VbZQpbms" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
];

var db_announcement = [
    {
        id: 1,
        publish: 'Jumat, 16 Agustus 2019',
        text: 'Sambutan Menteri PUPR pada Upacara Bendera Memperingati HUT Kemerdekaan RI ke-74'
    },
    {
        id: 2,
        publish: 'Senin, 12 Agustus 2019',
        text: 'Agenda dan KAK Acara Workshop “Public Private Partnership (PPP) for Affordable Housing"'
    },
    {
        id: 3,
        publish: 'Kamis, 08 Agustus 2019',
        text: 'Undangan Sinkronisasi dan Harmonisasi Usulan Dana Alokasi Khusus (DAK) Fisik Bidang Perumahan TA 2020'
    },
    {
        id: 4,
        publish: 'Selasa, 06 Agustus 2019',
        text: 'Informasi Pengisian JPT di kementerian / Lembaga'
    },
    {
        id: 5,
        publish: 'Sabtu, 17 Agustus 2019',
        text: 'Download Giant Banner HUT RI ke-74'
    },
];

// DB FOOTER
var db_footer = [
    {
        title: 'Situs Terkait',
        lists: [
            {
                text: 'ULP Kementerian PUPR',
                url: 'http://ulp.pu.go.id/'
            },
            {
                text: 'Kementerian',
                url: 'https://pu.go.id/article/60/'
            },
            {
                text: 'Setingkat Menteri',
                url: 'https://pu.go.id/article/61'
            },
            {
                text: 'LPNK',
                url: 'https://pu.go.id/article/62'
            },
            {
                text: 'Pemerintah Daerah',
                url: 'https://pu.go.id/article/63'
            },
            {
                text: 'Badan Usaha Milik Negara',
                url: 'https://pu.go.id/article/64'
            },
            {
                text: 'Instansi Terkait',
                url: 'https://pu.go.id/article/65'
            },
            {
                text: 'Asosiasi',
                url: 'https://pu.go.id/article/66'
            },
            {
                text: 'PU Internasional',
                url: 'https://pu.go.id/article/67'
            },
            {
                text: 'Sekretariat Nasional ASEAN',
                url: 'http://setnas-asean.id/'
            },
            {
                text: 'Info Terkait',
                url: 'https://pu.go.id/article/68'
            },
        ]
    },
    {
        title: 'Aplikasi PUPR',
        lists: [
            {
                text: 'e-Monitoring',
                url: 'http://emonitoring.pu.go.id/'
            },
            {
                text: 'e-Budgeting',
                url: 'http://ebudgeting.pu.go.id/'
            },
            {
                text: 'DAK',
                url: 'http://103.11.135.34/dak2015.php'
            },
            {
                text: 'TNDE',
                url: 'http://eoffice.pu.go.id/'
            },
            {
                text: 'e-Dokumen',
                url: 'http://edokumen.pu.go.id/index.php'
            },
            {
                text: 'Mail PU',
                url: 'http://mail.pu.go.id/'
            },
            {
                text: 'SI-Mentor',
                url: 'http://simentor.pu.go.id/'
            },
        ]
    },
    {
        title: 'Navigasi',
        lists: [
            {
                text: 'Saran & Pengajuan',
                url: 'https://pengaduan.pu.go.id/'
            },
            {
                text: 'Site Map',
                url: 'https://pu.go.id/article/70'
            },
            {
                text: 'FAQ',
                url: 'https://pu.go.id/article/69'
            },
        ]
    },
    {
        title: 'Kontak',
        type: 'contact',
        lists: [
            {
                text: 'Kementerian PUPR',
            },
            {
                text: 'Jl. Pattimura No. 20 Kebayoran Baru',
            },
            {
                text: 'Jakarta Selatan 12110',
            },
            {
                text: '(021) 7228497',
            },
            {
                text: 'informasi@pu.go.id',
                url: 'mailto:informasi@pu.go.id'
            },
        ]
    },
];

// DB INFO UMUM
var db_info_umum = [
    {
        title: 'e-Announcement LHKPN',
        image_url: 'https://pu.go.id/assets/images/content/info_umum/f64e67b5883556c9f678d6a20cec86e1.jpeg',
        url: 'https://elhkpn.kpk.go.id/portal/user/pengumuman_lhkpn/WTFsUmJVdFZLMDVxUzNvMFIyTkpXSEJxV1RnMFZrTmtNbWR5ZVdWUVNWRTBOR1JxVUZKT1pGRkZNVEZZUkN0S2JtSlFVMnh1T1dselNrVldTVXBIZHc9PQ=='
    },
    {
        title: 'e-LHKPN',
        image_url: 'https://pu.go.id/assets/images/content/info_umum/594e6eb1abca9b533ee4cc584e832898.jpg',
        url: 'https://elhkpn.kpk.go.id/'
    },
    {
        title: 'Layanan Informasi Publik (e-PPID)',
        image_url: 'https://pu.go.id/assets/images/content/info_umum/e1511b8f44d7cf119d6c56f3d0e903cd.jpg',
        url: 'http://eppid.pu.go.id/'
    },
    {
        title: 'Government Public Relations',
        image_url: 'https://pu.go.id/assets/images/content/info_umum/17eae66ead6c618b08078fc913613892.jpeg',
        url: 'https://pu.go.id/gpr/'
    },
    {
        title: 'Pelayanan Publik',
        image_url: 'https://pu.go.id/assets/images/content/info_umum/d9270bf09a9e4370cad52e21cfac7f24.jpg',
        url: 'http://pelayananpublik.pu.go.id/'
    },
    {
        title: 'Whistleblowing System',
        image_url: 'https://pu.go.id/assets/images/content/info_umum/9cb513db2af338dcd46baa408b46fb63.jpg',
        url: 'http://wispu.pu.go.id/'
    },
    {
        title: 'Saber Pungli',
        image_url: 'https://pu.go.id/assets/images/content/info_umum/ad2a74327ee33cc71956bb644abed669.jpg',
        url: 'http://saberpungli.pu.go.id/'
    },
    {
        title: 'Kebijakan / Peraturan',
        image_url: 'https://pu.go.id/assets/images/content/info_umum/a61ac0ba2e28d288c06c56edd65890b3.jpg',
        url: 'http://jdih.pu.go.id/'
    },
    {
        title: 'Peta Infrastruktur',
        image_url: 'https://pu.go.id/assets/images/content/info_umum/9a8f22ab6ec046975eee94fbeecd71ee.jpg',
        url: 'http://loketpeta.pu.go.id/'
    },
    {
        title: 'Sistem Informasi Geografis',
        image_url: 'https://pu.go.id/assets/images/content/info_umum/401b05bde612fae51583c09f7fdb37fb.jpg',
        url: 'http://sigi.pu.go.id/'
    },
];

// DB INFO PENDUKUNG
var db_info_pendukung = [
    {
        title: 'e-LP2P',
        image_url: 'https://pu.go.id/assets/images/content/info_pendukung/51618f1787a919b4827b35bc7f161961.jpg',
        url: 'http://elp2p.pu.go.id/'
    },
    {
        title: 'Info Bencana',
        image_url: 'https://pu.go.id/assets/images/content/info_pendukung/f28d5e071a65019f5afa6c28bcaa3e81.jpg',
        url: 'http://infobencana.pu.go.id/'
    },
    {
        title: 'Berita Lintas Instansi',
        image_url: 'https://pu.go.id/assets/images/content/info_pendukung/6cf8b13ae7e6409ea9d05afb43f3c031.jpg',
        url: 'https://pu.go.id/beritalintasinstansi'
    },
    {
        title: 'LAPOR !',
        image_url: 'https://pu.go.id/assets/images/content/info_pendukung/ad82b04a803be1d768491663403f66a0.jpg',
        url: 'https://www.lapor.go.id/'
    },
    {
        title: 'Kode Etik dan Kode Perilaku',
        image_url: 'https://pu.go.id/assets/images/content/info_pendukung/fa117febba91f169c2a5aaf2198d6078.jpg',
        url: 'http://bpsdm.pu.go.id/center/web/view/web/uploads/file/2017/05/20170518063912_VideoKodeEtik.mp4'
    },
    {
        title: 'Pranata Komputer',
        image_url: 'https://pu.go.id/assets/images/content/info_pendukung/be70f07876dfed7f5e134bd2e80b2cd2.jpg',
        url: 'https://setjen.pu.go.id/pusdatin/article/103/pranata-komputer'
    },
    {
        title: 'Pengarusutamaan Gender PUPR',
        image_url: 'https://pu.go.id/assets/images/content/info_pendukung/c0e7f5cf7cf98bd940f2a830c97184da.jpg',
        url: 'http://pug-pupr.pu.go.id/'
    },
    {
        title: 'Reformasi Birokrasi Kementerian PUPR',
        image_url: 'https://pu.go.id/assets/images/content/info_pendukung/a388dae35a798a2952db8d664b14bc3e.jpg',
        url: 'http://rb.pu.go.id/'
    },
    {
        title: 'Perpustakaan',
        image_url: 'https://pu.go.id/assets/images/content/info_pendukung/08885394b5f343de24816413c1fc6579.jpg',
        url: 'http://pustaka.pu.go.id/'
    },
];

// DB AGENDA
var db_agenda = [
    {
        title: 'Lomba Konten dan Tata Kelola Website 2019',
        image_url: 'https://pu.go.id//assets/images/content/agenda201708291438013.jpg',
        url: 'https://pu.go.id/userfiles/agenda/171206__lombaWebsite/kotak-2019.php'
    },
    {
        title: 'ICID.CIID - 3rd World Irrigation Forum & 70th International Executive Council Meeting 1-7 September 2019',
        image_url: 'https://pu.go.id//assets/images/content/Logo_WIF3_Agenda.png',
        url: 'https://icid2019.com/'
    },
];

// LPSE PURP
var db_lpse = {
    table: [
        {
            package: 'Supervisi Pembangunan Bendungan Tamblang di Kabupaten Buleleng',
            hps: '46,490,813,000',
            schedule: '02 Evaluasi Penawaran'
        },
        {
            package: 'Pengembangan Sarana Dan Prasarana Penunjang (PLBN) Terpadu Skouw...',
            hps: '145,988,000,000',
            schedule: '04 Penandatangan Kontrak'
        },
        {
            package: 'Pengembangan Sarana Dan Prasarana Penunjang (PLBN) Terpadu Di Nus...',
            hps: '113,899,000,000',
            schedule: '04 Penandatangan Kontrak'
        },
        {
            package: 'Pengembangan Sarana Dan Prasarana Penunjang (PLBN) Terpadu Di Kal...',
            hps: '133,512,000,000',
            schedule: '02 Evaluasi Penawaran'
        },
        {
            package: 'Paket Preservasi Rekonstruksi Jalan Tapan - BTS. BENGKULU (SBSN)',
            hps: '263,089,603,000',
            schedule: '04 Penandatangan Kontrak'
        },
    ],
    buttons: [
        {
            text: 'SIRUP',
            url: 'http://sirup.pu.go.id/'
        },
        {
            text: 'SPSE 3.6',
            url: 'http://lpse.pu.go.id/eproc/'
        },
        {
            text: 'SPSE 4.3',
            url: 'https://lpse.pu.go.id/eproc4'
        },
        {
            text: 'SPSE ICB',
            url: 'http://spseicb.pu.go.id/'
        },
        {
            text: 'SIPnS',
            url: 'http://103.12.84.171:65500/pendaftaranspse/lpse/publik'
        },
        {
            text: 'Full e-Proc',
            url: 'http://eproc.pu.go.id/full.asp'
        },
        {
            text: 'Jasa Tirta I',
            url: 'http://eproc.pu.go.id/publik/jasatirta2018/'
        },
        {
            text: 'RUP',
            url: 'http://eproc.pu.go.id/rup.asp'
        },
        {
            text: 'Semi e-Proc',
            url: 'http://eproc.pu.go.id/semi2.asp'
        },
        {
            text: 'Juknis',
            url: 'http://eproc.pu.go.id/publik/eproc2013/download/download.htm'
        },
        {
            text: 'Registrasi',
            url: 'http://eproc.pu.go.id/publik/eproc2013/penyediajasa/pilihan.asp'
        },
        {
            text: 'Info Umum',
            url: 'http://eproc.pu.go.id/narasi.asp'
        }
    ],
};

var db_socmed = [
    {
        image_url: 'assets/images/tw.svg',
        url: 'http://twitter.com/kemenPU'
    },
    {
        image_url: 'assets/images/fb.svg',
        url: 'https://facebook.com/KemenPUPR'
    },
    {
        image_url: 'assets/images/yt.svg',
        url: 'http://youtube.com/user/kemenPU'
    },
    {
        image_url: 'assets/images/ig.svg',
        url: 'http://instagram.com/kemenpupr'
    },
];

var db_berita_unit_organisasi = [
    {
        text: 'Sekretariat Jenderal',
        url: ''
    },
    {
        text: 'Inspektorat Jenderal',
        url: ''
    },
    {
        text: 'Ditjen Sumber Daya Air',
        url: ''
    },
    {
        text: 'Ditjen Bina Marga',
        url: ''
    },
    {
        text: 'Ditjen Cipta Karya',
        url: ''
    },
    {
        text: 'Ditjen Penyediaan Perumahan',
        url: ''
    },
    {
        text: 'Ditjen Bina Konstruksi',
        url: ''
    },
    {
        text: 'Ditjen Pembiayaan Infrastruktur Pekerjaan Umum & Perumahan',
        url: ''
    },
    {
        text: 'BPIW',
        url: ''
    },
    {
        text: 'Balitbang',
        url: ''
    },
    {
        text: 'BPSDM',
        url: ''
    },
    {
        text: 'BPJT',
        url: ''
    },
    {
        text: 'BPPSPAM',
        url: ''
    },
];