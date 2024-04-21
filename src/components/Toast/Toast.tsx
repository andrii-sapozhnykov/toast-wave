import React from 'react'

interface ToastProps {
	text: string
}

const Toast: React.FC<ToastProps> = ({ text }) => {
	return <div>Toast</div>
}

export default Toast