import React from 'react'

const data = [
    { time: '5 min ago', pair: 'BTC/USDC', side: "buy", executed: 178.50, fee: 0.906, fee_currency: 'USDC', total: 906.00, total_currency: 'USDC', total_price: 907.49, total_price_currency: 'BUSD' },
    { time: '10 min ago', pair: 'BTC/USDC', side: "sell", executed: 178.50, fee: 0.906, fee_currency: 'USDC', total: 906.00, total_currency: 'USDC', total_price: 907.49, total_price_currency: 'BUSD' },
    { time: '30 min ago', pair: 'BTC/USDC', side: "buy", executed: 178.50, fee: 0.906, fee_currency: 'USDC', total: 906.00, total_currency: 'USDC', total_price: 907.49, total_price_currency: 'BUSD' },
    { time: '1 hour ago', pair: 'BTC/USDC', side: "sell", executed: 178.50, fee: 0.906, fee_currency: 'USDC', total: 906.00, total_currency: 'USDC', total_price: 907.49, total_price_currency: 'BUSD' },
    { time: '1 hour ago', pair: 'BTC/USDC', side: "buy", executed: 178.50, fee: 0.906, fee_currency: 'USDC', total: 906.00, total_currency: 'USDC', total_price: 907.49, total_price_currency: 'BUSD' },
    { time: '2 hours ago', pair: 'BTC/USDC', side: "sell", executed: 178.50, fee: 0.906, fee_currency: 'USDC', total: 906.00, total_currency: 'USDC', total_price: 907.49, total_price_currency: 'BUSD' },
    { time: '2 hours ago', pair: 'BTC/USDC', side: "buy", executed: 178.50, fee: 0.906, fee_currency: 'USDC', total: 906.00, total_currency: 'USDC', total_price: 907.49, total_price_currency: 'BUSD' },
]

const HistoryTable = () => {
    return (
        <table className="table-fixed w-full border-collapse border border-[#161C10] heir-[th]:h-9 heir-[th]:border-b heir-[th]:border-[#161C10] min-w-[700px] shadow-xl rounded-xl overflow-hidden">
            <thead>
                <tr className="text-[10px] text-[#ECF1F6] bg-[#1A1E16]">
                    <th className='px-4 text-left'>Time</th>
                    <th className='px-4 text-left'>Pair</th>
                    <th className='px-4 text-left'>Side</th>
                    <th className='px-4 text-left'>Executed</th>
                    <th className='px-4 text-left'>Fee</th>
                    <th className='px-4 text-left'>Total</th>
                    <th className='px-4 text-right'>Total Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((el, i) => {
                        return (
                            <tr key={i} className='child-[td]:text-[#D8DBD5]/60 child:px-4 child:text-[10px] bg-[#1C2018]/20'>
                                <td>{el.time}</td>
                                <td>{el.pair}</td>
                                <td>
                                    <div className="capitalize px-3 py-1 h-5 rounded bg-[#1c2018] inline-flex items-center">
                                        {el.side}
                                    </div>
                                </td>
                                <td>{el.executed}</td>
                                <td>{el.fee} {el.fee_currency}</td>
                                <td>{el.total} {el.total_currency}</td>
                                <td className='text-right'>= {el.total_price} {el.total_price_currency}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default HistoryTable