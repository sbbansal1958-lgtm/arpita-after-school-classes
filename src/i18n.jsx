import { createContext, useContext, useEffect, useState } from 'react'
import { content } from './data/content.js'

const LangContext = createContext(null)

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem('arpita-lang')
      return saved === 'en' ? 'en' : 'hi'
    } catch {
      return 'hi'
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem('arpita-lang', lang)
    } catch {
      /* ignore */
    }
    document.documentElement.lang = lang
    document.title = content[lang].metaTitle
  }, [lang])

  return (
    <LangContext.Provider value={{ lang, setLang, t: content[lang] }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}
