import { useState, useEffect } from 'react'

const EncryptedContent = ({ password, children }) => {
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [inputPassword, setInputPassword] = useState('')
  const [error, setError] = useState(false)
  
  // 检查本地存储中是否已解锁
  useEffect(() => {
    const unlockedPasswords = JSON.parse(localStorage.getItem('unlockedPasswords') || '{}')
    if (unlockedPasswords[password]) {
      setIsUnlocked(true)
    }
  }, [password])
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputPassword === password) {
      setIsUnlocked(true)
      setError(false)
      
      // 将密码保存到本地存储中，这样用户下次访问不需要重新输入
      const unlockedPasswords = JSON.parse(localStorage.getItem('unlockedPasswords') || '{}')
      unlockedPasswords[password] = true
      localStorage.setItem('unlockedPasswords', JSON.stringify(unlockedPasswords))
    } else {
      setError(true)
    }
    setInputPassword('')
  }
  
  if (isUnlocked) {
    return <div className="my-4">{children}</div>
  }
  
  return (
    <div className="my-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
      <div className="flex items-center mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
        <span className="text-gray-700 dark:text-gray-300 font-medium">加密内容</span>
      </div>
      
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <input
          type="password"
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
          placeholder="输入密码查看内容"
          className="flex-grow px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          解锁
        </button>
      </form>
      
      {error && (
        <p className="mt-2 text-red-500 text-sm">密码错误，请重试</p>
      )}
    </div>
  )
}

export default EncryptedContent
