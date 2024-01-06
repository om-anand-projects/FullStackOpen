const Notification = (message, className) => {
  if (message === null) {
    return null
  }

  return (
    <div className={className}>
      {message}
    </div>
  )
}

export const ErrorNotification = ({ message }) => Notification(message, 'error')

export const SuccessNotification = ({ message }) => Notification(message, 'success')
