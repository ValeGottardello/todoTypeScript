
import { FilterValue } from "../types"
import { Filter } from "./Filter"

interface Props {
    activeCount: number
    completedCount: number
    filterSelected: FilterValue
    handleFilterChange: (filter: FilterValue) => void
    onClearCompleted:() => void
}

export const Footer: React.FC<Props> = ({ 
    activeCount = 0, 
    completedCount = 0,
    filterSelected,
    handleFilterChange,
    onClearCompleted}) => {

        return (
            <footer className="footer">
                <span className="todo-count">
                    <strong>{activeCount} pending tasks</strong>
                </span>

                <Filter
                    filterSelected={filterSelected}
                    onFilterChange={handleFilterChange}/>
                { completedCount > 0 && (
                    <button
                        className="clear-completed"
                        onClick={onClearCompleted}>Remove completed tasks</button>
                )}
            </footer>
        )
}