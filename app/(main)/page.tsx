import {FC} from "react";
import Container from "@/components/layout/container/Container";
import Header from "@/components/elements/typography/header/Header";
import Secondary from "@/components/elements/typography/secondary/Secondary";
import Button from "@/components/elements/interactive/button/Button";
import Breadcrumb from "@/components/elements/breadcrumb/Breadcrumb";
import HtmlRender from "@/components/elements/htmlrenderer/HtmlRender";

async function Home() {
    return (
        <>
            <Container>
                <Breadcrumb path={[
                    {text: "Breadcrumb", href: "/"},
                    {text: "Section", href: "section/"},
                ]}/>
                <Header l={"h1"}>Next template</Header>
                <Header l={"h2"}>Header 2</Header>
                <Header l={"h3"}>Header 3</Header>
                <Header l={"h4"}>Header 4</Header>
                <Header l={"h5"}>Header 5</Header>
                <Header l={"h6"}>Header 6</Header>
                <p>Text</p>
                <Secondary>Secondary</Secondary>
                <Button>Button</Button>
                <HtmlRender>
                    {"<h3>Rendered</h3><p>Test</p>"}
                </HtmlRender>
            </Container>
        </>
    )
}

export default Home as unknown as FC;
