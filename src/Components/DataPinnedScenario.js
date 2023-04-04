import { useExpenses } from '../Providers/GraphValuesProvider/ExpensesProvider'
import { useValues } from '../Providers/GraphValuesProvider/ValuesProvider'
import { useGraph } from "../Providers/GraphProvider"
import { useScenario } from "../Providers/ScenarioProvider"
import { useEffect } from 'react'


const DataPinnedScenario = () => {
    const { scenario } = useScenario()
    const { pinScenario, unpinScenario } = useGraph()

    const graphExpenses = useExpenses().graphValues
    const graphValues = useValues().graphValues


    useEffect(() => {
        if (!graphExpenses || !graphExpenses) return
        pinScenario.current(scenario, [...graphValues, ...graphExpenses])

        const unpin = unpinScenario.current
        return () => {
            unpin(scenario)
        }

    }, [scenario, graphExpenses, graphValues, pinScenario, unpinScenario])
}

export default DataPinnedScenario


