import IBase from '@/components/Base'
import IMask from 'imask'
import { $, type JQuery } from '@/utils/JQuery'
import { type Selectors } from './types'

/** Компонент бронирования */
export class Booking extends IBase {
  private form!: JQuery
  private name!: JQuery
  private phone!: JQuery
  private date!: JQuery
  private car!: JQuery

  public selectors: Selectors = {
    form: '[data-js-form]',
    inputName: '#name',
    inputPhone: '#phone',
    inputDate: '#date',
    carSelect: '#select',
    carsContainer: '.cars__container',
  }

  /**
   * Конструктор класса Booking.
   * Вызывает метод init() для инициализации компонента.
   */
  constructor() {
    super()

    this.init()
  }

  /**
   * Метод инициализации.
   * Он привязывает все формы и поля ввода, инициализирует маску для поля ввода телефона
   * и привязывает обработчик события клика на карту.
   */
  protected init(): void {
    this.form = $(this.selectors.form)
    this.name = $(this.selectors.inputName)
    this.phone = $(this.selectors.inputPhone)
    this.date = $(this.selectors.inputDate)
    this.car = $(this.selectors.carSelect)

    // инициализируем маску для поля телефона
    IMask(document.getElementById('phone') as HTMLInputElement, {
      mask: '+7 (000) 000-00-00',
      lazy: true,
    })

    this.bindEvents()
    this.bindCardClickEvent()
  }

  /**
   * Задает выбранный вариант автомобиля в селект.
   * */
  public setCar(value: string): void {
    // выбираем нужный вариант
    const select = document.getElementById('select') as HTMLSelectElement
    const option = select?.options

    // присваиваем выбранный вариант
    for (let i = 0; i < option.length; i++) {
      if (option[i].value === value) {
        option.selectedIndex = i
        break
      }
    }
  }

  /**
   * Метод установливает выбранный автомобиль в форме.
   */
  private bindCardClickEvent(): void {
    document.querySelector(this.selectors.carsContainer)?.addEventListener('click', event => {
      if (!(event.target instanceof HTMLElement)) return
      // находим ближайший элемент, у которого есть атрибут data-car-name
      const target: HTMLElement = event.target
      const targetEl = target.closest('[data-car-name]')
      if (!targetEl) return

      // устанавливаем выбранный автомобиль
      const selectedCar = (targetEl as HTMLElement).dataset.carName
      if (selectedCar) {
        // передаем выбранный автомобиль в селект
        this.setCar(selectedCar)
      }
    })
  }

  /**
   * Метод проверяет заполнены всех полей и
   * если все поля заполнены,
   * очищает поля и выводит уведомление.
   */
  protected bindEvents(): void {
    this.form.on('submit', (event: Event) => {
      event.preventDefault()

      if (this.validateForm()) {
        alert('Заявка отправлена, в ближайшее время мы с вами свяжемся, спасибо!');

        // очищаем поля
        const fieldsToClear = [this.name, this.phone, this.date, this.car];
        fieldsToClear.forEach(field => field.setValue(''));

        // отписываемся от события
        document.removeEventListener('click', this.bindCardClickEvent);
      } else {
        alert('Все поля обязательны для заполнения.');
      }
    })
  }

  /**
   * Проверка полей формы.
   * @returns {boolean}
   */
  private validateForm(): boolean {
    // проверяем, что все поля заполнены
    if (!this.name.val() || !this.phone.val() || !this.date.val() || !this.car.val()) {
      return false
    }
    return true
  }
}
