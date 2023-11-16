import "./Filter.css"
import {useDispatch, useSelector} from "react-redux";
import {
    setTitleFilter,
    selectTitleFilter,
    resetFilters,
    selectAuthorFilter,
    setAuthorFilter, selectOnlyFavorite, setOnlyFavorite
} from "../redux/Slices/filterSlice.ts";

const Filter = () => {
    const dispatch = useDispatch();
    const titleFilter = useSelector(selectTitleFilter)
    const authorFilter = useSelector(selectAuthorFilter)
    const onlyFavoriteFilter = useSelector(selectOnlyFavorite)
    const handleTitle = (e) => {
        dispatch(setTitleFilter(e.target.value))
    }
    const handleAuthor = (e) => {
        dispatch(setAuthorFilter(e.target.value))
    }
    const handleOnlyFavorite = () => {
        dispatch(setOnlyFavorite())
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

                <div className="filter-group">
                    <input
                        type="text"
                        value={authorFilter}
                        placeholder="filter by author"
                        onChange={handleAuthor}
                    />
                </div>

                <div className="filter-group">
                    <label>
                        <input type="checkbox" checked={onlyFavoriteFilter} onChange={handleOnlyFavorite}/>
                        Only Favorite
                    </label>
                </div>

                <button type="button" onClick={() => dispatch(resetFilters())}>
                    Reset
                </button>
            </div>
        </div>
    )
}

export default Filter;
