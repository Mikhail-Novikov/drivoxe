import { Selectors } from "./types";

/** Класс компонента HeaderItem реализует поведение Header при скролле */
class HeaderScroll {
  private element: HTMLElement | null;
  private lastScrollY: number;

  private readonly elementClassName: Selectors = {
    headerScroll: '.header',
  }

  constructor() {
    this.element = document.querySelector(this.elementClassName.headerScroll);
    this.lastScrollY = window.scrollY;

    this.init()
  }

  protected init(): void {
    this.bindEvents()
  }
  protected bindEvents(): void {
    this.attachScrollEffect()
  }

  attachScrollEffect() {
    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 100) {
        this.element?.classList.add('animate-color-header');
      } else {
        this.element?.classList.remove('animate-color-header');
      }

      this.lastScrollY = currentScrollY;
    });
  }
}

/** Класс компонента HeaderItem */
class HeaderItem extends HeaderScroll {
  constructor() {
    super();
  }
}

/** Компонент Header */
export default class Header extends HeaderItem {}