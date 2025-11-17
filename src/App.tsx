import { ButtonMobile } from "@alfalab/core-components/button/mobile";

import { Typography } from "@alfalab/core-components/typography";
import image10 from "./assets/image10.png";
import image11 from "./assets/image11.png";
import image12 from "./assets/image12.png";
import image13 from "./assets/image13.png";
import image14 from "./assets/image14.png";
import image15 from "./assets/image15.png";
import image16 from "./assets/image16.png";
import image17 from "./assets/image17.png";
import image18 from "./assets/image18.png";
import image19 from "./assets/image19.png";
import image20 from "./assets/image20.png";
import image21 from "./assets/image21.png";
import image22 from "./assets/image22.png";
import image23 from "./assets/image23.png";
import image24 from "./assets/image24.png";

import big2 from "./assets/big2.png";

import slider2Hero from "./assets/slider2Hero.png";
import background from "./assets/background.png";

import { LS, LSKeys } from "./ls";
import { appSt } from "./style.css";
import { ThxLayout } from "./thx/ThxLayout";
import { Gap } from "@alfalab/core-components/gap";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

type BenefitRowProps = {
  iconSrc: string;
  title: string;
  subtitle: string;
};

const BenefitRow = ({ iconSrc, title, subtitle }: BenefitRowProps) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "1rem",
    }}
  >
    <img src={iconSrc} alt="" width={40} height={40} />
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Typography.Text tag="p" view="primary-small" style={{ marginBottom: 0 }}>
        {title}
      </Typography.Text>
      <Typography.Text
        tag="p"
        view="primary-small"
        color="secondary"
        style={{ marginBottom: 0 }}
      >
        {subtitle}
      </Typography.Text>
    </div>
  </div>
);

