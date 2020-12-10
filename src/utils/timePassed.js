export const timePassed = (date) => {
  const now = new Date().getTime()
  const milisseconds = now - date
  const minutes = milisseconds * 1.6667E-5
  const hours = Math.floor(milisseconds/(1000 * 60 * 60))
  const days = Math.floor(hours/24)
  const months = Math.floor(days/30)

  if (minutes < 1) {
    return `menos de um minuto atrás`
  } else if (hours < 1) {
    return `${Math.ceil(minutes)} minutos atrás`
  } else if (hours === 1) {
    return `${hours} hora atrás`
  } else if (hours < 24) {
    return `${hours} horas atrás`
  } else if (days === 1) {
    return `${days} dia atrás`
  } else if (days < 30) {
    return `${days} dias atrás`
  } else if (months === 1) {
      return `${months} mês atrás`
  } else if (months > 1) {
    return `${months} meses atrás`
  }
}