import Navbar from "./Navbar";

export default function Page ({ children }) {
    return (
        <div className="App">
            <Navbar />
           {children}
        </div>
    )
}