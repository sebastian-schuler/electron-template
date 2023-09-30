import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import ColorSchemeSwitch from './components/color-scheme-switch/color-scheme-switch';
import { appTheme } from './styles/coreTheme';
import "./styles/global.css";

// console.log('[App.tsx]', `Hello world from Electron ${process.versions.electron}!`)

function App() {

  return (
    <div>
      <MantineProvider defaultColorScheme='dark' theme={appTheme}>
        <ColorSchemeSwitch />
      </MantineProvider>
    </div>
  )
}

export default App