export interface StructuredDataProps<T extends {}> {
    data?: T
}

function LdScript<T extends {}>({data}: StructuredDataProps<T>) {
    const jsonLd = {
        "@context": "https://schema.org",
        ...data
    }

    return <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
}

export default LdScript;