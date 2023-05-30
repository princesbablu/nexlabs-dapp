import Image from 'next/image';

const PositionTable = () => {
    return (
        <div className="w-full overflow-auto min-w-[576px]">
            <table className="table-fixed w-full border-collapse border border-[#161C10] heir-[th]:h-9 heir-[th]:border-b heir-[th]:border-[#161C10]">
                <thead>
                    <tr className="text-[10px] text-[#ECF1F6]">
                        <th>Product</th>
                        <th>Size</th>
                        <th>Entry Price</th>
                        <th>Market Price</th>
                        <th>Unrealized Pnl</th>
                        <th>Realized Pnl</th>
                        <th>Liquidation Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan={7}>
                            <div className="flex justify-center h-full py-20">
                                <Image src="/empty-data.png" alt="" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }} />
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default PositionTable