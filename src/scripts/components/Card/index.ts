import Base from '@/components/Base'
import { Selectors } from './types';
export default class Card extends Base {
  private observer: IntersectionObserver | null;
  private readonly options = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

  private readonly selectors: Selectors = {
    card: '.car-card, .feature',
  }


  constructor() {
    super()

    this.observer = null
    this.init()
  }

/**
   * Метод инициализации.
   *
   * Он вызывает два метода:
   * 1. bindEvents - привязывает все события к компонентам.
   * 2. createObserver - создает наблюдателя за пересечениями, который отображает карточки
   *, когда они появляются в окне просмотра.
   */
  override init() {
    this.bindEvents()
  }

  override bindEvents() {
    this.createObserver()
  }

/**
   * Метод создает для компонентов карт observer.
   * Анимация определяется в CSS и запускается, когда компонент пересекается с окном просмотра.
   *
   * @private
   */
  createObserver() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            entry.target.classList.add('animate-emersion');
          } else {
            entry.target.classList.remove('animate-emersion');
          }
        });
      },
      this.options
    );

    const animatedElements: NodeListOf<HTMLElement> =
      document.querySelectorAll(this.selectors.card);

    animatedElements.forEach((el: HTMLElement): void => {
      this.observer?.observe(el);
    });
  }

  override updateUI() {
    console.log('UI updated!')
  }
}
