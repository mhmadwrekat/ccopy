import React from 'react'
import Head from 'next/head'

const HeadComp = () => {
  const headKeywords = `
  اخبار,الزبده,Alzubda,عاجل,نبض,العربية, اخبار السعودية,الاخبار,اخبار العالم,اخبار24,الجزيرة,اخبار اليوم,كرة القدم
  الزبدة
  الزبده
  زبد
  الزبد
  سياسه
  سياسة
  اخبار السياسة
  أخبار السياسه
  اخبار الرياضة اليوم
  مباريات اليوم
  اخبار الرياضة السعودية
  اخبار الرياضة الكويتية
  اخبار المغرب
  اخبار العراق
  اخبار محمد صلاح
  اخبار ميسي
  اخبار ريال مدريد
  اخبار برشلونة
  اخبار نادي برشلونة
  دبي
  الامارات
  اخبار الامارات
  اخبار الخليج العربي
  صحيفة
  صحف اخبار
  صحيفة الاخبار
  سبق
  عكاظ
  توتر
  تويتر
  تحميل تويتر
  تحميل توتر
  هنجري شارك
  نبض
  مبض
  وظائف الامارات
  خبر عاجل
  خبر
  اخبار المطلاع
  المطلاع
  المعونات
  برنامج اخباري
  الترندات
  مصادر الاخبار
  موقع اخبار
  موقع اخباري
  زبدة الاخبار
  زبدة العالم
  الدوري السعودي
  ترند
  اخبار ترند
  الدوري الاسباني
  كرة القدم
  الأخبار
  الاخبار
  اخبار الرياضة
  كرة القدم السعودية
  الرواتب
  اقتباسات
  البورصة الكويتية
  البورصة
  حول العالم
  اخبار العالم
  احداث العالم
  عاجل
  يحدث الآن
  الان
  اخبار الكويت
  اخبار السعودية
  اخبار مصر
  الجزيرة
  العربية
  ارقام
  وظيفة
  توظيف
  الاهلي السعودي
  النصر
  البورصة الامريكية
  العملات الرقمية
  عملات مشفرة
  بتكوين
  بتكون
  وفيات
  وفيات اليوم
  اموات اليوم
  موتى اليوم
  اخبار المغرب
  المغرب العربي
  انباء
  الرياضة
  رياضة
  اخبار الأردن
  جرائد
  جريدة
  جريده
  جرائد الكويت
  جرائد السعودية
  جرائد السعوديه
  News
  News live
  Newspaper
  News tv
  News live
  Trending now
  Saudi new
  Saudia news
  Saudia new
  Saudia
  oil price
  news live
  World news
  Finance
  Kuwait tv
  Nabd
  New
  Anews
  Indian news
  India news
  Marketing
  Invest
  Investing
  Markets
  India new
  Gulf
  Arabia
  Gcc
  Gulf new
  Gulf news
  Arabia
  Arabia new
  Islam news
  Islam new
  Palestine news
  Olastine new
  Alzubda
  Zubda
  Alzubdah
  Zebda
  Alzebda
  Alzubdah
  Zobda
  alzobda
  `
  const headDescription = `
         يقدم تطبيق الزبدة الإخباري عصارة الأخبار، يختار لك باقة من أحدث وأفضل الأخبار عالميا وخليجيا وعربيا، في عدد كلمات لا يتجاوز 60 كلمة، بشكل مبتكر بهدف إحداث ثورة في مجال الخدمات الإخبارية اليومية، حتى نصبح المنصة الإخبارية الرائدة بالشرق الأوسط وشمال إفريقيا.
  
         يعتمد تطبيق الزبدة في رصد أخبار على المصادر الأولية، نقدمها لك في قالب إخباري موضوعي دون تحيز أو رأي شخصي. فقط نرصد لك المعلومة، ويطلع عليها المستخدم بسهولة وكفاءة حسب تفضيلاته، حتى نضمن لك تقديم صورة شاملة ومثالية لمتابعي الأخبار بأي شكل تفضله.
  
         بُنِيَتْ فكرة «الزبدة» الأساسية على استخلاص أي محتوى خبري مهما كان نوعه أو حجمه في 60 كلمة أو أقل، دون إخلال، وبكل شفافية وموضوعية، مع توثيقه بنسبة 100%، عبر البحث في آلاف المصادر الأكثر أهمية وشيوعا، والوصول للمصدر رقم صفر للخبر. كل ذلك على يد فريق من المحترفين في كل الخطوات.
  
         وبذلك يحل تطبيق «الزبدة» بديلا جيدا للمهتمين بالخدمات الإخبارية من جميع أنحاء العالم، عن مطالعة آلاف الصفحات يوميا.
  
         في لمح البصر، احصل على آخر الأخبار المفضلة لك في 60 كلمة، فقط تحتاج لـ5 ثوان لقراءة الخبر، ليس ذلك فقط بل تأخذ المعلومة الصحيحة من مصدرها الموثوق، المصدر رقم صفر.
  
         مميزات تطبيق الزبدة:
  
         ◉ اقرأ ملخصات لجميع الأخبار
         من خلال التنقل بين الأخبار، يمكنك قراءة الخبر من مصدره الرئيسي بـ60 كلمة أو أقل. وعند سحب الشاشة إلى اليسار، تستطيع قراءة الخبر بالكامل من المصدر الرسمي.
  
         ◉ الفئات الإخبارية
         مجموعة متنوعة من الفئات الإخبارية بين يديك. نرصد لك الخبر من جميع أنحاء العالم، وننقله بكل شفافية لك بعد التأكد من صحة المعلومة من مصدره الأساسي، سواء سياسيا أو اقتصاديا أو اجتماعيا أو ثقافيا. كل هذا في 60 كلمة.
  
         ◉ اختيار المصادر ومواضيع الأخبار
         يمكنك اختيار المواضيع الإخبارية التي تهمك في أي وقت. وأيضا المصادر التي ترغب بقراءة الأخبار منها. أنت تتحكم في كل شيء.
  
         ◉ المفضلة
         إمكانية حفظ الخبر لتطلع عليه في أي وقت.
  
         ◉ الأخبار المهمة
         جولة سريعة على أهم وأفضل الأخبار حول العالم في دقائق معدودة.
  
         ◉ مشاركة الأخبار
         بلمسة واحدة يمكنك مشاركة الأخبار المهمة مع أصدقائك أو عبر منصات التواصل الاجتماعي لإخبارهم بحدث مهم وطرحه للنقاش على العلن.

         ◉ الوضع الليلي
         إمكانية تفعيل خاصية الوضع الليلي أثناء قراءة الأخبار مساءً لراحة أكثر لك.
  
         وفّر وقتك معنا، وابق على اطلاع دائم بما يحدث حول العالم من مصادرها الأولية، المصدر صفر.
  
         حمّل التطبيق الآن لقراءة الأخبار بطريقة جديدة وعصرية.
  
         للتواصل معنا:
         media@alzubda.com
         `
  return (
    <div>
      <Head>
        <title>الزبدة | الأخبار</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content={headKeywords} />
        <meta name="description" content={headDescription} />

        <link
          rel="stylesheet"
          href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Work+Sans:200,400&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        {/* <link
          rel="stylesheet"
          href="path/to/font-awesome/css/font-awesome.min.css"
        /> */}
      </Head>
    </div>
  )
}

export default HeadComp
