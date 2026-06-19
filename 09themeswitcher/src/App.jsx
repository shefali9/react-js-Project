import { useEffect, useState } from 'react'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/ThemeBtn'

function App() {
  const [themeMode, setThemeMode] = useState('light')

  const lightTheme = () => {
    setThemeMode('light')
  }

  const darkTheme = () => {
    setThemeMode('dark')
  }

 useEffect(() => {
  document.documentElement.classList.remove("light", "dark")
  document.documentElement.classList.add(themeMode)
  console.log("Theme changed:", themeMode)
}, [themeMode])

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="min-h-screen bg-white dark:bg-gray-900 duration-200">
        <div className="w-full max-w-sm mx-auto flex justify-end pt-8">
          <ThemeBtn />
        </div>

        <div className="w-full max-w-sm mx-auto mt-10 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg duration-200">
          <img
            src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
            alt="Food"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />

          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Delicious Food
          </h1>

          <p className="mt-2 text-gray-600 dark:text-gray-300">
            This is a simple card design with light and dark theme toggle.
          </p>

          <button className="mt-5 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
            Order Now
          </button>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App