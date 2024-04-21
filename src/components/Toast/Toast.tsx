import React from 'react'

interface ToastProps {
	text: string
}

const Toast: React.FC<ToastProps> = ({ text }) => {
	return <div>{text}</div>
}

export default Toast