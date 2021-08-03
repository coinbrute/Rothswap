import { useCurrency } from 'hooks/Tokens'
import { useTradeExactIn } from 'hooks/Trades'
import { tryParseAmount } from 'state/swap/hooks'

const useGetRcBusdLpPrice = () => {
  const rcAddress = '0x469e1B615EE931585399b5eDEBe5773cd715522E'
  const busdAddress = '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
  const inputCurrency = useCurrency(rcAddress)
  const outputCurrency = useCurrency(busdAddress)
  const parsedAmount = tryParseAmount('1', inputCurrency ?? undefined)
  const bestTradeExactIn = useTradeExactIn(parsedAmount, outputCurrency ?? undefined)
  const price = bestTradeExactIn?.executionPrice.toSignificant(6)
  return price ? parseFloat(price) : undefined
}

export default useGetRcBusdLpPrice
