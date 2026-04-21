'use client';

import { motion } from 'framer-motion';

type Review = {
  name: string;
  date: string;
  text: string;
};

const REVIEWS: Review[] = [
  {
    name: 'Ева Даниелян',
    date: '26 декабря 2025',
    text: 'Ох, девочки, просто не могу молчать) побывала у косметолога Марины, и это чудо какое-то! Сначала переживала, честно, столько всего перепробовала, и ничего не помогало как следует. А Марина вообще врач от бога! Сразу видно, что любит своё дело.'
  },
  {
    name: 'Татьяна О.',
    date: '20 января',
    text: 'Хожу к Марине уже несколько лет, а точнее 7, доверяю свое лицо только ей. Марина очень ответственно подходит к работе, советует по делу, аккуратно проводит процедуры, оставляя минимальное количество следов.'
  },
  {
    name: 'Инкогнито',
    date: '23 января',
    text: 'Граммотный, опытный, компетентный специалист. Подберёт процедуру, учитывая индивидуальные особенности вашего лица. Можно смело положиться в руки данному Специалисту. Хорошо знает свою работу, выполнит ваш запрос только операясь на медико-косметологические знания.'
  },
  {
    name: 'Елена М.',
    date: '28 января',
    text: 'Здравствуйте хотела бы выразить благодарность косметологу Марине Каревой! К Мариночке я хожу более 10 лет и ни разу не пожалела что когда-то к ней попала по рекомендации одноклассницы! Мариночка очень грамотный специалист своего дела, всегда следит за новинками в индустрии.'
  },
  {
    name: 'Елена Сальная',
    date: '20 марта',
    text: 'К Марине я хожу 10 лет и доверяю ей свое лицо так как она грамотный специалист, постоянно учится новому, у нас с ней всегда распланированы процедуры посезонно и я благодарна ей за честные рекомендации и свою долгую молодость.'
  },
  {
    name: 'Марина Д.',
    date: '26 декабря 2025',
    text: 'Хочу выразить искреннюю благодарность Марине за высокий профессионализм и внимательное отношение. Процедуры проводятся аккуратно, все рекомендации по уходу объясняются подробно. Хожу к Марине не первый раз уже) Рекомендую всем, кто ценит качество и заботу о здоровье кожи.'
  },
  {
    name: 'Таня Р.',
    date: '28 марта',
    text: 'Марина — потрясающий мастер. Чуткий и внимательный профессионал своего дела. Делаю не первый год процедуру ботекса и увеличения губ — качеством услуг довольна на 100 баллов.'
  },
  {
    name: 'Владимир Карев',
    date: '22 января',
    text: 'Обратился к Марине Викторовне с проблемой морщин. Профессионально, корректна. Результатом доволен, планирую в дальнейшем и другие процедуры, которые были рекомендованы. Спасибо.'
  },
  {
    name: 'Светлана Федоровская',
    date: '16 сентября 2025',
    text: 'Замечательный косметолог с золотыми руками! В прошлом году в течение недели ежедневно проходила различные процедуры (маски, массаж, аппаратный пилинг). В этом году я снова приехала в Ессентуки и опять пришла к Марине за её волшебством! Очень внимательный мастер.'
  },
  {
    name: 'Юлия',
    date: '23 января',
    text: 'Прекрасный специалист, профи своего дела, великолепный мастер, супер красотка, рекомендую!!!!'
  }
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-accent">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="relative py-14 md:py-16 bg-gradient-to-b from-blush-soft/50 via-[#f5ead8] to-[#efe1cb] dark:from-dark-surface dark:via-dark-bg dark:to-dark-surface-2 overflow-hidden"
    >
      <span
        aria-hidden="true"
        className="absolute top-20 left-10 w-80 h-80 rounded-full bg-blush-soft/40 dark:bg-accent/10 blur-3xl pointer-events-none"
      />
      <span
        aria-hidden="true"
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent/10 dark:bg-blush/10 blur-3xl pointer-events-none"
      />

      <div className="relative mx-auto max-w-7xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-10"
        >
          <p className="text-[11px] tracking-[0.45em] uppercase text-accent mb-3">Отзывы</p>
          <h2 className="font-serif text-4xl md:text-5xl mb-3 text-ink dark:text-dark-text">
            Что говорят <span className="italic text-accent">клиенты</span>
          </h2>
          <div className="flex items-center justify-center gap-2 text-muted dark:text-dark-muted text-sm">
            <Stars />
            <span>5.0</span>
          </div>
        </motion.div>

        <motion.div
          className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
        >
          {REVIEWS.map((r) => (
            <motion.article
              key={r.name + r.date}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
              }}
              className="relative break-inside-avoid mb-5 bg-white dark:bg-dark-surface border border-accent/15 dark:border-dark-border rounded-sm p-5 hover:border-accent/50 dark:hover:border-accent/60 hover:shadow-lg hover:shadow-accent/10 transition-all duration-500"
            >
              <span
                aria-hidden="true"
                className="absolute -top-3 left-5 font-serif text-5xl leading-none text-accent/30 dark:text-accent/40 select-none"
              >
                “
              </span>
              <div className="flex items-start justify-between mb-2 gap-3 pt-1">
                <div>
                  <h3 className="font-serif text-base leading-tight text-ink dark:text-dark-text">{r.name}</h3>
                  <p className="text-[11px] text-muted dark:text-dark-muted mt-0.5">{r.date}</p>
                </div>
                <Stars />
              </div>
              <p className="text-[13px] text-ink/80 dark:text-dark-text/80 leading-relaxed">{r.text}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
