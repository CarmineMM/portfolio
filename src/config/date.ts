import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import 'dayjs/locale/es'
import 'dayjs/locale/en'

dayjs.extend(utc)

// Formato de fecha para Español e Inglés (US)
export const formatDateUsing = {
    es: 'dd/MM/yyyy',
    en: 'MM/dd/yyyy',
}

export default dayjs
