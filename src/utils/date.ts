const pad0 = (n: number, len: number) => n.toString().padStart(len, '0')

const padZero = (n: number, len: number = 2) => n.toString().padStart(len, '0')


export const dateToTimeString = (date: Date): string =>
  [padZero(date.getHours()), padZero(date.getMinutes())].join(':')

export const dateToDateString = (date: Date, separator = '/'): string =>
  [date.getFullYear(), date.getMonth() + 1, date.getDate()].join(separator)


export const dateToDateTimeString = (date: Date, separator = '/'): string =>
  `${dateToDateString(date, separator)} ${dateToTimeString(date)}`


export function formatDate(raw: string) {
  const date = new Date(raw)
  date.setUTCHours(12)
  return {
    time: +date,
    datetimeString: dateToDateString(date, '-'),
    string: date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }
}

const LOCALE = 'en-GB'

export const formatter = {

  /**
   * Example: 10 November 2023 at 18:34
   */
  'longdate-shorttime': new Intl.DateTimeFormat(LOCALE, {
    dateStyle: 'long',
    timeStyle: 'short',
  }),

  /**
   * Example: 10 November 2023
   */
  longdate: new Intl.DateTimeFormat(LOCALE, {
    dateStyle: 'long',
  }),

  /**
   * Example: 10 November
   */
  yearless: new Intl.DateTimeFormat(LOCALE, {
    day: 'numeric',
    month: 'long',
  }),

  /**
   * Example: 18:34
   */
  shorttime: new Intl.DateTimeFormat(LOCALE, {
    timeStyle: 'short',
  }),
}
