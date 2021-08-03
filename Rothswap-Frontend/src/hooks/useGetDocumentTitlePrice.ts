import { useEffect } from 'react'
import useGetRcBusdLpPrice from 'utils/useGetRcBusdLpPrice'

const useGetDocumentTitlePrice = () => {
  const rcPriceBusd = useGetRcBusdLpPrice()

  const rcPriceBusdString =
    Number.isNaN(rcPriceBusd) || rcPriceBusd === 0 || !rcPriceBusd
      ? ''
      : ` - $${rcPriceBusd.toLocaleString(undefined, {
          minimumFractionDigits: 3,
          maximumFractionDigits: 3,
        })}`

  useEffect(() => {
    document.title = `Rothswap${rcPriceBusdString}`
  }, [rcPriceBusdString])
}
export default useGetDocumentTitlePrice
