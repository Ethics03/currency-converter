import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useCurrency from './hooks/useCurrency'
import InputBox from './components/inputbox.jsx';

function App() {

  
  const [amount,setamount] = useState()
  const [from,setfrom] = useState('usd')
  const [to,setto] = useState('inr')
  const [convertedamount,setconvertedamount] = useState(0)

  const currencyinfo = useCurrency(from)
  const options = Object.keys(currencyinfo)

  const swap = () =>{
    setto(from)
    setfrom(to)
    
    setamount(convertedamount)
   

   
  }

  const convert = ()  => {
    setconvertedamount(amount*currencyinfo[to])
  }

  return (
    <>
      <div className = 'w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
       style={{backgroundImage: 'url(https://images.pexels.com/photos/6770610/pexels-photo-6770610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'}}
       >
         
        <div className = 'w-full'>
          <div className = 'w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
              <form onSubmit = {(e) => 
                {
                  e.preventDefault()
                  convert()
                }}>
                  <div className = 'w-full mb-1'>
                     
                     <InputBox
                     label = "From"
                     amount = {amount}
                     currencyOptions = {options}
                     onCurrencyChange={(currency) => setfrom(currency)}
                     onAmountChange={(amount) => setamount(amount)}
                     selectedcurrency = {from}
                     />
                  </div>
                  <div className = 'relative w-full h-0.5'>
                    <button
                    className = 'absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-green-600 text-white px-2 py-0.5'
                    onClick = {swap}
                    >
                      Swap
                    </button>
                  </div>
                  <div className = 'w-full mb-1'>
                     
                     <InputBox
                     label = "To"
                     amount = {convertedamount}
                     currencyOptions = {options}
                     onCurrencyChange={(currency) => setto(currency)}               
                     amountDisabled = {true}
                     />
                  </div>
                  <button type = "submit"
                  className = 'w-full bg-green-600 text-white px-2 py-2 rounded-lg'
                  >Convert</button>
                </form>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
