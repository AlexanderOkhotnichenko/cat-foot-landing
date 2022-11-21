import React from "react";

import { AddCard } from "./AddCard";
import { Card } from "./Card";

import styles from "./styles.module.scss";
import "./custom-aos.scss";

export function Catallog() {
  const [loading, setLoading] = React.useState(true);
  const arrayData = [
    {
      key: 1,
      img: {
        src: "./img/catallog/catalog_1_500.webp",
        alt: "Cat Energy PRO 500 г",
      },
      title: "Cat Energy PRO 500 г",
      info: {
        line_1: {
          title: "Масса",
          description: "1000",
        },
        line_2: {
          title: "Вкус",
          description: "Курица",
        },
        line_3: {
          title: "Цена",
          description: "700",
        },
      },
      button: "заказать",
    },
    {
      key: 2,
      img: {
        src: "./img/catallog/catalog_1_1000.webp",
        alt: "Cat Energy PRO 1000 г",
      },
      title: "Cat Energy PRO 1000 г",
      info: {
        line_1: {
          title: "Масса",
          description: "1000",
        },
        line_2: {
          title: "Вкус",
          description: "Курица",
        },
        line_3: {
          title: "Цена",
          description: "1000",
        },
      },
      button: "заказать",
    },
    {
      key: 3,
      img: {
        src: "./img/catallog/catalog_2_500.webp",
        alt: "Cat Energy PRO 500 г",
      },
      title: "Cat Energy PRO 500 г",
      info: {
        line_1: {
          title: "Масса",
          description: "1000",
        },
        line_2: {
          title: "Вкус",
          description: "Рыба",
        },
        line_3: {
          title: "Цена",
          description: "700",
        },
      },
      button: "заказать",
    },
    {
      key: 4,
      img: {
        src: "./img/catallog/catalog_2_1000.webp",
        alt: "Cat Energy PRO 1000 г",
      },
      title: "Cat Energy PRO 1000 г",
      info: {
        line_1: {
          title: "Масса",
          description: "1000",
        },
        line_2: {
          title: "Вкус",
          description: "Рыба",
        },
        line_3: {
          title: "Цена",
          description: "1000",
        },
      },
      button: "заказать",
    },
    {
      key: 5,
      img: {
        src: "./img/catallog/catalog_3_500.webp",
        alt: "Cat Energy Slim 500 г",
      },
      title: "Cat Energy Slim 500 г",
      info: {
        line_1: {
          title: "Масса",
          description: "500",
        },
        line_2: {
          title: "Вкус",
          description: "Гречка",
        },
        line_3: {
          title: "Цена",
          description: "400",
        },
      },
      button: "заказать",
    },
    {
      key: 6,
      img: {
        src: "./img/catallog/catalog_3_1000.webp",
        alt: "Cat Energy Slim 500 г",
      },
      title: "Cat Energy Slim 1000 г",
      info: {
        line_1: {
          title: "Масса",
          description: "1000",
        },
        line_2: {
          title: "Вкус",
          description: "Гречка",
        },
        line_3: {
          title: "Цена",
          description: "700",
        },
      },
      button: "заказать",
    },
    {
      key: 7,
      img: {
        src: "./img/catallog/catalog_4_500.webp",
        alt: "Cat Energy Slim 500 г",
      },
      title: "Cat Energy Slim 500 г",
      info: {
        line_1: {
          title: "Масса",
          description: "500",
        },
        line_2: {
          title: "Вкус",
          description: "Рис",
        },
        line_3: {
          title: "Цена",
          description: "500",
        },
      },
      button: "заказать",
    },
  ];

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, [loading])

  const renderItems = () => {
    return (
      <>
        {
          arrayData.map((object) => (
            <Card
              key={object.key}
              img={object.img}
              title={object.title}
              info={object.info}
              button={object.button}
              loading={loading}
            />
          ))
        }
        <AddCard />
      </>
    );
  };

  return (
    <section className={styles.page_catallog}>
      <div className={styles.page_catallog__container}>
        <div className={`${styles.page_catallog__content} ${styles.content}`}>
          <div
            className={styles.content__title}
            data-aos="zoom-out"
            data-aos-delay="200"
            data-aos-duration="800"
          >
            <h1>Каталог продукции</h1>
          </div>
          <div className={styles.content__items}>{renderItems()}</div>
        </div>
      </div>
    </section>
  );
}
