import IBase from '@/components/Base'
import { $, type JQuery } from '@/utils/JQuery'
import { Selectors } from './types'

/** Компонент кнопки с эффектом вспышки */
export default class Button extends IBase {
  private buttonsElements: JQuery[] = [];

  private readonly selectors: Selectors = {
    button: '[data-js-button-animated]',
  }

  protected init() {
    this.bindEvents()
  }

  /**
   * @constructor
   * @this {Button}
   * @description
   *   Конструктор класса.
   *   Инициализирует properties, ищет все кнопки на странице
   *   с атрибутом data-js-button-animated, инициализирует кнопки, и
   *   привязывает обработчик события клика.
   */
  constructor() {
    super()
    const $button = $(this.selectors.button)

    this.buttonsElements = $button.findAll(this.selectors.button)

    this.init()
  }

  /**
   * Обработчик события клика на кнопку.
   * @function
   * @private
   * @this {Button}
   * @param {Event} event - событие
   * @param {HTMLElement} target - целевой эелемент
   * @return {void}
   */
  protected bindEvents(): void {
    this.buttonsElements.forEach(element => {
      element.on('click', (event: Event): void => {
        // event.preventDefault()
        const mouseEvent = event as MouseEvent
        const target = mouseEvent.target as HTMLElement
        this.rippleEffect(mouseEvent, target)
      })
    })
  }

  /**
   * Создает эффект вспышки (ripple) на кнопке
   * @function
   * @private
   * @this {Button}
   * @param {MouseEvent} event - событие
   * @param {HTMLElement} target - целевой эелемент
   * @return {void}
   */
  private rippleEffect(event: MouseEvent, target: HTMLElement): void {
    const span = document.createElement('span')
    const rect = target.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const x = event.clientX - rect.left - size / 2
    const y = event.clientY - rect.top - size / 2

    span.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      left: ${x}px;
      top: ${y}px;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.3);
      transform: scale(0);
      animation: ripple 0.6s ease-out forwards;
    `

    target.setAttribute('style', 'position: relative; overflow: hidden;')

    target.appendChild(span)

    setTimeout(() => {
      span.remove()
    }, 600)
  }
}
