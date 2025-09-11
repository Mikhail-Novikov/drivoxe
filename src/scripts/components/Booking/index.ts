import IBase from '@/components/Base'
import IMask from 'imask'
import { $, type JQuery } from '@/utils/JQuery'
import { type Selectors } from './types'

class RequiredFields extends IBase {
  private form!: JQuery
  private name!: JQuery
  private phone!: JQuery
  private date!: JQuery
  private car!: JQuery

  private readonly selectors: Selectors = {
    form: '[data-js-form]',
    inputName: '#name',
    inputPhone: '#phone',
    inputDate: '#date',
    carSelect: '#select',
    submitButton: '[data-js-button]',
  }

  constructor() {
    super()

    this.init()
  }

  protected init(): void {
    this.form = $(this.selectors.form)
    this.name = $(this.selectors.inputName)
    this.phone = $(this.selectors.inputPhone)
    this.date = $(this.selectors.inputDate)
    this.car = $(this.selectors.carSelect)

    IMask(document.getElementById('phone') as HTMLInputElement, {
      mask: '+7 (000) 000-00-00',
      lazy: true,
    })

    this.bindEvents()
  }

  protected bindEvents(): void {
    this.form.on('submit', (event: Event) => {
      event.preventDefault()

      if (this.validateForm()) {
        this.name.clear()
        this.phone.clear()
        this.date.clear()
        this.car.clear()

        alert('Заявка отправлена, в ближайшее время мы с вами свяжемся, спасибо!')
      } else {
        alert('Заполните все поля!')
      }
    })
  }

  private validateForm(): boolean {
    if (!this.name.val() || !this.phone.val() || !this.date.val() || !this.car.val()) {
      return false
    }
    return true
  }
}

export class Booking extends RequiredFields {
  constructor() {
    super()
  }
}
