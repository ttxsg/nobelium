import BLOG from '@/blog.config'

const Footer = ({ fullWidth }) => {
  const d = new Date()
  const y = d.getFullYear()
  const from = +BLOG.since
  
  return (
    <footer className={`mt-6 flex-shrink-0 m-auto w-full text-gray-500 dark:text-gray-400 transition-all ${
      !fullWidth ? 'max-w-2xl px-4' : 'px-4 md:px-24'
    }`}>
      <hr className="border-gray-200 dark:border-gray-600" />
      <div className="my-4 text-center text-sm">
        <p>© {BLOG.author} {from === y || !from ? y : `${from} - ${y}`}</p>
      </div>
    </footer>
  )
}

export default Footer
