import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { CiWarning } from "react-icons/ci";

import { TitleContainer } from "../TitleContainer";

import { NameTitleInput } from "./NameTilteInput/";
import { Input } from "./Input";
import { Radio } from "./Radio";
import { Textarea } from "./Textarea";
import { Checkbox } from "./Checkbox";
import { PrimaryButton } from "./PrimaryButton";

import styles from "./styles.module.scss";

export function Form() {
  const schema = yup.object().shape({
    firstName: yup
      .string()
      .matches(/^([^0-9]*)$/gm, "Только буквы.")
      .required("Поле должно быть заполнено."),
    weight: yup
      .string()
      .required("Поле должно быть заполнено.")
      .matches(/^(\d{1,2})$/g, "Не больше двух чисел."),
    email: yup
      .string()
      .required("Поле должно быть заполнено.")
      .matches(
        /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,3}$/g,
        "Укажите правильный почтовый ящик. Пример: email@test.com"
      ),
    telephone: yup
      .string()
      .required("Поле должно быть заполнено.")
      .matches(
        /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{11,13}$/g,
        "Укажите правильный номер телефона. Пример: 8 (960) 900-60-90"
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      firstName: "",
      weight: "",
      age: "",
      email: "",
      telephone: "",
      service: "",
      comment: "",
      sweetener: false,
      water: false,
      milk: false,
      vitamins: false,
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {
    reset();
    Swal.fire(
      `${"Спасибо за заказ!"}`,
      `${"Данные переданы в отдел обработки"}`,
      "success"
    );
  };
  return (
    <div className={styles.page_form}>
      <div className={styles.page_form__container}>
        <div className={`${styles.page_form__content} ${styles.content}`}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className={styles.form}
          >
            <h1 className={styles.form__title} data-aos="fade-right" data-aos-delay="200" data-aos-duration="800">Подбор программы</h1>
            <p className={styles.form__description} data-aos="fade-right" data-aos-delay="300" data-aos-duration="800">
              Заполните анкету, и мы подберем программу питания для вашего кота
            </p>
            <div className={styles.form__input_container}>
              <div
                className={`${styles.form__content_data} ${styles.content_data}`}
              >
                <div className={styles.content_data__wrapper} data-aos="zoom-in" data-aos-delay="300" data-aos-duration="800">
                  <div className={styles.content_data__content}>
                    <div className={styles.content_data__wrapper_input}>
                      <NameTitleInput title="Имя:*" />
                      <Input
                        {...register("firstName")}
                        className={
                          errors?.firstName ? "form-input error" : "form-input"
                        }
                        id="firstName"
                        type="text"
                        placeholder="Имя"
                        label="First Name"
                        name="firstName"
                      />
                      <svg className={styles.form_input_icon}>
                        <use xlinkHref="https://alexanderokhotnichenko.github.io/cat-foot-landing/sprites.svg#email"></use>
                      </svg>
                    </div>
                    {errors?.firstName && (
                      <div className={styles.error}>
                        <CiWarning />
                        <span>{errors.firstName?.message}</span>
                      </div>
                    )}
                  </div>
                  <div className={styles.content_data__content}>
                    <div className={styles.content_data__wrapper_input}>
                      <NameTitleInput title="Вес (кг):*" />
                      <Input
                        {...register("weight")}
                        className={
                          errors?.weight ? "form-input error" : "form-input"
                        }
                        id="weight"
                        type="number"
                        placeholder="Вес"
                        label="Weight"
                        name="weight"
                      />
                    </div>
                    {errors?.weight && (
                      <div className={styles.error}>
                        <CiWarning />
                        <span>{errors.weight?.message}</span>
                      </div>
                    )}
                  </div>
                  <div className={styles.content_data__content}>
                    <div className={styles.content_data__wrapper_input}>
                      <NameTitleInput title="Возраст (лет):" />
                      <Input
                        {...register("age")}
                        className="form-input"
                        id="age"
                        type="number"
                        placeholder="Возраст"
                        label="Age"
                        name="age"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.content_data__wrapper} data-aos="zoom-in" data-aos-delay="300" data-aos-duration="800">
                  <div className={styles.content_data__content}>
                    <div className={styles.content_data__wrapper_radio}>
                      <Radio
                        {...register("service")}
                        defaultChecked
                        type="radio"
                        id="width-loss"
                        htmlFor="width-loss"
                        name="service"
                        value="width-loss"
                        className="form-input-radio"
                        title="похудение"
                      />
                    </div>
                    <div className={styles.content_data__wrapper_radio}>
                      <Radio
                        {...register("service")}
                        type="radio"
                        id="mass-gain"
                        htmlFor="mass-gain"
                        name="service"
                        value="mass-gain"
                        className="form-input-radio"
                        title="Набор массы"
                      />
                    </div>
                    <div className={styles.content_data__wrapper_radio}>
                      <Radio
                        {...register("service")}
                        type="radio"
                        id="dont-know"
                        htmlFor="dont-know"
                        name="service"
                        value="dont-know"
                        className="form-input-radio"
                        title="Не знаю (Нужен ваш совет)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`${styles.form__content_container_data} ${styles.content_container_data}`}
              >
                <TitleContainer title="Контактные данные (владельца кота)" />
                <div className={styles.form__content_content_data} data-aos="zoom-in" data-aos-delay="300" data-aos-duration="800">
                  <div className={styles.content_content_data__wrapper}>
                    <div className={styles.content_content_data__input}>
                      <NameTitleInput title="E-mail:*" />
                      <Input
                        {...register("email")}
                        className={
                          errors?.email ? "form-input error" : "form-input"
                        }
                        id="email"
                        type="email"
                        placeholder="E-mail"
                        label="email"
                        name="email"
                      />
                      <svg>
                        <use xlinkHref="https://alexanderokhotnichenko.github.io/cat-foot-landing/sprites.svg#email"></use>
                      </svg>
                    </div>
                    {errors?.email && (
                      <div className={styles.error}>
                        <CiWarning />
                        <span>{errors.email?.message}</span>
                      </div>
                    )}
                  </div>
                  <div className={styles.content_content_data__wrapper}>
                    <div className={styles.content_content_data__input}>
                      <NameTitleInput title="Телефон:*" />
                      <Input
                        {...register("telephone")}
                        className={
                          errors?.telephone ? "form-input error" : "form-input"
                        }
                        id="telephone"
                        type="tel"
                        placeholder="8 (960) 900-60-90"
                        label="telephone"
                        name="telephone"
                      />
                      <svg>
                        <use xlinkHref="https://alexanderokhotnichenko.github.io/cat-foot-landing/sprites.svg#telephone"></use>
                      </svg>
                    </div>
                    {errors?.telephone && (
                      <div className={styles.error}>
                        <CiWarning />
                        <span>{errors.telephone?.message}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div
                className={`${styles.form__content_data} ${styles.content_data}`}
              >
                <div className={styles.form__content_data_textarea}>
                  <TitleContainer title="Комментарий" />
                  <div className={`${styles.content_data__wrapper} ${styles.wrapper_textarea}`} data-aos="zoom-in" data-aos-delay="300" data-aos-duration="800">
                    <Textarea
                      {...register("comment")}
                      type="textarea"
                      id="comment"
                      htmlFor="comment"
                      name="comment"
                      placeholder="Расскажите обо всех повадках кота"
                      className="form-input-textarea"
                    />
                  </div>
                </div>
              </div>
              <div
                className={`${styles.form__content_data} ${styles.content_data}`}
              >
                <div className={styles.form__content_data_checkbox}>
                  <TitleContainer title="Дополнительно" />
                  <div
                    className={`${styles.content_data__wrapper} ${styles.wrapper_checkbox}`}
                  >
                    <div className={styles.content_data_checkbox__item} data-aos="zoom-in" data-aos-delay="200" data-aos-duration="800">
                      <Checkbox
                        {...register("sweetener")}
                        type="checkbox"
                        id="sweetener"
                        htmlFor="sweetener"
                        name="sweetener"
                        className="form-input-checkbox"
                        title="сахарозаменитель"
                      />
                    </div>
                    <div className={styles.content_data_checkbox__item} data-aos="zoom-in" data-aos-delay="300" data-aos-duration="800">
                      <Checkbox
                        {...register("water")}
                        type="checkbox"
                        id="water"
                        htmlFor="water"
                        name="water"
                        className="form-input-checkbox"
                        title="питьевая вода"
                      />
                    </div>
                    <div className={styles.content_data_checkbox__item} data-aos="zoom-in" data-aos-delay="400" data-aos-duration="800">
                      <Checkbox
                        {...register("milk")}
                        type="checkbox"
                        id="milk"
                        htmlFor="milk"
                        name="milk"
                        className="form-input-checkbox"
                        title="молоко"
                      />
                    </div>
                    <div className={styles.content_data_checkbox__item} data-aos="zoom-in" data-aos-delay="500" data-aos-duration="800">
                      <Checkbox
                        {...register("vitamins")}
                        type="checkbox"
                        id="vitamins"
                        htmlFor="vitamins"
                        name="vitamins"
                        className="form-input-checkbox"
                        icon="./sprites.svg#check"
                        title="витамины"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.content__submit}>
                <PrimaryButton type="submit">отправить заявку</PrimaryButton>
                <div className={styles.content__submit_description} data-aos="fade-left" data-aos-delay="200" data-aos-duration="800">
                  * — Обязательные поля
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
