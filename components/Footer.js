import { useConfig } from '@/lib/config'
import CustomFooterLink from '@/components/CustomFooterLink' 

const Footer = ({ fullWidth }) => {
  const BLOG = useConfig()
  const d = new Date()
  const y = d.getFullYear()
  const from = +BLOG.since
  
  return (
    <footer className={`mt-6 flex-shrink-0 m-auto w-full text-gray-500 dark:text-gray-400 transition-all ${
      !fullWidth ? 'max-w-2xl px-4' : 'px-4 md:px-24'
    }`}>
      <hr className="border-gray-200 dark:border-gray-600" />
      <div className="my-4 text-sm leading-6">
        <div className="flex align-baseline justify-between flex-wrap">
          <p>
            © {BLOG.author} {from === y || !from ? y : `${from} - ${y}`}
          </p>
          <CustomFooterLink />  {/* 替换原来的 <Vercel /> */}
        </div>
      </div>
    </footer>
  )
}

export default Footer
