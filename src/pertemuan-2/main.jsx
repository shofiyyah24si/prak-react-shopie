import { createRoot } from "react-dom/client";
import './custom.css';
import HelloWorld from "./HelloWorld";
import QuoteText from "./QuoteText";
import Container from "./Container";


createRoot(document.getElementById("root"))
    .render(
        <div>
            <Container> 
                <img src="img/Hello.jpg" alt="logo" width="600px" />
                <HelloWorld/>
                <QuoteText/>
            </Container>

        </div>
    )