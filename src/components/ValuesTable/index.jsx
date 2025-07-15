export default ({height, weight, imc, valuesTableDisplay}) => {
    // Format values to show only 2 decimal places
    const formattedHeight = parseFloat(height).toFixed(2);
    const formattedWeight = parseFloat(weight).toFixed(2);
    const formattedImc = parseFloat(imc).toFixed(2);

    return(
        <div className={`${valuesTableDisplay} flex justify-center items-center text-gray-50 mb-6`}>
                <table className="table-auto border-collapse border border-gray-400">
                    <thead>
                        <tr>
                            <th className="border border-gray-400 px-4 py-2">Altura</th>
                            <th className="border border-gray-400 px-4 py-2">Peso</th>
                            <th className="border border-gray-400 px-4 py-2">IMC</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-gray-400 px-4 py-2">{formattedHeight}</td>
                            <td className="border border-gray-400 px-4 py-2">{formattedWeight}</td>
                            <td className="border border-gray-400 px-4 py-2">{formattedImc}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
    )
}