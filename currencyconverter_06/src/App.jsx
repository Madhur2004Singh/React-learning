import { useState } from 'react'
import useCurrencyInfo from './hooks/UseCurrencyInfo'
import { InputBox } from './components/index.js'

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [ConvertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(from);
  const Options = Object.keys(currencyInfo);

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  }

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(ConvertedAmount);
    setConvertedAmount(amount);
  }

  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
      style={{ backgroundImage: 'url(https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?cs=srgb&dl=pexels-davidmcbee-730547.jpg&fm=jpg)' }}>

      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          
          {/* Form must be INSIDE the card div */}
          <form onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}>
            
            {/* FROM Input */}
            <div className='w-full mb-1'>
              <InputBox
                label="from"
                amount={amount}
                currencyOptions={Options}
                onCurrencyChange={(currency) => setFrom(currency)} // Should probably be setFrom, but kept logic close to yours
                selectCurrency={from} // Changed selectedCurrency to selectCurrency (standard prop name check)
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>

            {/* SWAP Button Container */}
            <div className='relative w-full h-0.5'>
              <button
                type="button"
                className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
                onClick={swap}
              >
                swap
              </button>
            </div>

            {/* TO Input (Was missing in your code) */}
            <div className='w-full mt-1 mb-4'>
              <InputBox
                label="to"
                amount={ConvertedAmount}
                currencyOptions={Options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisabled // Prevent user from typing in result box
              />
            </div>

            {/* Submit Button (Was missing in your code) */}
            <button type='submit' className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'>
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>

          </form>
        </div>
      </div>
    </div>
  )
}

export default App