export const App = () => {
  const [step, setStep] = useState(0);
  const [thxShow, setThx] = useState(LS.getItem(LSKeys.ShowThx, false));
  const [currentSlide, setCurrentSlide] = useState(1);
  const [img, setImg] = useState("");
  const [price, setPrice] = useState(0);

  const handleClickOne = ({ img, price }: { img: string; price: number }) => {
    window.gtag("event", "6649_get_sub", {
      variant_name: "ghk_6649_1",
    });

    setImg(img);
    setPrice(price);
    setStep(1);
  };

  const handleClickSubmit = () => {
    window.gtag("event", "6649_get_sub_2", {
      variant_name: "ghk_6649_1",
    });

    LS.setItem(LSKeys.ShowThx, true);
    setThx(true);
  };

  if (thxShow) {
    return <ThxLayout />;
  }

  return (
    <>
      {step === 0 && (
        <div className={appSt.container}>
          <Gap size={20} />
          <div style={{ width: "100%" }}>
            <Swiper
              pagination={false}
              modules={[Pagination]}
              className="mySwiper"
              centeredSlides
              centeredSlidesBounds
              spaceBetween={8}
              slidesPerView="auto"
              initialSlide={currentSlide}
              style={{ paddingLeft: "16px", paddingRight: "16px" }}
              onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
            >
              <SwiperSlide
                style={{
                  height: "calc(100dvh - 32px)",
                }}
              >
                <div className={appSt.cardContainer}>
                  <div
                    className={appSt.header}
                    style={{ backgroundColor: "#BA3DD8", paddingRight: "4px" }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div>
                        <Typography.TitleResponsive
                          font="system"
                          tag="h3"
                          view="small"
                          className={appSt.productsTitle}
                          style={{ fontSize: "20px" }}
                        >
                          15 привилегий
                        </Typography.TitleResponsive>
                        <Gap size={4} />
                        <Typography.Text
                          tag="p"
                          view="primary-small"
                          style={{ marginBottom: 0, color: "white" }}
                        >
                          Первый месяц бесплатно, дальше — 399 ₽ в месяц
                        </Typography.Text>
                      </div>
                      <img src={slider2Hero} alt="" width={80} height={80} />
                    </div>
                    <Gap size={24} />
                  </div>

                  <div className={appSt.footer}>
                    <Gap size={32} />
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "1rem",
                      }}
                    >
                      <Typography.Text
                        tag="p"
                        view="primary-medium"
                        style={{ marginBottom: 0, fontWeight: "500" }}
                      >
                        Топ-привилегии
                      </Typography.Text>
                      <div
                        style={{
                          padding: "4px 16px",
                          borderRadius: "16px",
                          backgroundImage: `url(${background})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                        }}
                      >
                        <Typography.Text
                          tag="p"
                          view="primary-small"
                          style={{ marginBottom: 0, color: "white" }}
                        >
                          Рекомендуем
                        </Typography.Text>
                      </div>
                    </div>
                    <Gap size={16} />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                      }}
                    >
                      <BenefitRow
                        iconSrc={image10}
                        title="4 категории кэшбэка"
                        subtitle="Включая 1 популярную категорию"
                      />
                      <BenefitRow
                        iconSrc={image11}
                        title="7 000 ₽ в месяц"
                        subtitle="Лимит кэшбэка в категориях"
                      />
                      <BenefitRow
                        iconSrc={image12}
                        title="2 прокрутки барабана"
                        subtitle="Выше шанс выиграть до 100% кэшбэка"
                      />
                      <BenefitRow
                        iconSrc={image13}
                        title="+2% годовых к ставке по Альфа-Счёту"
                        subtitle="На ежедневный остаток"
                      />
                      <BenefitRow
                        iconSrc={image14}
                        title="Бесплатная мобильная связь"
                        subtitle="100 минут, 3 ГБ и безлимитные мессенджеры"
                      />
                    </div>
                    <Gap size={32} />
                    <div style={{ display: "flex", gap: "1rem" }}>
                      <Typography.Text
                        tag="p"
                        view="primary-large"
                        style={{ marginBottom: 0 }}
                      >
                        Другие привилегии
                      </Typography.Text>
                    </div>
                    <Gap size={16} />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                      }}
                    >
                      <BenefitRow
                        iconSrc={image15}
                        title="Семейный доступ за 300 ₽"
                        subtitle="До 2 участников на уровне"
                      />
                      <BenefitRow
                        iconSrc={image16}
                        title="Эксклюзивный кэшбэк"
                        subtitle="Специальные предложения от партнёров"
                      />
                      <BenefitRow
                        iconSrc={image17}
                        title="0,24% комиссия за сделки на бирже"
                        subtitle="С ценными бумагами и валютой"
                      />
                      <BenefitRow
                        iconSrc={image18}
                        title="Бесплатное обслуживание"
                        subtitle="По дебетовой Альфа-Карте"
                      />
                      <BenefitRow
                        iconSrc={image19}
                        title="Пропуск платежа по кредитной карте"
                        subtitle="Без штрафов и просрочек"
                      />
                      <BenefitRow
                        iconSrc={image20}
                        title="+40 дней без % по кредитной карте"
                        subtitle="Больше времени погасить долг"
                      />
                      <BenefitRow
                        iconSrc={image21}
                        title="Бесплатные переводы без ограничений"
                        subtitle="В любые банки другим людям"
                      />
                      <BenefitRow
                        iconSrc={image22}
                        title="Снятие наличных до 200 000 ₽"
                        subtitle="Без комиссии в любых банках России"
                      />
                      <BenefitRow
                        iconSrc={image23}
                        title="Бесплатные уведомления"
                        subtitle="По дебетовой Альфа-Карте"
                      />
                      <BenefitRow
                        iconSrc={image24}
                        title="Персональная поддержка"
                        subtitle="Выделенная линия в чате"
                      />
                    </div>
                    <Gap size={96} />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      )}

      {step === 0 && (
        <div
          className={appSt.bottomBtn}
          style={{
            padding: "16px",
            marginLeft: "16px",
            marginRight: "16px",
            marginBottom: "12px",
            width: "calc(100% - 32px)",
          }}
        >
          <ButtonMobile
            block
            view="primary"
            onClick={() => handleClickOne({ img: big2, price: 399 })}
          >
            Мне подходит
          </ButtonMobile>
        </div>
      )}

      {step === 1 && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: "white",
            padding: "0 16px",
            height: "calc(100dvh - 140px)",
          }}
        >
          <Gap size={32} />
          <img
            src={img}
            alt=""
            width={264}
            height={264}
            style={{ display: "block", margin: "0 auto" }}
          />
          <Gap size={32} />
          <div>
            <Typography.TitleResponsive
              font="system"
              tag="h3"
              view="medium"
              defaultMargins
            >
              Хотите перейти на уровень Альфа-Смарт?
            </Typography.TitleResponsive>
            <Typography.Text
              tag="p"
              view="primary-medium"
              defaultMargins={false}
            >
              Привилегий станет больше — пользуйтесь ими 1 месяц бесплатно,
              дальше {price} ₽
            </Typography.Text>
          </div>
        </div>
      )}

      {step === 1 && (
        <div className={appSt.bottomBtn}>
          <ButtonMobile
            block
            view="primary"
            onClick={() => handleClickSubmit()}
          >
            Перейти
          </ButtonMobile>
          <Gap size={4} />
          <ButtonMobile block view="secondary" onClick={() => setStep(0)}>
            Вернуться к выбору
          </ButtonMobile>
        </div>
      )}
    </>
  );
};
