// import { useState } from "preact/hooks";
import { LocationProvider, Router, Route } from "preact-iso";
import Home from "./pages/Home";
import Series from "./pages/Series";
import Actors from "./pages/Actors";
import Nav from "./components/Nav";

function App() {
    return (
        <LocationProvider>
            <Nav />
            <main class="px-10 pb-10">
                <Router>
                    <Route path="/" component={Home} />
                    <Route path="/series" component={Series} />
                    <Route path="/actors" component={Actors} />
                </Router>
            </main>
        </LocationProvider>
    );
}

export default App;
