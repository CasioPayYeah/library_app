import "./Filter.css"
import {useDispatch, useSelector} from "react-redux";
import {setTitleFilter, selectTitleFilter, resetFilters} from "../redux/Slices/FilterSlice.ts";

const Filter = () => {
    const dispatch = useDispatch();
    const titleFilter = useSelector(selectTitleFilter)
    const handleTitle = (e) => {
        dispatch(setTitleFilter(e.target.value))
    }

    return (
        <div className="app-block filter">
            <div className="filter-row">
                <div className="filter-group">
                    <input
                        type="text"
                        value={titleFilter}
                        placeholder="filter by title"
                        onChange={handleTitle}
                    />
                </div>

                <button type="button" onClick={() => dispatch(resetFilters())}>
                    Reset
                </button>
            </div>
        </div>
    )
}

export default Filter;
