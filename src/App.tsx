import './App.css'
import BookForm from "./components/BookForm.tsx";
import BookList from "./components/BookList.tsx";
import Filter from "./components/Filter.tsx";

function App() {
    return (
        <div className="block h-screen">
            <div className="app">
                <header className="app-header">
                    <h1>Library App</h1>
                </header>

                <main className="app-main">
                    <div className="app-left-column">
                        <BookForm />
                    </div>
                    <div className="app-right-column">
                        <BookList />
                        <Filter />
                    </div>
                </main>
            </div>
        </div>
    )
}

export default App
