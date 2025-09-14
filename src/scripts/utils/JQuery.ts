export class JQuery {
  private readonly rootElement: Element

  constructor(selector: string | Element, rootElement: Element | null = null) {
    if (typeof selector === 'string') {
      if (rootElement) {
        this.rootElement = rootElement.querySelector(selector)!
      } else {
        this.rootElement = document.querySelector(selector)!
      }
    } else {
      this.rootElement = selector
    }

    if (!this.rootElement) {
      throw new Error(`Элемент "${selector}" не найден.`)
    }
  }

  public find(selector: string): JQuery {
    return new JQuery(selector, this.rootElement)
  }

  public findAll(selector: string): JQuery[] {
    const elements: JQuery[] = []

    document.querySelectorAll(selector).forEach(element => {
      elements.push(new JQuery(element))
    })

    if (!elements.length) {
      throw new Error(`Элементы "${selector}" не найдены.`)
    }

    return elements
  }

  public on(action: string, cb: EventListener): JQuery {
    this.rootElement.addEventListener(action, cb)

    return this
  }

  public classToggle(token: string, force?: boolean): JQuery {
    if (force !== undefined) {
      this.rootElement.classList.toggle(token, force)
      return this
    }

    this.rootElement.classList.toggle(token)

    return this
  }

  public classContains(className: string): boolean {
    return this.rootElement.classList.contains(className)
  }

  public classAdd(className: string): JQuery {
    this.rootElement.classList.add(className)

    return this
  }

  public classRemove(className: string): JQuery {
    this.rootElement.classList.remove(className)

    return this
  }

  /**
   * Устанавливает значение атрибута с заданным квалифицированным именем.
   * @param {string} qualifiedName - квалифицированный имя атрибута.
   * @param {string} value - значение атрибута.
   * @returns {JQuery} - объект JQuery.
   */
  public attr(qualifiedName: string, value: string): JQuery {
    this.rootElement.setAttribute(qualifiedName, value)

    return this
  }

  /**
    * Возвращает значение атрибута данных с заданным ключом.
   * @param {string} key - ключ атрибута данных.
   * @returns {string | null} Значение атрибута данных или null, если он не существует.
   */
  public data(key: string): string | null {
    return this.rootElement.getAttribute(`data-${key}`);
  }

  public focus(): JQuery {
    ;(this.rootElement as HTMLElement).focus()

    return this
  }

  public play(): JQuery {
    const videoElement = this.rootElement as HTMLVideoElement

    videoElement.play().then()
    videoElement.controls = true

    return this
  }

  public pause(): JQuery {
    const videoElement = this.rootElement as HTMLVideoElement

    videoElement.pause()
    videoElement.controls = false

    return this
  }

  public getElement(): Element {
    return this.rootElement
  }

  public val(): string {
    switch (this.rootElement.tagName.toLowerCase()) {
      case 'input':
      case 'textarea':
        return (this.rootElement as HTMLInputElement).value || '';
      case 'select':
        return (this.rootElement as HTMLSelectElement).value || '';
      default:
        throw new Error('Невозможно извлечь значение для данного элемента.');
    }
  }
  /**
   * Установка значения для поля ввода или выпадающего списка.
   *
   * @param {string} value - значение которое будет установлено
   * @returns {JQuery} - объект JQuery
   * @throws {Error} - если элемент не является полем ввода или выпадающим списком
   */
  public setValue(value: string): JQuery {
    switch (this.rootElement.tagName.toLowerCase()) {
      case 'input':
      case 'textarea':
        (this.rootElement as HTMLInputElement).value = String(value); // Преобразование к строке
        break;
      case 'select':
        (this.rootElement as HTMLSelectElement).value = String(value); // Установка выбранного значения
        break;
      default:
        throw new Error('Невозможно установить значение для данного элемента.');
    }
    return this;
  }

  public clear(): JQuery {
    switch (this.rootElement.tagName.toLowerCase()) {
      case 'input':
      case 'textarea': // Поле ввода текста или textarea
        (this.rootElement as HTMLInputElement).value = '';
        break;
      case 'select':   // Выпадающий список
        (this.rootElement as HTMLSelectElement).selectedIndex = -1;
        break;
      default:
        throw new Error('Невозможно очистить данное поле.');
    }
    return this;
  }
}

export const $ = (selector: string | Element): JQuery => {
  return new JQuery(selector)
}
