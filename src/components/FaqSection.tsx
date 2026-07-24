import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, MapPin } from "lucide-react";

const faqs = [
  {
    question: "Hangi inşaat hizmetlerini sunuyorsunuz?",
    answer:
      "Konut ve villa projeleri, anahtar teslim yapım, renovasyon ve onarım, mekanik tesisat, izolasyon, kamu yapısı uygulamaları ve yapı malzemesi temini alanlarında çalışıyoruz. Projenin kapsamını ilk görüşmede ihtiyaçlarınıza göre netleştiriyoruz.",
  },
  {
    question: "Yeni bir proje süreci nasıl başlıyor?",
    answer:
      "Önce proje türünü, konumu, yaklaşık büyüklüğü ve beklentilerinizi dinliyoruz. Ardından teknik koşulları değerlendirerek planlama ve teklif sürecinin çerçevesini oluşturuyoruz.",
  },
  {
    question: "Teklif talebini nasıl iletebilirim?",
    answer:
      "Sayfanın iletişim bölümündeki kısa formu doldurabilirsiniz. Bilgileriniz düzenli bir özet hâlinde hazırlanır ve kurumsal teklif e-posta adresimize iletilir.",
  },
  {
    question: "Projenin teslim süresi ne zaman belli olur?",
    answer:
      "Teslim süresi; proje türü, uygulama alanı, teknik gereksinimler ve iş programına göre değişir. Gerçekçi zaman planı, ihtiyaç ve saha değerlendirmesinin ardından proje özelinde paylaşılır.",
  },
  {
    question: "Hangi bölgelerde hizmet veriyorsunuz?",
    answer:
      "Mersin merkezli çalışıyoruz. Portföyümüzde Mersin’in yanı sıra Diyarbakır, Adana, Çanakkale, Düzce, Kastamonu, İstanbul, Tekirdağ, Malatya ve Amasya’da gerçekleştirilen işler bulunmaktadır. Yeni proje konumlarını kapsam ve saha koşullarına göre değerlendiriyoruz.",
  },
  {
    question: "Tadilat ve yenileme işi için de görüşebilir miyiz?",
    answer:
      "Evet. Mevcut yapının ihtiyaçlarını, kullanım hedefini ve uygulama koşullarını birlikte değerlendirerek uygun yenileme kapsamını belirliyoruz.",
  },
];

const serviceAreas = [
  "Mersin merkezli",
  "Türkiye geneli proje deneyimi",
  "Güneydoğu Anadolu malzeme temini",
];

export default function FaqSection() {
  return (
    <section id="sss" className="bg-[#f5f1e9] py-24 sm:py-32 lg:py-36">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-14">
        <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
          <div>
            <p className="eyebrow">MERAK EDİLENLER</p>
            <h2 className="mt-6 max-w-md font-display text-4xl font-medium leading-[1.05] tracking-[-0.025em] sm:text-5xl">
              Projenize başlamadan{" "}
              <span className="italic text-[#9b6f2e]">önce.</span>
            </h2>
            <p className="mt-7 max-w-sm text-sm leading-7 text-stone-600">
              Sürecin ilk adımlarına dair en sık sorulan soruları kısa ve açık
              şekilde yanıtladık.
            </p>

            <div className="mt-10 border-y border-stone-300 py-7">
              <div className="flex items-center gap-3 text-[#9b6f2e]">
                <MapPin className="h-5 w-5" />
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em]">
                  Çalışma Coğrafyası
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {serviceAreas.map(area => (
                  <span
                    key={area}
                    className="border border-stone-300 bg-white/45 px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-stone-700"
                  >
                    {area}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-xs leading-6 text-stone-500">
                Diğer konumlar proje kapsamı ve saha koşullarına göre
                değerlendirilir.
              </p>
            </div>

            <a
              href="#iletisim"
              className="group mt-8 inline-flex items-center gap-3 text-[0.68rem] font-bold uppercase tracking-[0.15em] text-stone-900"
            >
              Sorunuzu Bize İletin
              <ArrowRight className="h-4 w-4 text-[#9b6f2e] transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <Accordion
            type="single"
            collapsible
            className="border-t border-stone-300"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`faq-${index + 1}`}
                className="border-stone-300"
              >
                <AccordionTrigger className="gap-6 py-6 text-left font-display text-xl font-semibold hover:no-underline sm:py-7 sm:text-2xl">
                  <span className="flex items-start gap-5">
                    <span className="pt-1 text-xs italic text-[#9b6f2e]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pl-10 pr-8 text-sm leading-7 text-stone-600 sm:pl-12">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
