'use client';
import { Button, Input } from '@/shared/ui';
import { useState } from 'react';
import { IForm } from './types';
import Toast from '@/shared/ui/toast/ui';

const url: string = 'https://api.telegram.org/';
// ТУТ нужно вставить ссылку на телеграм бот или же на потчу чтобы мы настроили куда отправлять сообщения

export const Form = () => {
  const [form, setForm] = useState<IForm>({
    name: '',
    email: '',
    phone: '',
    question: '',
    consent: false,
  });
  const [isDisabled, setIsDisabled] = useState<boolean>(
    !Boolean(form.name && form.email && form.email.includes('@'))
  );

  const [isShowToast, setIsShowToast] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, type } = event.target;
    const value =
      type === 'checkbox'
        ? (event.target as HTMLInputElement).checked
        : event.target.value;

    setForm((prevForm) => {
      const updatedForm = { ...prevForm, [name]: value };

      // Проверяем, заполнены ли все поля + отмечен ли чекбокс
      const isFormValid =
        updatedForm.name.trim() !== '' &&
        updatedForm.email.trim() !== '' &&
        updatedForm.email.includes('@') &&
        updatedForm.phone.trim() !== '' &&
        updatedForm.consent; // Чекбокс должен быть true

      setIsDisabled(!isFormValid);
      return updatedForm;
    });
  };

  const handleSubmit = (): void => {
    const message = `<b>Имя: \n <i>${form.name}</i></b>\n<b>Телефон: \n <i>${form.phone}</i></b>\n <b>E-mail: \n <i>${form.email}</i></b>\n <b>Вопрос: \n <i>${form.question}</i></b>`;
    fetch(`${url}=${encodeURIComponent(message)}&parse_mode=html`, {
      method: 'POST',
      body: message,
    })
      .then(() => {
        setForm({
          name: '',
          email: '',
          question: '',
          phone: '',
          consent: false,
        });
        setIsDisabled(true);
        setIsShowToast(true);
      })
      .then(() => setTimeout(() => setIsShowToast(false), 3000));
  };

  return (
    <section id="form" className="bg-white">
      <div className="bg-image flex h-auto min-h-screen w-full items-center justify-center rounded-tl-[40px] rounded-tr-[40px] md:min-h-[70vh] md:rounded-3xl md:rounded-b-none">
        <div className="container flex items-start justify-between md:flex-col md:gap-8">
          <div className="flex w-[50%] flex-col gap-3 text-black md:w-full md:gap-2">
            <h2 className="text-[64px] leading-[80px] xl:text-[54px] xl:leading-[70px] lg:text-[44px] md:text-3xl">
              Связаться с нами
            </h2>
            <p className="text-xl md:text-sm">
              Оставьте заявку и мы свяжемся с вами, чтобы обсудить детали вашего
              проекта
            </p>
          </div>
          <section className="flex w-[40%] flex-col gap-8 md:w-full md:gap-6">
            <Input
              name="name"
              label="Имя и фамилия"
              placeholder="Введите ваше имя"
              value={form.name}
              onChange={handleChange}
            />
            <Input
              type="number"
              name="phone"
              label="Телефон"
              placeholder="Введите номер телефона"
              value={form.phone}
              onChange={handleChange}
            />
            <Input
              type="email"
              name="email"
              label="E-mail"
              placeholder="Введите Ваш E-mail"
              value={form.email}
              onChange={handleChange}
            />
            <Input
              type="textarea"
              name="question"
              label="Ваш вопрос"
              placeholder="Введите Ваш вопрос"
              value={form.question}
              onChange={handleChange}
            />

            <div className="flex items-center gap-2">
              <Input
                type="checkbox"
                name="consent"
                checked={form.consent}
                onChange={handleChange}
                className="h-5 w-5 cursor-pointer"
                placeholder={''}
              />

              <label
                htmlFor="consent"
                className="cursor-pointer text-sm text-white"
              >
                Я согласен на обработку моих{' '}
                <a
                  href="/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  персональных данных
                </a>
              </label>
            </div>

            <Button
              onClick={handleSubmit}
              type="submit"
              color="secondary"
              className="!bg-blue/90 !py-4 !text-[16px] !text-white md:rounded-xl"
              disabled={isDisabled}
            >
              Отправить заявку
            </Button>
          </section>
        </div>
      </div>
      {isShowToast && (
        <Toast
          type="success"
          message="Спасибо что выбрали нас, Наши менеджеры свяжутся с вами в ближайшее время."
        />
      )}
    </section>
  );
};
