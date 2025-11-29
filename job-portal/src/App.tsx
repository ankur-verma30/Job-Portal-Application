import { createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import HomePage from './Pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '@mantine/carousel/styles.css';
import FindJobs from './Pages/FindJobs';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const App = () => {
  const theme = createTheme({
    colors: {
      'mineShaft': ['#f9f9f9', '#e0e0e0', '#c7c7c7', '#aeaeae', '#959595', '#7c7c7c', '#636363', '#4a4a4a', '#313131', '#181818', '#000000'],
      'brightSun': ['#fffbeb', '#fff3c6', '#ffe588', '#ffd149', '#ffbd20', '#f99b07', '#dd7302', '#b75006', '#943c0c', '#7a330d', '#461902'],
    },
    fontFamily: 'Poppins, sans-serif',
  })
  return (
    <MantineProvider theme={theme} defaultColorScheme='dark' >
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/find-jobs" element={<FindJobs/>}/>
        <Route path='*' element={<HomePage />} /> 
      </Routes>
      <Footer/>
      </BrowserRouter>
    </MantineProvider>
  )
}

export default App