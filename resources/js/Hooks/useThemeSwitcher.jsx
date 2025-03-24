import { Sun,Moon } from 'lucide-react';
import { ThemeContext} from './useTheme';
import { useContext } from 'react';

export const ThemeSwitcher = ()=>{
    const {theme, switchTheme} = useContext(ThemeContext)
    return <div className='self-center'>
                <button onClick={switchTheme} className="w-[60px] h-[26px] ring-transparent flex flex-col items-center bg-white rounded-sm transition duration-300 ease-in-out shadow-sm border border-gray-300 font-semibold p-1 r text-gray-600    dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
                    {(theme)? <Moon className='self-start'/> :<Sun className='self-end'/>  }
                </button>
            </div>
}
