import BLOG from '@/blog.config'
import { useLocale } from '@/lib/locale'

const Footer = ({ fullWidth }) => {
  const locale = useLocale()
  const d = new Date()
  const y = d.getFullYear()
  const from = +BLOG.since
  return (
    <div
      className={`mt-6 flex-shrink-0 m-auto w-full text-gray-500 dark:text-gray-400 transition-all ${
        !fullWidth ? 'max-w-2xl px-4' : 'px-4 md:px-24'
      }`}
    >
      <hr className="border-gray-200 dark:border-gray-600" />
      <div className="my-4 text-sm leading-6">
        <div className="flex align-baseline justify-between flex-wrap">
          <p>
            {BLOG.author} © {from === y || !from ? y : `${from} - ${y}`}
          </p>
          {/* 删除或注释下面这段代码，这就是显示右下角标志的部分 */}
          {/* <a
            href="https://github.com/craigary/nobelium"
            target="_blank"
            rel="noreferrer"
          >
            Powered by Nobelium
          </a> */}
        </div>
      </div>
    </div>
  )
}

export default Footer
